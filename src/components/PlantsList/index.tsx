import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';

import { PNGPlantPicture } from '~assets';
import { theme } from '~global';
import { Text } from '../UI/Text';
import { style } from './style';

interface PlantsListItemProps {
  image?: any;
  title: string;
  color?: string;
}

export function PlantsListItem({
  title,
  color = theme.colors.darkGreen,
  image = PNGPlantPicture 
}: PlantsListItemProps) {

  return (
    <View style={style.containerItem}>
      <Image source={image} />
      <Text style={{ color }}>{title}</Text>
    </View>
  )
}

interface PlantsListProps {
  children: ReactNode;
}

export function PlantsList({ children }: PlantsListProps) {

  return (
    <View style={style.container}>
      { children }
    </View>
  )
}
