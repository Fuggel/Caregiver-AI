import { View, Text, Pressable } from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import NavigationItem from "../components/NavigationItem";
import { useAuth } from "../context/AuthContext";
import { styles } from "../styles/screens/homeScreenStyles";

const HomeScreen = ({ navigation }) => {
  const { token, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <FontAwesome5 name="brain" size={150} color="#252525" />
      </View>

      {token ? (
        <>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.8 : 1 },
              { ...styles.authButton, backgroundColor: "#A50A14" },
            ]}
            onPress={() => logout()}
          >
            <Text style={styles.authButtonText}>Logout</Text>
            <AntDesign name="logout" style={styles.authButtonLogo} />
          </Pressable>

          <NavigationItem
            icon={<AntDesign name="message1" size={36} color="#252525" />}
            title="Zu unserem KI-Helfer"
            onPress={() => navigation.navigate("Chat")}
          />
        </>
      ) : (
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1 },
            { ...styles.authButton, backgroundColor: "#252525" },
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.authButtonText}>Login</Text>
          <AntDesign name="login" style={styles.authButtonLogo} />
        </Pressable>
      )}

      <NavigationItem
        icon={<Feather name="phone-call" size={36} color="#252525" />}
        title="Zu den Notfallnummern"
        onPress={() => navigation.navigate("Notfallnummern")}
      />
    </View>
  );
};

export default HomeScreen;
