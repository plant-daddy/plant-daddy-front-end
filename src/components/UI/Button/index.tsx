import React from 'react';
import {
  Pressable,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Dimensions
} from 'react-native';


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
    <Pressable
      onPress={onPress}
      style={[
        style.button,
        style[buttonStyle]
      ]}>
      <Text style={textStyle(type)}>{title}</Text>
    </Pressable>
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
    backgroundColor: '#65CCB7',
  },
  link: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  primaryText: {
    color: '#f7f7f7',
  },
  linkText: {
    color: '#124647',
  }
});
