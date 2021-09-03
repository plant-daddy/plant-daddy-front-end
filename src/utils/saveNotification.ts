import * as Notifications from "expo-notifications";

export interface ReminderProps {
  id: string;
  plantName: string;
  frequency: {
    times: number;
    repeat_every: string;
  };
  type: string;
  checked: boolean;
  img: any;
  dateTimeNotification: Date;
  hour: string;
}

const saveNotification = async (reminder: ReminderProps) => {
  try {
    const now = new Date();
    // const nextTime = new Date(reminder.dateTimeNotification);
    const nextTime = new Date();
    const { times, repeat_every } = reminder.frequency;
    if (repeat_every === "week") {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else if (repeat_every === "month") {
      const interval = Math.trunc(30 / times);
      nextTime.setDate(nextTime.getDate() + interval);
    } else if (repeat_every === "bimester") {
      const interval = Math.trunc(60 / times);
      nextTime.setDate(nextTime.getDate() + interval);
    } else if (repeat_every === "day") {
      const interval = Math.trunc(1 / times);
      const intervalHours = Math.trunc(interval * 24);
      if (interval < 1) {
        nextTime.setHours(nextTime.getHours() + intervalHours);
      } else {
        nextTime.setDate(nextTime.getDate() + interval);
      }
    }
    const notificationDelay = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá!",
        body: `Está na hora de cuidar da sua ${reminder.plantName}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          reminder,
        },
      },
      trigger: {
        //seconds: notificationDelay < 60 ? 60 : notificationDelay,
        seconds: 2,
        repeats: false,
      },
    });
    return notificationDelay;
  } catch (err) {
    console.error(err);
    alert("Erro");
  }
};

export default saveNotification;
