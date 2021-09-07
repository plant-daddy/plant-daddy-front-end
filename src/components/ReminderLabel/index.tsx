import React from "react";
import { SvgProps } from "react-native-svg";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { style } from "./style";
import { Text } from "~components/UI";

interface ReminderLabelProps extends TouchableOpacityProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  isWater: boolean;
}

export function ReminderLabel({
  title,
  icon: Icon,
  checked,
  isWater,
  ...rest
}: ReminderLabelProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        style.container,
        isWater ? style.water : style.fertilize,
        { opacity: checked ? 1 : 0.3 },
      ]}
    >
      <Icon />
      <Text style={[isWater ? style.water : style.fertilize, style.text]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
