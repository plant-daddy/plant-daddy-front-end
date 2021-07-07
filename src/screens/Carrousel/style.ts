import { Dimensions, StyleSheet } from "react-native";

const { width: MAX_WIDTH } = Dimensions.get("window");

export const style = StyleSheet.create({
  animation: {
    flexDirection: "row",
  },
  carrousel: {
    alignItems: "center",
  },
  controls: {
    marginTop: 24,
    height: 220,
    justifyContent: "space-between",
  },
  image: {
    width: MAX_WIDTH,
    height: 550,
  },
  upperControls: {
    alignItems: "center",
  },
  skip: {
    alignSelf: "flex-end",
    marginRight: 36,
  },
});
