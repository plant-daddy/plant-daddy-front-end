import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

interface TextProps {
  children: React.ReactNode;
}

export function Text({ children }: TextProps) {
  return (
    <NativeText style={style.text}>{ children }</NativeText>
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