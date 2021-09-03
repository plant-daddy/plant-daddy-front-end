import React, { useEffect } from "react";
import { View, Switch, Image, ImageProps, SwitchProps } from "react-native";

import { style } from "./style";
import { Text, Title } from "~components/UI";

import { SVGFertilize, SVGGota } from "~assets";
import { useState } from "react";

interface ReminderProps extends SwitchProps {
  title: string;
  checked: boolean;
  nextReminder: string;
  frequency: { times: number; repeat_every: string };
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
  const [frequencyString, setFrequencyString] = useState("");

  React.useEffect(() => {
    let times = "";
    let repeat_every = "";
    if (frequency.times < 1) times = "-";
    if (frequency.times === 1) {
      times = "Once";
    } else if (frequency.times === 2) {
      times = "Twice";
    } else if (frequency.times === 3) {
      times = "Thrice";
    } else {
      times = `${frequency.times} times`;
    }

    if (frequency.repeat_every === "day") {
      repeat_every = " per day";
    } else if (frequency.repeat_every === "month") {
      repeat_every = " per month";
    } else if (frequency.repeat_every === "bimester") {
      repeat_every = " every two months";
    } else {
      repeat_every = "----------------";
    }

    setFrequencyString(times + repeat_every);
  }, []);

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
        <Text style={style.smallerText}>{frequencyString}</Text>
        <Text style={style.biggerText}>{nextReminder}</Text>
      </View>
    </View>
  );
}
