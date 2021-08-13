import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    height,
    width,

    paddingHorizontal: 10,
    paddingTop: 42,
  },

  scrollContainer: {
    maxHeight: 600,
    marginHorizontal: -10,
    paddingHorizontal: 10,
  },
});