import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StepsProps {
  quantity: number;
  current: number;
}

const range = (n: number) => {
  const arr = [];

  for (let i = 0; i<n; i+=1) {
    arr.push(i);
  }

  return arr;
}

export function Steps({ quantity, current }: StepsProps) {


  return (
    <View style={style.steps}>
      { range(quantity).map(r => (
        <View
          key={r}
          style={[style.step, (current === r ? style.current : undefined)]}
        />
      )) }
    </View>
  )
}

const style = StyleSheet.create({
  steps: {
    flexDirection: 'row',
  },
  step: {
    width: 6,
    height: 6,
    backgroundColor: '#D0E1DD',
    borderRadius: 50,
    margin: 5,
    marginBottom: 20,
  },
  current: {
    backgroundColor: '#65CCB7',
  }
});