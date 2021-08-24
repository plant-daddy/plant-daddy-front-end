import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Title, Text } from "~components/UI";
import { ReminderLabel, Reminder } from "~components";

import { SVGFertilize, SVGGota, PlantPNG } from "~assets";

import FirstRender from "../../hooks/FirstRender";

import { style } from "./style";
import { useEffect } from "react";

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

const reminders = [
  {
    id: "1",
    plantName: "Plant 1",
    nextReminder: "Tomorrow at 07:30",
    frequency: "Once every two months",
    type: "Water",
    checked: true,
    img: PlantPNG,
  },
  {
    id: "2",
    plantName: "Plant 2",
    nextReminder: "Tomorrow at 07:30",
    frequency: "Once every two months",
    type: "Fertilize",
    checked: false,
    img: PlantPNG,
  },
  {
    id: "3",
    plantName: "Plant 2",
    nextReminder: "03/07 at 07:30",
    frequency: "Once every two months",
    type: "Water",
    checked: false,
    img: PlantPNG,
  },
  {
    id: "4",
    plantName: "Plant 1",
    nextReminder: "Tomorrow at 07:30",
    frequency: "Once every two months",
    type: "Fertilize",
    checked: true,
    img: PlantPNG,
  },
];

export function Reminders() {
  const firstRender = FirstRender();

  const [remindersChecked, setRemindersChecked] = useState<number[]>([1, 2]);
  const [filteredReminders, setFilteredReminders] = useState<any[]>([]);

  const [reminder1, setReminder1] = useState(true);
  const [reminder2, setReminder2] = useState(true);

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
    const reminder = filteredReminders.find((x) => x.id == id);
    if (reminder) {
      reminder.checked = !reminder.checked;
      return reminder.checked;
    }
  }

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
  );
}
