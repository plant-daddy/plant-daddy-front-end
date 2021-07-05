import React from 'react';
import {
  TouchableHighlight,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle
} from 'react-native';
import { theme } from '~global';

type ButtonType = 'primary' | 'link'

interface ButtonProps {
  title: string;
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  onPress: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export function Button({ onPress, title, type, style }: ButtonProps) {

  const buttonStyle = type ?? 'primary';

  const textStyle = (property?: ButtonType) => {
    if (!property) return styleFromButton.primaryText;

    const entry = Object.entries(styleFromButton).find(([k]) => k === `${property}Text`);

    return entry ? entry[1] : styleFromButton.primaryText;
  }

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      onPress={onPress}
      underlayColor={theme.colors.mediumGreen + '5a'}
      style={[
        styleFromButton.button,
        styleFromButton[buttonStyle],
        style,
      ]}
    >
      <Text style={textStyle(type)}>{title}</Text>
    </TouchableHighlight>
  );
}

const styleFromButton = StyleSheet.create({
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
