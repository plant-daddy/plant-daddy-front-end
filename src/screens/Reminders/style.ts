import { StyleSheet } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 50,
  },

  titleContainer: {
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
    marginTop: 25,
    flexDirection: "row",
    paddingHorizontal: 48,
    justifyContent: "space-around",
  },

  reminders: {
    marginHorizontal: 30,
    marginBottom: 60,
  },
});
