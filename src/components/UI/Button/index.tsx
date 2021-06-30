import React from 'react';
import {
  TouchableHighlight,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Dimensions
} from 'react-native';
import { theme } from '~global';

type ButtonType = 'primary' | 'link'

interface ButtonProps {
  title: string;
  type?: ButtonType;
  onPress: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export function Button({ onPress, title, type }: ButtonProps) {

  const buttonStyle = type ?? 'primary';

  const textStyle = (property?: ButtonType) => {
    if (!property) return style.primaryText;

    const entry = Object.entries(style).find(([k]) => k === `${property}Text`);

    return entry ? entry[1] : style.primaryText; 
  }

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      onPress={onPress}
      underlayColor={theme.colors.mediumGreen}
      style={[
        style.button,
        style[buttonStyle]
      ]}>
      <Text style={textStyle(type)}>{title}</Text>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    width: 0.85 * Dimensions.get('screen').width,
  },
  primary: {
    backgroundColor: theme.colors.lightGreen,
  },
  link: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  primaryText: {
    color: theme.colors.primaryWhite,
  },
  linkText: {
    color: theme.colors.darkGreen,
    textDecorationLine: 'underline',
  }
});
