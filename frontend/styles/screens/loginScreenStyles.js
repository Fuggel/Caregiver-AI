import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    justifyContent: "center",
  },
  logoWrapper: {
    alignItems: "center",
    marginVertical: 64,
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#252525",
    flexDirection: "row",
  },
  buttonLogo: {
    color: "#fff",
    fontSize: 24,
    left: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});