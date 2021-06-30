import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

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
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
    textAlign: 'justify',
    margin: 10,
    marginBottom: 2,
  },
})