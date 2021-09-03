import React, { ReactNode } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { PNGPlantPicture } from "~assets";
import { theme } from "~global";
import { Text } from "../UI/Text";
import { style } from "./style";
// import { TouchableOpacity } from "react-native-gesture-handler";

interface PlantsListItemProps {
  id?: string;
  image?: any;
  title: string;
  color?: string;
  isUserPlant: boolean;
}

export function PlantsListItem({
  title,
  id = "1",
  color = theme.colors.darkGreen,
  image = PNGPlantPicture,
  isUserPlant,
}: PlantsListItemProps) {
  const navigation = useNavigation();

  const goToDetails = (id: string) => {
    navigation.navigate("PlantDetails", { id, isUserPlant });
  };

  return (
    <TouchableOpacity
      style={style.containerItem}
      onPress={() => goToDetails(id)}
    >
      <Image source={image} />
      <Text style={{ color }}>{title}</Text>
    </TouchableOpacity>
  );
}

interface PlantsListProps {
  children: ReactNode;
}

export function PlantsList({ children }: PlantsListProps) {
  return <View style={style.container}>{children}</View>;
}
