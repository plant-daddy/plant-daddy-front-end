import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { theme } from "~global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: verticalScale(40),
    alignItems: "center",
  },
  imageContainer: {
    width: "90%",
    height: "40%",
    // marginTop: verticalScale(0),
    marginBottom: verticalScale(10),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  returnButton: {
    backgroundColor: theme.colors.primaryWhite,
    width: scale(40),
    height: scale(40),
    borderRadius: 100,
    borderWidth: scale(2),
    borderColor: theme.colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  icon: {
    marginRight: scale(2.5),
    fontSize: scale(30),
  },
  title: {
    fontSize: scale(23.5),
    marginBottom: verticalScale(5),
    // borderColor: "black",
    // borderWidth: 1,
  },
});

export default styles;
