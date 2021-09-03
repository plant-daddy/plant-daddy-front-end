import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { theme } from "~global";

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "column",
    width: "79%",
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: verticalScale(10),
  },
  title: {
    margin: 0,
    marginBottom: 0,
    flexDirection: "column",
    alignItems: "center",
    // borderColor: "orange",
    // borderWidth: 1,
    fontSize: scale(14),
    textAlign: "center",
  },
  optionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 1,
  },
  picker: {
    // borderColor: "brown",
    // borderWidth: 1,
    flex: 1,
    height: verticalScale(20),
  },
  option: {
    paddingRight: scale(20),
    fontSize: scale(12),
    fontFamily: theme.fonts.rubik300,
  },
});

export default styles;
