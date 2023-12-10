import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const helplineContacts = [
  {
    title: "Nummer gegen Kummer (Kinder & Jgdl.)",
    phoneNumber: "116 111",
  },
  {
    title: "Nummer gegen Kummer (Elterntelefon)",
    phoneNumber: "0800 111 0 550",
  },
  {
    title: "Hilfetelefon Gewalt gegen Frauen",
    phoneNumber: "0800 116 016",
  },
  {
    title: "Hilfetelefon Gewalt an Männern",
    phoneNumber: "0800 12 39 900",
  },
  {
    title: "Telefonseelsorge",
    phoneNumber: "0800 111 0 111",
  },
  {
    title: "Info-Telefon Depression",
    phoneNumber: "0800 334 4533",
  },
  {
    title: "Hilfetelefon Sexueller Missbrauch",
    phoneNumber: "116 111",
  },
  {
    title: "Hilfetelefon tatgeneigte Personen",
    phoneNumber: "0800 70 22 240",
  },
];

const HelplinesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {helplineContacts.map((contact) => (
        <View key={contact.title} style={styles.contactCard}>
          <Text style={styles.contactTitle}>{contact.title}</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            onPress={() => Linking.openURL(`tel:${contact.phoneNumber}`)}
          >
            <Feather name="phone-call" size={20} color="#007AFF" />
            <Text style={styles.contactNumber}>{contact.phoneNumber}</Text>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#777" }} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  contactCard: {
    padding: 8,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contactNumber: {
    fontSize: 16,
    marginVertical: 8,
    color: "#007AFF",
  },
});

export default HelplinesScreen;
