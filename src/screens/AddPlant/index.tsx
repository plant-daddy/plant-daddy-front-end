import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View } from "react-native";

import { style } from "./style";
import { Button, Title, Input } from "~components/UI";

import { AddPlantSVG } from "~assets";
import { useNavigation } from "@react-navigation/core";

export function AddPlant() {
  const [type, setType] = useState("");
  const [species, setSpecies] = useState("");

  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={style.container}>
      <AddPlantSVG />

      <View style={style.content}>
        <Title>Let's add a plant</Title>

        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: "Type", value: null }}
          onValueChange={(itemValue: string, itemIndex) => setType(itemValue)}
          fixAndroidTouchableBug={true}
          value={type}
          items={[
            { label: "Flower", value: "flower" },
            { label: "Bush", value: "bush" },
            { label: "Cactus", value: "cactus" },
          ]}
        />
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: "Species", value: null }}
          onValueChange={(itemValue: string, itemIndex) =>
            setSpecies(itemValue)
          }
          fixAndroidTouchableBug={true}
          value={species}
          items={[
            { label: "Narcissus", value: "narcissus" },
            { label: "Dahlia", value: "dahlias" },
            { label: "Dalmatian Bellflower", value: "dalmatian bellflower" },
          ]}
        />
        <Input placeholder="Nickname (optional)" />
        <Button title="Add Plant" onPress={goToHome} />
      </View>
    </View>
  );
}
