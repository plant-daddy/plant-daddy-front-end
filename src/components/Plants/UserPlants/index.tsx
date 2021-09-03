import React from "react";
import { View, ScrollView } from "react-native";
import { theme } from "~global";

import { PlantsTitle } from "../../PlantsTitle";
import { PlantsList, PlantsListItem } from "../../PlantsList";
import { style } from "./style";

const data = [
  "Lorem Ipsum 1",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 5",
  "Lorem Ipsum 6",
  "Lorem Ipsum 7",
];

export function UserPlants() {
  return (
    <View style={style.container}>
      <PlantsTitle title="MY PLANTS" color={theme.colors.darkGreen} />

      <ScrollView style={style.scrollContainer}>
        <PlantsList>
          {data.map((d) => (
            <PlantsListItem key={d} title={d} isUserPlant={true} />
          ))}
        </PlantsList>
      </ScrollView>
    </View>
  );
}
