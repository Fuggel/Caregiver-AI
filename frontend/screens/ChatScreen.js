import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useChatContext } from "../context/ChatContext";
import TypeWriter from "react-native-typewriter";
import Toast from "react-native-toast-message";
import axios from "axios";
import { API_URL } from "@env";

const ChatScreen = () => {
  const { chatHistory, updateChatHistory } = useChatContext();
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const scrollViewRef = useRef();

  const handleSendRequest = async () => {
    try {
      if (userInput === "") {
        return;
      }

      updateChatHistory([...chatHistory, { role: "user", content: userInput }]);
      setUserInput("");
      setError(null);

      const response = await axios.post(`${API_URL}/question`, { userInput });

      updateChatHistory(response.data.chatHistory);
      setAnimatedIndex(response.data.chatHistory.length - 1);
    } catch (error) {
      console.log(error);
      setError(error);
      setUserInput("");
    }
  };

  const handleDeleteChat = async () => {
    try {
      await axios.post(`${API_URL}/delete-chat`);
      updateChatHistory([]);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Es ist ein Fehler aufgetreten...",
        text2: `${error}`,
      });
    }
  }, [error]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={68}
      style={styles.container}
    >
      {chatHistory.length > 0 ? (
        <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteChat}>
          <MaterialCommunityIcons
            name="delete-circle"
            size={42}
            color={"#A50A14"}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.chatLogoContainer}>
          <AntDesign name="message1" style={styles.chatLogo} />
        </View>
      )}
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        style={styles.responseContainer}
      >
        {chatHistory.map((message, i) => (
          <View key={i}>
            <View style={styles.roleTextWrapper}>
              <Ionicons
                name="person-circle"
                size={30}
                color={message.role === "system" ? "#FF2E63" : "#0766AD"}
              />
              <Text style={styles.roleText}>
                {message.role === "system" ? "Caregiver-AI" : "Sie"}
              </Text>
            </View>
            {message.role === "system" && i === animatedIndex ? (
              <TypeWriter style={styles.chatMessage} typing={1} maxDelay={50}>
                {message.content}
              </TypeWriter>
            ) : (
              <Text style={styles.chatMessage}>{message.content}</Text>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ihre Nachricht..."
          onChangeText={(text) => setUserInput(text)}
          value={userInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSendRequest}>
          <AntDesign name="rightcircle" size={36} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatLogoContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chatLogo: {
    color: "#252525",
    fontSize: 150,
  },
  roleTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  roleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 12,
    zIndex: 999999,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 1,
  },
  responseContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    flexGrow: 1,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  chatMessage: {
    marginBottom: 16,
    marginLeft: 34,
    fontSize: 15,
  },
});

export default ChatScreen;
