import React from "react";
import { Text as NativeText, TextProps } from "react-native";

import { style } from "./style";

interface TextType extends TextProps {
  children: React.ReactNode;
  marginHorizontal?: number;
}

export function Text({ children, marginHorizontal, ...rest }: TextType) {
  const marginStyle = { marginHorizontal };

  return <NativeText {...rest} style={[style.text, marginStyle, rest.style]}>{children}</NativeText>;
}
