import React, { useEffect } from "react";
import { View, Switch, Image, ImageProps, SwitchProps } from "react-native";

import { style } from "./style";
import { Text, Title } from "~components/UI";

import { SVGFertilize, SVGGota } from "~assets";

interface ReminderProps extends SwitchProps {
  title: string;
  checked: boolean;
  nextReminder: string;
  frequency: string;
  type: string;
  img: ImageProps;
}

export function Reminder({
  title,
  checked,
  nextReminder,
  frequency,
  type,
  img,
  ...rest
}: ReminderProps) {
  return (
    <View
      style={[
        style.container,
        type == "Water" ? style.water : style.fertilize,
        { opacity: checked ? 1 : 0.5 },
      ]}
    >
      <View>
        <View style={style.plant}>
          <Image source={img} style={style.image} />
          <Title style={style.biggerText}>{title}</Title>
        </View>
      </View>
      <View style={style.info}>
        <View style={style.options}>
          <Switch value={checked} {...rest} />
          {type == "Water" ? <SVGGota /> : <SVGFertilize />}
        </View>
        <Text style={style.smallerText}>{frequency}</Text>
        <Text style={style.biggerText}>{nextReminder}</Text>
      </View>
    </View>
  );
}
