import React from "react";
import { Text } from "react-native";

import { style } from "./style";

interface TitleProps {
  children?: React.ReactNode;
  marginHorizontal?: number;
  marginTop?: number;
}

export function Title({ children, marginHorizontal, marginTop }: TitleProps) {
  const marginStyle = { marginHorizontal, marginTop };

  return <Text style={[style.title, marginStyle]}>{children}</Text>;
}
