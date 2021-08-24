import { StyleSheet } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    position: "absolute",
    top: 50,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 48,
  },

  subtitle: {
    fontFamily: theme.fonts.nunito600,
    fontSize: 16,
    paddingHorizontal: 48,
  },

  labels: {
    flex: 1,
    marginTop: 25,
    flexDirection: "row",
    paddingHorizontal: 48,
    justifyContent: "space-around",
  },

  reminders: {
    marginHorizontal: 30,
  },
});
