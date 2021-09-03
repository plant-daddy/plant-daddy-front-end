import { StyleSheet } from "react-native";
import { theme } from "~global";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    height: 125,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
  },

  plant: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  image: {
    borderRadius: 10,
  },

  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },

  options: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  biggerText: {
    fontFamily: theme.fonts.nunito400,
    fontSize: 16,
  },

  smallerText: {
    fontFamily: theme.fonts.nunito400,
    fontSize: 12,
  },

  water: {
    backgroundColor: theme.labels.water.background,
  },

  fertilize: {
    backgroundColor: theme.labels.fertilize.background,
  },
});
