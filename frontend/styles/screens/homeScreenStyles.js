import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  authButton: {
    position: "absolute",
    top: 0,
    right: 16,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    flexDirection: "row",
  },
  authButtonLogo: {
    color: "#fff",
    fontSize: 18,
    left: 6,
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
