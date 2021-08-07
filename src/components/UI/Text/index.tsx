import React from "react";
import { Text as NativeText } from "react-native";

import { style } from "./style";

interface TextProps {
  children: React.ReactNode;
  marginHorizontal?: number;
}

export function Text({ children, marginHorizontal }: TextProps) {
  const marginStyle = { marginHorizontal };

  return <NativeText style={[style.text, marginStyle]}>{children}</NativeText>;
}
