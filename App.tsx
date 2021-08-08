import React from "react";
import { StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </View>
  );
}
