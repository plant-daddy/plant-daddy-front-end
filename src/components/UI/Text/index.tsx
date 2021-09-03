import React from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

import { style } from "./style";

interface TextProps extends NativeTextProps {
  children: React.ReactNode;
  marginHorizontal?: number;
}

export function Text({ children, marginHorizontal, ...rest }: TextProps) {
  const marginStyle = { marginHorizontal };

  return (
    <NativeText {...rest} style={[style.text, marginStyle, rest.style]}>
      {children}
    </NativeText>
  );
}
