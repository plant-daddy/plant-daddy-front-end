import React from "react";
import { View, ScrollView } from "react-native";
import { theme } from "~global";

import { PlantsTitle } from "../../PlantsTitle";
import {
  PlantListItemTemplate,
  PlantsList,
  PlantsListItem,
} from "../../PlantsList";
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

interface UserPlantProps {
  reminder: boolean;
}

export function UserPlants({ reminder }: UserPlantProps) {
  return (
    <View style={style.container}>
      <PlantsTitle title="MY PLANTS" color={theme.colors.darkGreen} />

      <ScrollView style={style.scrollContainer}>
        <PlantsList>
          {data.map((d, index) =>
            reminder === false ||
            reminder === null ||
            reminder === undefined ? (
              <PlantsListItem key={d} title={d} isUserPlant={true} />
            ) : (
              <PlantListItemTemplate
                key={d}
                title={d}
                isUserPlant={true}
                id={index + 1}
              />
            )
          )}
        </PlantsList>
      </ScrollView>
    </View>
  );
}
