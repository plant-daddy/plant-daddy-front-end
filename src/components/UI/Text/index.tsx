import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import { theme } from '~global';

interface TextProps {
  children: React.ReactNode;
  marginHorizontal?: number;
}

export function Text({ children, marginHorizontal }: TextProps) {

  const marginStyle = { marginHorizontal }

  return (
    <NativeText style={[style.text, marginStyle]}>
      { children }
    </NativeText>
  );
}

const style = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.rubik300,
    color: theme.colors.darkGreen,
    fontSize: 14,
    textAlign: 'justify',
    margin: 10,
    marginBottom: 2,
  },
})