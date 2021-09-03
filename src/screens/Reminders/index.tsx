import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Title, Text } from "~components/UI";
import { ReminderLabel, Reminder } from "~components";

import { SVGFertilize, SVGGota, PlantPNG } from "~assets";

import FirstRender from "../../hooks/FirstRender";

import { style } from "./style";
import { useEffect } from "react";
import saveNotification, { ReminderProps } from "~utils/saveNotification";

import reminders from "test";

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

  React.useEffect(() => {
    // let x = JSON.stringify(reminders);
    // //console.log(x);
    // let y = JSON.parse(x);
    // console.log(y);
  }, []);

  useEffect(() => {
    setFilteredReminders(reminders);
  }, []);

  useEffect(() => {
    remindersChecked.includes(1) ? setReminder1(false) : setReminder1(true);
    remindersChecked.includes(2) ? setReminder2(false) : setReminder2(true);

    if (firstRender) return;
    filterReminders();
  }, [remindersChecked]);

  function filterReminders() {
    const tags: Array<string> = [];
    for (let tag of remindersChecked) {
      if (tag == 1) tags.push("Water");
      else if (tag == 2) tags.push("Fertilize");
    }
    setFilteredReminders(
      reminders.filter((reminder) => tags.indexOf(reminder.type) != -1)
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
      <Text style={style.subtitle}>You have {reminders.length} reminders!</Text>

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
      </View>
    </View>
  );
}
