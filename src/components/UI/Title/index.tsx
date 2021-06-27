import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
  children?: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <Text style={style.title}>{ children }</Text>
  );
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
})