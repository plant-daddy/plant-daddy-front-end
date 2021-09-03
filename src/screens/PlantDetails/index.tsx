import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { Ionicons } from "@expo/vector-icons";

import { Text, Title } from "~components/UI";
import { CareDetail } from "~components";

import { CareDetailProps } from "../../components/CareDetail";

import { style } from "./style";

import { PNGPlantPicture } from "~assets";
import { SVGGota, SVGSol, SVGTermometro, SVGBack } from "~assets";

interface PlantParams {
  id: string;
  isUserPlant: boolean;
}

interface PlantInterface {
  id: string;
  type_id: string;
  description: string;
  image_url: string;
  nickname?: string;
  common_name?: string;
  scientific_name: string;
  temperature_min: number;
  temperature_max: number;
  water_frequency: number;
  fertilize_frequency: number;
  toxicity_description: string;
  sun_exposure: string;
}

export function PlantDetails() {
  const route = useRoute();
  const navigator = useNavigation();

  const { id } = route.params as PlantParams;

  const [plant, setPlant] = useState<PlantInterface>();
  const [cards, setCards] = useState<CareDetailProps[]>();

  useEffect(() => {
    // API CALL HERE
    setPlant({
      id: id,
      type_id: "1",
      description:
        "One of the most popular bamboo plants in the United States. It can reach heights of 30 feet but more typically it is in the 10-20 foot range.  It can spread aggressively so plant it carefully and keep it contained.  Planting between hardscape elements helps with this so it makes an excellent screening or privacy hedge for a driveway or walkway planting.",
      image_url:
        "https://images.tcdn.com.br/img/img_prod/631929/essencia_de_bamboo_100ml_139_1_20201009140011.png",
      nickname: "My Plant 1",
      scientific_name: "Plantae",
      temperature_min: 20,
      temperature_max: 30,
      water_frequency: 168,
      fertilize_frequency: 168,
      toxicity_description:
        "This plant is not toxic to pets or humans but it has thorns that can hurt.",
      sun_exposure:
        "Strong light is essential for healthy desert cacti, especially in the winter. Some species may scorch in direct summer sun if they haven''t been hardened off first. Forest cacti like bright, but not direct, sunlight. Move them outside during the summer.",
    });
  }, [id]);

  useEffect(() => {
    if (plant)
      setCards([
        {
          key: 1,
          icon: SVGGota,
          title: `Every ${plant.water_frequency} hours`,
        },
        {
          key: 2,
          icon: SVGTermometro,
          title: `${20}ºC - ${30}ºC`,
        },
        {
          key: 3,
          icon: SVGSol,
          title: "Diffused",
        },
      ]);
  }, [plant]);

  const confirmDelete = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to delete this plant?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
        },
      ]
    );
  };

  if (!plant || !cards) {
    return (
      <View style={style.loading}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "flex-start" }}
    >
      <TouchableOpacity onPress={() => navigator.goBack()}>
        <SVGBack />
      </TouchableOpacity>
      <Title>{plant.nickname || plant.common_name}</Title>
      <Image source={{ uri: plant.image_url }} style={style.img} />
      <Title>{plant.scientific_name}</Title>

      <View style={style.cards}>
        {cards?.map((card) => (
          <CareDetail icon={card.icon} title={card.title} key={card.key} />
        ))}
      </View>
      <Text style={style.smallTitle}>More about it</Text>
      <Text>{plant.description}</Text>
      <Text style={style.smallTitle}>Water</Text>
      <Text>Water these plants frequently during the growing season.</Text>
      <Text style={style.smallTitle}>Fertilize</Text>
      <Text>
        During the growing season, feed with a weak plant fertilizer bimonthly.
      </Text>
      <Text style={style.smallTitle}>Soil</Text>
      <Text>
        It's recommended using a combination of fir bark, perlite, peat moss,
        and other loose organic material.
      </Text>
      <Text style={style.smallTitle}>Light</Text>
      <Text>{plant.sun_exposure}</Text>
      <Text style={style.smallTitle}>Temperature</Text>
      <Text>
        Your {plant.nickname || plant.common_name} will thrive in temperatures
        of {plant.temperature_min}-{plant.temperature_max} degrees.
      </Text>
      <Text style={style.smallTitle}>Toxicity</Text>
      <Text>{plant.toxicity_description}</Text>

      <TouchableOpacity style={style.delete} onPress={confirmDelete}>
        <Ionicons name="trash-sharp" size={36} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}
