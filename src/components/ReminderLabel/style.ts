import { StyleSheet } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 7,
    maxWidth: 140,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 5,
  },

  water: {
    backgroundColor: theme.labels.water.background,
    color: theme.labels.water.text,
  },
  fertilize: {
    backgroundColor: theme.labels.fertilize.background,
    color: theme.labels.fertilize.text,
  },

  text: {
    fontFamily: theme.fonts.nunito600,
    fontSize: 18,
  },
});
