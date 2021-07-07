import { StyleSheet } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.rubik300,
    color: theme.colors.darkGreen,
    fontSize: 14,
    textAlign: "justify",
    margin: 10,
    marginBottom: 2,
  },
});
