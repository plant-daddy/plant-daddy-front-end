import React from "react";
import {
  TouchableHighlight,
  Text,
  TouchableHighlightProps,
} from "react-native";

import { style } from "./style";
import { theme } from "~global";

type ButtonType = "primary" | "link";

type ButtonProps = TouchableHighlightProps & {
  title: string;
  type?: ButtonType;
};

export function Button({ title, type, ...rest }: ButtonProps) {
  const buttonStyle = type ?? "primary";

  const textStyle = (property?: ButtonType) => {
    if (!property) return style.primaryText;

    const entry = Object.entries(style).find(([k]) => k === `${property}Text`);

    return entry ? entry[1] : style.primaryText;
  };

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={theme.colors.mediumGreen}
      style={[style.button, style[buttonStyle]]}
      {...rest}
    >
      <Text style={textStyle(type)}>{title}</Text>
    </TouchableHighlight>
  );
}
