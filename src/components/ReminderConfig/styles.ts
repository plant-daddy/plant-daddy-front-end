import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { theme } from "~global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "79%",

    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: verticalScale(10),
  },
  title: {
    margin: 0,
    marginBottom: 0,
    flexDirection: "column",
    alignItems: "center",

    fontSize: scale(14),
    textAlign: "center",
  },
  optionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    flex: 1,
    height: verticalScale(20),
  },
  option: {
    paddingRight: scale(20),
    fontSize: scale(12),
    fontFamily: theme.fonts.rubik300,
    color: "black",
  },
  timePickerOtion: {
    top: verticalScale(1),
    flexDirection: "row",
    margin: verticalScale(4),
    padding: 0,
    marginRight: scale(10),
    width: scale(50),
    justifyContent: "space-between",
    alignContent: "center",
  },
  pickerOptionText: {
    margin: 0,
    padding: 0,
    fontSize: scale(12),
    fontFamily: theme.fonts.rubik300,
  },
});

export default styles;
