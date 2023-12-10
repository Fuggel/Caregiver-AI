import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChatContext = createContext();

export const useChatContext = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const storedChatHistory = await AsyncStorage.getItem("chatHistory");
        if (storedChatHistory) {
          setChatHistory(JSON.parse(storedChatHistory));
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadChatHistory();
  }, []);

  useEffect(() => {
    const saveChatHistory = async () => {
      try {
        await AsyncStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      } catch (error) {
        console.log(error);
      }
    };

    saveChatHistory();
  }, [chatHistory]);

  const updateChatHistory = (newChatHistory) => {
    setChatHistory(newChatHistory);
  };

  return (
    <ChatContext.Provider value={{ chatHistory, updateChatHistory }}>
      {children}
    </ChatContext.Provider>
  );
};
