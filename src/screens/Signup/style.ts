import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0.05*height
  },
  image: {
    width: 330,
    resizeMode: 'contain',
    marginVertical: 0.06*height
  },
  signupButton: {
    marginTop: 20,
  }
});