import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  View,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PlantsTitle } from "../../PlantsTitle";
import { PlantsList, PlantsListItem } from "../../PlantsList";
import { style } from "./style";

const { height } = Dimensions.get("window");

const INITIAL_Y = -(height * 0.16);
const FINAL_Y = -(height * 0.86);
const MAX_Y = height + INITIAL_Y;
const MIN_Y = height + FINAL_Y;

const data = [
  "Lorem Ipsum 1",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 5",
  "Lorem Ipsum 6",
  "Lorem Ipsum 7",
];

export function AppPlants() {
  const pan = useRef(new Animated.Value(INITIAL_Y)).current;

  function handleResponderMove(event: GestureResponderEvent) {
    const { pageY } = event.nativeEvent;

    if (pageY >= MIN_Y && pageY <= MAX_Y) {
      pan.setValue(-(height - pageY));
    }
  }

  function handleResponderRelease(event: GestureResponderEvent) {
    const { pageY } = event.nativeEvent;

    const medium = (MIN_Y + MAX_Y) / 2;

    if (pageY >= medium) {
      Animated.spring(pan, {
        toValue: INITIAL_Y,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(pan, { toValue: FINAL_Y, useNativeDriver: true }).start();
    }
  }

  return (
    <View>
      <Animated.View
        style={{
          ...style.animatedContainer,
          transform: [{ translateY: pan }],
        }}
      >
        <View
          style={style.header}
          onMoveShouldSetResponder={() => true}
          onResponderTerminationRequest={() => true}
          onResponderMove={handleResponderMove}
          onResponderRelease={handleResponderRelease}
        >
          <View style={style.horizontalBar} />
          <PlantsTitle title="PLANTS" color="#fff" />
        </View>
        <ScrollView style={style.plantsList}>
          <PlantsList>
            {data.map((d) => (
              <PlantsListItem
                title={d}
                key={d}
                color={"#fff"}
                isUserPlant={false}
              />
            ))}
          </PlantsList>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
