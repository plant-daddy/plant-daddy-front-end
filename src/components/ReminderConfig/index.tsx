import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";
import {
  Switch,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { Text, Button } from "~components/UI";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "~global";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from "./styles";
import { scale, verticalScale } from "react-native-size-matters";

interface ReminderConfigProps {
  title: "Water" | "Fertilize";
  reminderSwitch: boolean;
  setReminderSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTime: Date;
  setSelectedTime: React.Dispatch<React.SetStateAction<Date>>;
  selectedFrequency: string;
  setSelectedFrequency: React.Dispatch<React.SetStateAction<string>>;
}

function ReminderConfig({
  title,
  reminderSwitch,
  setReminderSwitch,
  selectedTime,
  setSelectedTime,
  selectedFrequency,
  setSelectedFrequency,
}: ReminderConfigProps) {
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  //const [selectedTime, setSelectedTime] = useState(new Date());
  //const [selectedFrequency, setSelectedFrequency] = useState("");

  const waterArray = [
    { label: "1 day repeat", value: "1 day repeat" },
    { label: "2 day repeat", value: "2 day repeat" },
    { label: "3 day repeat", value: "3 day repeat" },
  ];
  const fertilizeArray = [
    { label: "once a week", value: "once a week" },
    { label: "once in 2 months", value: "once in 2 months" },
    { label: "once a year", value: "once a year" },
  ];

  React.useEffect(() => {
    setSelectedFrequency(
      title === "Water" ? waterArray[0].value : fertilizeArray[0].value
    );
  }, []);

  const handleTimePick = (time: Date) => {
    // console.log(time);
    setSelectedTime(time);
    setIsTimePickerVisible(false);
  };

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
              top: verticalScale(7.63),
            },
          }}
          onValueChange={(itemValue: string, itemIndex) =>
            setSelectedFrequency(itemValue)
          }
          fixAndroidTouchableBug={true}
          value={selectedFrequency}
          items={title === "Water" ? waterArray : fertilizeArray}
        />

        <TouchableWithoutFeedback onPress={() => setIsTimePickerVisible(true)}>
          <View style={styles.timePickerOtion}>
            <Text style={styles.pickerOptionText}>
              {selectedTime.toLocaleTimeString().substr(0, 5)}
            </Text>
            <Ionicons
              name="chevron-down"
              color={theme.colors.lightGreen}
              style={{ top: verticalScale(1) }}
            />
          </View>
        </TouchableWithoutFeedback>

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={(time) => handleTimePick(time)}
          onCancel={() => setIsTimePickerVisible(false)}
        />

        <Switch
          onValueChange={() => setReminderSwitch(!reminderSwitch)}
          value={reminderSwitch}
        />
      </View>
    </View>
  );
}

export default ReminderConfig;
