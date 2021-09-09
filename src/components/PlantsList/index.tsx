import React, { ReactNode, useContext } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { PNGPlantPicture } from "~assets";
import { theme } from "~global";
import { Text } from "../UI/Text";
import { style } from "./style";
import { Nunito_300Light_Italic } from "@expo-google-fonts/nunito";
import RemindersContext from "~hooks/RemindersContext";
// import { TouchableOpacity } from "react-native-gesture-handler";

interface PlantsListItemProps {
  id?: string;
  image?: any;
  title: string;
  color?: string;
  isUserPlant: boolean;
}

interface PlantListItemTemplateProps {
  id: number;
  image?: any;
  title: string;
  color?: string;
  isUserPlant: boolean;
}

export const PlantListItemTemplate = ({
  title,
  id,
  color = theme.colors.darkGreen,
  image = PNGPlantPicture,
  isUserPlant,
}: PlantListItemTemplateProps) => {
  const {
    currentSelectedPlantId,
    selectCurrentSelectedPlantId,
    isModalOpen,
    setIsModalOpen,
  } = useContext(RemindersContext);
  const onPlantSelect = () => {
    selectCurrentSelectedPlantId(id);
    setIsModalOpen(false);
  };

  return (
    <TouchableOpacity
      style={style.containerItem}
      onPress={() => onPlantSelect()}
    >
      <Image source={image} />
      <Text style={{ color }}>{title}</Text>
    </TouchableOpacity>
  );
};

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
