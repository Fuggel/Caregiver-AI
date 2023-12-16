import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatLogoContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chatLogo: {
    color: "#252525",
    fontSize: 150,
  },
  roleTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  roleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 12,
    zIndex: 999999,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 1,
  },
  responseContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    flexGrow: 1,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  chatMessage: {
    marginBottom: 16,
    marginLeft: 34,
    fontSize: 15,
  },
});
