import { View, SafeAreaView, TextInput, Pressable, Text } from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { styles } from "../styles/screens/loginScreenStyles";
import { useState } from "react";
import DismissKeyboard from "../components/DismissKeyboard";
import { useAuth } from "../context/AuthContext";
import { showToast } from "../utils/toast";
import { API_URL } from "../constants/apiConstants";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        return showToast("error", "Bitte geben Sie Username und Passwort ein.");
      }

      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      login(response.data.token);
      setUsername("");
      setPassword("");

      showToast("success", "Sie haben sich erfolgreich eingeloggt.");
      setTimeout(() => navigation.navigate("Home"), 1000);
    } catch (error) {
      if (error.response?.status === 401) {
        showToast("error", "Falscher Benutzername oder Passwort.");
      } else {
        showToast(
          "error",
          "Es ist ein unerwarteter Fehler aufgetreten...",
          error.message
        );
      }

      console.log(error);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <FontAwesome5 name="brain" size={150} color="#252525" />
        </View>

        <SafeAreaView>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
            textContentType="oneTimeCode"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            textContentType="oneTimeCode"
            secureTextEntry
          />

          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.8 : 1 },
              styles.button,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
            <AntDesign name="login" style={styles.buttonLogo} />
          </Pressable>
        </SafeAreaView>
      </View>
    </DismissKeyboard>
  );
};

export default LoginScreen;
