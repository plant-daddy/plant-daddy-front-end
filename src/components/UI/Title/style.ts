import { StyleSheet } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.rubik700,
    color: theme.colors.darkGreen,
    fontSize: 24,
    textAlign: "center",
    margin: 10,
  },
});
