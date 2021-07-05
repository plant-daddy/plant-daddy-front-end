import { StyleSheet } from 'react-native';
import { theme } from '~global';

export const style = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.lightGreen,

    width: '80%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
  }
});
