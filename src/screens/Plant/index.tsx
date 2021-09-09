import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Modal,
  Text,
  ImageProps,
} from "react-native";
import { ReminderSetup } from "~assets";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "~global";

import styles from "./styles";
import { useState } from "react";
import { Button, Title } from "~components/UI";
import plantTest from "plantTest";
import ReminderConfig from "~components/ReminderConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { verticalScale } from "react-native-size-matters";
import { UserPlants } from "~components/Plants/UserPlants";
import RemindersContext from "~hooks/RemindersContext";

import { PlantPNG } from "~assets";

interface ReminderObject {
  checked: boolean;
  frequency: {
    repeat_every: string;
    times: number;
  };
  id: number;
  img: ImageProps;
  nextReminder: string;
  plantName: string;
  type: string;
}

export function Plant() {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState("#65CCB7");

  const [waterReminderSwitch, setWaterReminderSwitch] = useState(false);
  const [fertilizeReminderSwitch, setFertilizeReminderSwitch] = useState(false);

  const [waterSelectedTime, setWaterSelectedTime] = useState(new Date());
  const [waterSelectedFrequency, setWaterSelectedFrequency] = useState("");
  const [fertilizeSelectedTime, setFertilizeSelectedTime] = useState(
    new Date()
  );
  const [fertilizeSelectedFrequency, setFertilizeSelectedFrequency] =
    useState("");

  const { isModalOpen, setIsModalOpen, currentSelectedPlantId, setReminders } =
    useContext(RemindersContext);

  React.useEffect(() => {
    if (waterReminderSwitch === true) {
      //console.log(waterSelectedTime);
    }
    if (fertilizeReminderSwitch === true) {
      //console.log(fertilizeSelectedTime);
    }
  }, [waterReminderSwitch, fertilizeReminderSwitch]);

  const handleSetReminder = async () => {
    try {
      const currentReminders = await AsyncStorage.getItem("@reminders");
      //console.log(currentReminders ? JSON.parse(currentReminders) : "");
      //await AsyncStorage.setItem("@reminders", "");
      if (waterReminderSwitch === true) {
        let Y = {
          checked: true,
          frequency: {
            repeat_every: waterSelectedFrequency.toLocaleString().substr(2, 3),
            times: 1,
          },
          id: currentSelectedPlantId,
          img: PlantPNG,
          nextReminder:
            "Tomorrow at " +
            waterSelectedTime.toLocaleTimeString().substr(0, 5),
          plantName: "Plant 3",
          type: "Water",
        };

        let Z = currentReminders ? await JSON.parse(currentReminders) : [];
        Z.push(Y);
        //console.log(Z);
        try {
          await AsyncStorage.setItem("@reminders", JSON.stringify(Z));
          setReminders(Z);
        } catch (err) {
          console.error(err);
        }
        // JSON.stringify(Z)
        //console.log(waterSelectedFrequency.toLocaleString().substr(2, 3));
      }
      if (fertilizeReminderSwitch === true) {
        console.log(fertilizeSelectedTime.toLocaleString());
        console.log(fertilizeSelectedFrequency.toLocaleString());
      }
      alert("Reminder set!");
    } catch (err) {
      console.error(err);
    }
  };

  const handlePlantPicker = () => {
    setIsModalOpen(!isModalOpen);
  };

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

      <Button
        title="Pick a plant..."
        type="primary"
        style={{
          width: "35%",
          height: verticalScale(30),
          margin: 0,
          padding: 0,
          justifyContent: "center",
        }}
        onPress={() => handlePlantPicker()}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalOpen}
        onRequestClose={() => handlePlantPicker()}
      >
        <UserPlants reminder={true} />
      </Modal>

      {/* {isModalOpen ?  : null} */}

      <ReminderConfig
        title={"Water"}
        reminderSwitch={waterReminderSwitch}
        setReminderSwitch={setWaterReminderSwitch}
        selectedTime={waterSelectedTime}
        setSelectedTime={setWaterSelectedTime}
        selectedFrequency={waterSelectedFrequency}
        setSelectedFrequency={setWaterSelectedFrequency}
      />
      <ReminderConfig
        title={"Fertilize"}
        reminderSwitch={fertilizeReminderSwitch}
        setReminderSwitch={setFertilizeReminderSwitch}
        selectedTime={fertilizeSelectedTime}
        setSelectedTime={setFertilizeSelectedTime}
        selectedFrequency={fertilizeSelectedFrequency}
        setSelectedFrequency={setFertilizeSelectedFrequency}
      />

      <Button
        title="Set Reminder"
        type="primary"
        style={{ width: "75%" }}
        onPress={() => handleSetReminder()}
      />
    </View>
  );
}
