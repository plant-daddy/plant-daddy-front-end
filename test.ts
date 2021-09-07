import { PlantPNG } from "~assets";

const reminders = [
  {
    id: "1",
    plantName: "Plant 1",
    nextReminder: "Tomorrow at 07:30",
    frequency: { times: 1, repeat_every: "bimester" },
    type: "Water",
    checked: true,
    img: PlantPNG,
  },
  {
    id: "2",
    plantName: "Plant 2",
    nextReminder: "Tomorrow at 07:30",
    frequency: { times: 1, repeat_every: "bimester" },
    type: "Fertilize",
    checked: false,
    img: PlantPNG,
  },
  {
    id: "3",
    plantName: "Plant 2",
    nextReminder: "03/07 at 07:30",
    frequency: { times: 1, repeat_every: "bimester" },
    type: "Water",
    checked: false,
    img: PlantPNG,
  },
  {
    id: "4",
    plantName: "Plant 1",
    nextReminder: "Tomorrow at 07:30",
    frequency: { times: 1, repeat_every: "bimester" },
    type: "Fertilize",
    checked: true,
    img: PlantPNG,
  },
  {
    id: "5",
    plantName: "Plant 1",
    nextReminder: "Tomorrow at 07:30",
    frequency: { times: 1, repeat_every: "bimester" },
    type: "Fertilize",
    checked: true,
    img: PlantPNG,
  },
];

export default reminders;
