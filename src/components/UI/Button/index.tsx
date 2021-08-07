import React from "react";
import {
  TouchableHighlight,
  Text,
  TouchableHighlightProps,
} from "react-native";

import { style as btnStyle } from "./style";
import { theme } from "~global";

type ButtonType = "primary" | "link";

type ButtonProps = TouchableHighlightProps & {
  title: string;
  type?: ButtonType;
};

export function Button({ title, type, ...rest }: ButtonProps) {
  const buttonStyle = type ?? "primary";

  const textStyle = (property?: ButtonType) => {
    if (!property) return btnStyle.primaryText;

    const entry = Object
      .entries(btnStyle)
      .filter(([k]) => k.endsWith('Text'))
      .find(([k]) => k === `${property}Text`);

    return entry ? entry[1] : btnStyle.primaryText;
  };

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={theme.colors.mediumGreen}
      style={[
        btnStyle.button,
        { ...btnStyle[buttonStyle], ...(rest.style as Object) }
      ]}
      {...rest}
    >
      <Text style={textStyle(type)}>{title}</Text>
    </TouchableHighlight>
  );
}
