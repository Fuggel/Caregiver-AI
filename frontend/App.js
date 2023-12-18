import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import HelplinesScreen from "./screens/HelplinesScreen";
import { ChatProvider } from "./context/ChatContext";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ChatProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Notfallnummern" component={HelplinesScreen} />
        </Stack.Navigator>
      </ChatProvider>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
