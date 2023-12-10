import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <FontAwesome5 name="brain" size={150} color="#252525" />
      </View>
      <View style={styles.screenContainer}>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => navigation.navigate("Chat")}
        >
          <AntDesign name="message1" size={36} color="#252525" />
          <Text style={styles.navigationTitle}>Zu unserem KI-Helfer</Text>
          <AntDesign name="rightcircle" size={36} color="#252525" />
        </TouchableOpacity>
      </View>
      <View style={styles.screenContainer}>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => navigation.navigate("Notfallnummern")}
        >
          <Feather name="phone-call" size={36} color="#252525" />
          <Text style={styles.navigationTitle}>Zu den Notfallnummern</Text>
          <AntDesign name="rightcircle" size={36} color="#252525" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    justifyContent: "center",
    flex: 1,
  },
  logoWrapper: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  navigationTitle: {
    color: "#252525",
    fontSize: 16,
    marginHorizontal: 16,
    flex: 1,
  },
  screenContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderColor: "#252525",
    borderRadius: 20,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 2,
  },
  screen: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
