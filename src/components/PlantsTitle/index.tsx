import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Title } from '~components/UI';

import { style } from './style';

interface PlantsTitleProps {
  title: string;
  color?: string;
}

export function PlantsTitle({ title, color }: PlantsTitleProps) {

  const iconStyle = { ...style.icon, color }

  return (
    <View style={style.container}>
      <Title style={[{ color }]}>{title}</Title>
      <View style={style.iconContainer}>
        <Ionicons name="search" size={25} style={iconStyle} />
        <Ionicons name="add-circle-outline" size={25} style={iconStyle} />
      </View>
    </View>
  );
}