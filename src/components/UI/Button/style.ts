import { StyleSheet, Dimensions } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    width: 0.85 * Dimensions.get("screen").width,
  },
  primary: {
    backgroundColor: theme.colors.lightGreen,
  },
  link: {
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  primaryText: {
    color: theme.colors.primaryWhite,
  },
  linkText: {
    color: theme.colors.darkGreen,
    textDecorationLine: "underline",
  },
});
