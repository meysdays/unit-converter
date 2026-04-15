import { DeleteIcon, EditIcon } from "@/src/assests/icons";
import { useTask } from "@/src/context/task-manager/task-context";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  time: string;
}

const TaskCard = ({ id, description, time, title }: TaskCardProps) => {
  const { deleteTask, openModal } = useTask();
  const [checked, setChecked] = useState<boolean>(false);

  const date = new Date(id);
  let hour = date.getHours();
  const ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  const formattedTime = `${hour}${ampm}`;

  return (
    <View className=" w-full mx-auto">
      <View className=" flex-row items-center roun ">
        <View className=" p-1.5">
          <Text className="text-gray-300 font-medium text-xl">
            {formattedTime}
          </Text>
        </View>

        <View className="flex-1 flex-row justify-between items-center bg-white py-1.5 px-2.5 rounded-xl">
          <View className="w-9/12 flex flex-row items-start gap-1.5">
            <Pressable
              onPress={() => setChecked(!checked)}
              className="mt-1.5 border p-0.5 "
            >
              <View
                className={`w-3 h-3 ${checked ? "bg-black" : "bg-white"}`}
              />
            </Pressable>

            <View className="  flex-col gap-0.5 ">
              <Text
                className={`font-medium text-xl ${checked ? "line-through" : ""}`}
              >
                {title}
              </Text>
              <Text className="text-gray-600">{description}</Text>
            </View>
          </View>

          <View className="flex flex-row gap-1.5">
            <Pressable
              className={`${checked ? "hidden" : ""}`}
              onPress={() => openModal(id)}
            >
              <EditIcon color={"#4a5565"} />
            </Pressable>

            <Pressable onPress={async () => await deleteTask(id)}>
              <DeleteIcon color={"#4a5565"} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;
