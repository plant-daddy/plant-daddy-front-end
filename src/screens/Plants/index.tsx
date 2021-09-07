import React from 'react';
import { View } from 'react-native';

import { Plants as PlantsComp } from '~components';
import { style } from './style';

export function Plants() {
  return (
    <View style={style.container}>
      {/* my plants component */}
      <PlantsComp.UserPlants />

      {/* app plants component - componente que sobe ao arrastar para cima */}
      <PlantsComp.AppPlants />
    </View>
  );
}