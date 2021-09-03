import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";
import { Switch, View } from "react-native";
import { Text, Button } from "~components/UI";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "~global";

import styles from "./styles";
import { verticalScale } from "react-native-size-matters";

interface ReminderConfigProps {
  title: string;
}

function ReminderConfig({ title }: ReminderConfigProps) {
  const [selectedTime, setSelectedTime] = useState("");
  const [waterSwitch, setWaterSwitch] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState("1 day repeat");
  const [FertilizeSwitch, setFertilizeSwitch] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.optionContainer}>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={{}}
          Icon={() => {
            return (
              <Ionicons name="chevron-down" color={theme.colors.lightGreen} />
            );
          }}
          style={{
            headlessAndroidContainer: styles.picker,
            inputAndroid: styles.option,
            iconContainer: {
              top: verticalScale(7.5),
              //alignItems: "center",
            },
          }}
          // textInputProps={styles.option}
          onValueChange={(itemValue: string, itemIndex) =>
            setSelectedFrequency(itemValue)
          }
          fixAndroidTouchableBug={true}
          value={selectedFrequency}
          items={[
            { label: "1 day repeat", value: "1 day repeat" },
            { label: "2 day repeat", value: "2 day repeat" },
            { label: "3 day repeat", value: "3 day repeat" },
          ]}
        />
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={{}}
          Icon={() => {
            return (
              <Ionicons name="chevron-down" color={theme.colors.lightGreen} />
            );
          }}
          style={{
            headlessAndroidContainer: styles.picker,
            inputAndroid: styles.option,
            iconContainer: {
              top: verticalScale(7.5),
            },
          }}
          // textInputProps={styles.option}
          onValueChange={(itemValue: string, itemIndex) =>
            setSelectedTime(itemValue)
          }
          fixAndroidTouchableBug={true}
          value={selectedTime}
          items={[
            { label: "once a week", value: "once a week" },
            { label: "once in 2 months", value: "once in 2 months" },
            { label: "once a year", value: "once a year" },
          ]}
        />

        <Switch
          onValueChange={() => setWaterSwitch(!waterSwitch)}
          value={waterSwitch}
        />
      </View>
    </View>
  );
}

export default ReminderConfig;
