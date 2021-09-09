import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(100),
    height: "100%",
  },
  content: {
    flex: 1,
    marginTop: verticalScale(20),
    height: "100%",
    marginBottom: verticalScale(100),
    justifyContent: "space-around",
  },
});
