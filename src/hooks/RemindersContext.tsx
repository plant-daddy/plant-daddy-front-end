import React, { createContext, ReactNode, useState } from "react";

import remindersTest from "../../test";

interface RemindersContextData {
  reminders: {
    id: string;
    plantName: string;
    nextReminder: string;
    frequency: { times: number; repeat_every: string };
    type: string;
    checked: boolean;
    img: any;
  }[];
  setReminders: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        plantName: string;
        nextReminder: string;
        frequency: { times: number; repeat_every: string };
        type: string;
        checked: boolean;
        img: any;
      }[]
    >
  >;
  currentSelectedPlantId: number;
  selectCurrentSelectedPlantId: React.Dispatch<React.SetStateAction<number>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RemindersContext = createContext({} as RemindersContextData);

interface ProviderProps {
  children: ReactNode;
}

export const RemindersProvider = ({ children }: ProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSelectedPlantId, selectCurrentSelectedPlantId] = useState(-1);
  const [reminders, setReminders] = useState([
    {
      id: "string",
      plantName: "",
      nextReminder: "",
      frequency: { times: 0, repeat_every: "" },
      type: "",
      checked: false,
      img: null,
    },
  ]);

  React.useEffect(() => {
    setReminders(remindersTest);
  }, []);
  return (
    <RemindersContext.Provider
      value={{
        reminders: reminders,
        setReminders: setReminders,
        currentSelectedPlantId: currentSelectedPlantId,
        selectCurrentSelectedPlantId: selectCurrentSelectedPlantId,
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen,
      }}
    >
      {children}
    </RemindersContext.Provider>
  );
};

export default RemindersContext;
