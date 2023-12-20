import { View } from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import NavigationItem from "../components/NavigationItem";
import { styles } from "../styles/screens/homeScreenStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <FontAwesome5 name="brain" size={150} color="#252525" />
      </View>

      <NavigationItem
        icon={<AntDesign name="message1" size={36} color="#252525" />}
        title="Zu unserem KI-Helfer"
        onPress={() => navigation.navigate("Chat")}
      />
      <NavigationItem
        icon={<Feather name="phone-call" size={36} color="#252525" />}
        title="Zu den Notfallnummern"
        onPress={() => navigation.navigate("Notfallnummern")}
      />
    </View>
  );
};

export default HomeScreen;
