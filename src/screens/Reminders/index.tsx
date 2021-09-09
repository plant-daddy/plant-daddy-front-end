import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Title, Text } from "~components/UI";
import { ReminderLabel, Reminder } from "~components";

import { SVGFertilize, SVGGota, PlantPNG } from "~assets";

import FirstRender from "../../hooks/FirstRender";

import { style } from "./style";
import { useEffect } from "react";
import saveNotification, { ReminderProps } from "~utils/saveNotification";

//import reminders from "test";
import RemindersContext from "~hooks/RemindersContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const remindersLabels = [
  {
    id: 1,
    title: "Water",
    icon: SVGGota,
    isWater: true,
    checked: true,
  },
  {
    id: 2,
    title: "Fertilize",
    icon: SVGFertilize,
    isWater: false,
    checked: true,
  },
];

export function Reminders() {
  const firstRender = FirstRender();

  const [remindersChecked, setRemindersChecked] = useState<number[]>([1, 2]);
  const [filteredReminders, setFilteredReminders] = useState<any[]>([]);

  const [reminder1, setReminder1] = useState(true);
  const [reminder2, setReminder2] = useState(true);

  const [auxReminder, setAuxReminder] = useState(null);

  const { reminders, setReminders } = useContext(RemindersContext);

  const [storedReminders, setStoredReminders] = useState([]);

  React.useEffect(() => {
    //console.log(reminders);
    const aux = async () => {
      try {
        //await AsyncStorage.setItem("@reminders", JSON.stringify(reminders));
        const x = await AsyncStorage.getItem("@reminders");
        setStoredReminders(x ? await JSON.parse(x) : []);
        //console.log(storedReminders);
      } catch (err) {
        console.error(err);
      }
    };
    aux();
  }, [reminders]);
  // React.useEffect(() => {
  //   const auxx = async () => {
  //     await AsyncStorage.removeItem("@reminders");
  //   };
  //   auxx();
  // }, []);
  useEffect(() => {
    setFilteredReminders(storedReminders);
    //console.log(storedReminders);
  }, [storedReminders]);

  useEffect(() => {
    remindersChecked.includes(1) ? setReminder1(false) : setReminder1(true);
    remindersChecked.includes(2) ? setReminder2(false) : setReminder2(true);

    if (firstRender) return;
    filterReminders();
  }, [remindersChecked]);

  React.useEffect(() => {
    console.log(filteredReminders);
  }, [filteredReminders]);

  function filterReminders() {
    const tags: Array<string> = [];
    for (let tag of remindersChecked) {
      if (tag == 1) tags.push("Water");
      else if (tag == 2) tags.push("Fertilize");
    }
    setFilteredReminders(
      storedReminders.filter((reminder) => tags.indexOf(reminder.type) != -1)
    );
  }

  function handleReminderCheck(id: number) {
    remindersChecked.indexOf(id) != -1
      ? setRemindersChecked(remindersChecked.filter((item) => item !== id))
      : setRemindersChecked([...remindersChecked, id]);
  }

  function toggleReminder(id: string) {
    const auxFilteredReminders = [...filteredReminders];
    const reminder = auxFilteredReminders.find((item) => item.id === id);
    if (reminder) {
      reminder.checked = !reminder.checked;
    }
    const aux = [...auxFilteredReminders];
    // console.log("PLS", aux);

    setFilteredReminders(aux);
    setAuxReminder(reminder);
    console.log("Finished");
  }

  React.useEffect(() => {
    if (!auxReminder) return;
    testX(auxReminder);
  }, [auxReminder]);

  const testX = async (reminder: any) => {
    let test = await saveNotification(reminder);
    console.log((test || 0) / 60 / 60 / 24);
  };

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Title>MY REMINDERS</Title>
        <Ionicons name="search" size={25} />
      </View>
      <Text style={style.subtitle}>
        You have {storedReminders.length} reminders!
      </Text>

      <View style={style.labels}>
        {remindersLabels.map((label) => (
          <ReminderLabel
            isWater={label.isWater}
            icon={label.icon}
            title={label.title}
            key={label.id}
            checked={label.id == 1 ? reminder1 : reminder2}
            onPress={() => handleReminderCheck(label.id)}
          />
        ))}
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        {filteredReminders.length >= 1 ? (
          Object.keys(filteredReminders[0]).length >= 1 ? (
            <FlatList
              data={filteredReminders}
              style={style.reminders}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Reminder
                  title={item.plantName}
                  checked={item.checked}
                  nextReminder={item.nextReminder}
                  frequency={item.frequency}
                  type={item.type}
                  img={item.img}
                  onValueChange={() => toggleReminder(item.id)}
                />
              )}
            />
          ) : null
        ) : null}
      </View>
    </View>
  );
}
