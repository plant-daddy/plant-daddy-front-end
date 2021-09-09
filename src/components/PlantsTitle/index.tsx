import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Title } from "~components/UI";

import { style } from "./style";
import { useNavigation } from "@react-navigation/core";

interface PlantsTitleProps {
  title: string;
  color?: string;
}

export function PlantsTitle({ title, color }: PlantsTitleProps) {
  const navigation = useNavigation();

  const goToAdd = () => {
    navigation.navigate("AddPlant");
  };

  const iconStyle = { ...style.icon, color };

  return (
    <View style={style.container}>
      <Title style={[{ color }]}>{title}</Title>
      <View style={style.iconContainer}>
        <Ionicons name="search" size={25} style={iconStyle} />
        <Ionicons
          name="add-circle-outline"
          size={25}
          style={iconStyle}
          onPress={goToAdd}
        />
      </View>
    </View>
  );
}
