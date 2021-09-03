import React from "react";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

import { Text } from "~components/UI";

import { style } from "./style";

export interface CareDetailProps {
  key: number;
  icon: React.FC<SvgProps>;
  title: string;
}

export function CareDetail({ icon: Icon, title }: CareDetailProps) {
  return (
    <View style={style.container}>
      <Icon />
      <Text>{title}</Text>
    </View>
  );
}
