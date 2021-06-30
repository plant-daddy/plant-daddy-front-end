import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '~global';

interface TitleProps {
  children?: React.ReactNode;
  marginHorizontal?: number
}

export function Title({ children, marginHorizontal }: TitleProps) {
  const marginStyle = { marginHorizontal };

  return (
    <Text style={[style.title, marginStyle]}>
      { children }
    </Text>
  );
}

const style = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.rubik700,
    color: theme.colors.darkGreen,
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
})