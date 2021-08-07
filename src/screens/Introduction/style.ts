import { Dimensions, StyleSheet } from "react-native";

const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("window");

export const style = StyleSheet.create({
  animation: {
    flexDirection: "row",
  },
  carrousel: {
    alignItems: "center",
  },
  controls: {
    justifyContent: "space-between",
    width: MAX_WIDTH,
    marginTop: 0.03*MAX_HEIGHT,
  },
  image: {
    width: MAX_WIDTH,
    height: 0.65*MAX_HEIGHT,
  },
  upperControls: {
    alignItems: "center",
  },
  skip: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 15,
    width: 60,
  },
});
