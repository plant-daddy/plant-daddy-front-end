import React from 'react';
import { Text, StyleSheet } from 'react-native';

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
    fontFamily: 'Rubik_700Bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
})