import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { theme } from "~global";

export const style = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: verticalScale(48),
    marginHorizontal: scale(51),
    marginBottom: verticalScale(88),
  },
  img: {
    marginTop: verticalScale(12),
    alignSelf: "center",
    width: scale(260),
    height: verticalScale(260),
  },
  smallTitle: {
    fontFamily: theme.fonts.nunito600,
    fontSize: 16,
  },
  cards: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(18),
  },
  delete: {
    alignSelf: "center",
    backgroundColor: "#FF0000",
    borderRadius: 8,
    padding: 8,
  },
});
