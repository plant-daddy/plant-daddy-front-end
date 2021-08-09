import React from "react";
import { Text, TextProps } from "react-native";

import { style } from "./style";

interface TitleProps extends TextProps {
  children?: React.ReactNode;
  marginHorizontal?: number;
  marginTop?: number;
}

export function Title({ children, marginHorizontal, marginTop, ...rest }: TitleProps) {
  const marginStyle = { marginHorizontal, marginTop };

  return (
    <Text {...rest} style={[style.title, marginStyle, rest.style]}>
      {children}
    </Text>
  );
}
