import {
  View,
  Text,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { helplineContacts } from "../constants/helplineConstants";
import Divider from "../components/Divider";
import { styles } from "../styles/screens/helplineScreenStyles";

const HelplinesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {helplineContacts.map((contact) => (
        <View key={contact.title} style={styles.contactCard}>
          <Text style={styles.contactTitle}>{contact.title}</Text>

          <TouchableOpacity
            style={styles.contactWrapper}
            onPress={() => Linking.openURL(`tel:${contact.phoneNumber}`)}
          >
            <Feather name="phone-call" size={20} color="#007AFF" />
            <Text style={styles.contactNumber}>{contact.phoneNumber}</Text>
          </TouchableOpacity>

          <Divider />
        </View>
      ))}
    </ScrollView>
  );
};

export default HelplinesScreen;
