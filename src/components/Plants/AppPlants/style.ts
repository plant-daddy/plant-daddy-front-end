import { Dimensions, StyleSheet } from "react-native";
import { theme } from "~global";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  animatedContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    backgroundColor: theme.colors.darkGreen,

    height,
    width,

    paddingHorizontal: 10,
  },
  horizontalBar: {
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    width: 40,
    height: 5,
    marginVertical: 10,

    alignSelf: 'center'
  }
});
