import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  steps: {
    flexDirection: "row",
  },
  step: {
    width: 6,
    height: 6,
    backgroundColor: "#D0E1DD",
    borderRadius: 50,
    margin: 5,
    marginBottom: 20,
  },
  current: {
    backgroundColor: "#65CCB7",
  },
});
