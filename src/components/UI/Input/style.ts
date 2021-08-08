import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '~global';

export const style = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.lightGreen,

    width: 0.85*Dimensions.get('screen').width,
    height: 45,
    marginVertical: 10,
    paddingHorizontal: 15,
  }
});
