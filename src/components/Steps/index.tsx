import React from "react";
import { View } from "react-native";

import { style } from "./style";

interface StepsProps {
  quantity: number;
  current: number;
}

const range = (n: number) => {
  const arr = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }

  return arr;
};

export function Steps({ quantity, current }: StepsProps) {
  return (
    <View style={style.steps}>
      {range(quantity).map((r) => (
        <View
          key={r}
          style={[style.step, current === r ? style.current : undefined]}
        />
      ))}
    </View>
  );
}
