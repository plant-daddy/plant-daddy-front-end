import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { ReminderSetup } from "~assets";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "~global";

import styles from "./styles";
import { useState } from "react";
import { Button, Title } from "~components/UI";
import plantTest from "plantTest";
import ReminderConfig from "~components/ReminderConfig";

export function Plant() {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState("#65CCB7");

  React.useEffect(() => {
    // console.log(plantTest[1].sun_exposure);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPressIn={() => setIconColor("#fff")}
        onPressOut={() => setIconColor("#65CCB7")}
        onPress={() => navigation.goBack()}
        style={styles.returnButton}
        underlayColor="#65CCB7"
        activeOpacity={1}
      >
        <Ionicons name="chevron-back" color={iconColor} style={styles.icon} />
      </TouchableHighlight>

      <View style={styles.imageContainer}>
        <Image
          source={ReminderSetup}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Title style={styles.title}>Want to set reminders?</Title>
      <ReminderConfig title={"Water"} />
      <ReminderConfig title={"Fertilize"} />

      <Button title="Set Reminder" type="primary" style={{ width: "80%" }} />
    </View>
  );
}
