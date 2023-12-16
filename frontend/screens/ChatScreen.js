import React, { useState, useRef } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/screens/chatScreenStyles";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useChatContext } from "../context/ChatContext";
import TypeWriter from "react-native-typewriter";
import axios from "axios";
import { API_URL } from "@env";
import Input from "../components/Input";
import useErrorToast from "../hooks/useError";

const ChatScreen = () => {
  const { chatHistory, updateChatHistory } = useChatContext();
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const scrollViewRef = useRef();

  useErrorToast(error);

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
      await axios.delete(`${API_URL}/delete-chat`);
      updateChatHistory([]);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

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

      <Input
        placeholder="Ihre Nachricht..."
        onChange={(text) => setUserInput(text)}
        value={userInput}
        onSubmit={handleSendRequest}
      />
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
