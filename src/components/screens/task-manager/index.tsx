import { AddIcon } from "@/src/assests/icons";
import { useTask } from "@/src/context/task-manager/task-context";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskCard from "../../ui/task-manager/task-card";
// import CustomizeModal from "../../ui/task-manager/modal";

export const TaskManagerScreen = () => {
  const { openModal, task, editTaskId } = useTask();

  return (
    <SafeAreaView className="">
      <View className="bg-primary h-screen p-2.5">
        <Pressable
          onPress={() => openModal()}
          className="p-4.5 rounded-4xl bg-amber-600 absolute top-158 left-43 z-10"
        >
          <AddIcon />
        </Pressable>
        <View>
          <Text className="text-[#944494] font-bold text-3xl text-center mb-6">
            TASK MANAGER
          </Text>
        </View>
        <ScrollView>
          <View className="gap-4">
            {task && task.length > 0 ? (
              task.map((t) => (
                <TaskCard
                  key={t.id}
                  id={t.id}
                  title={t.title}
                  description={t.description}
                  time={t.time}
                />
              ))
            ) : (
              <Text className="text-center text-gray-400 mt-8">
                No tasks yet.
              </Text>
            )}
          </View>
        </ScrollView>
        {/* Modal is now rendered globally in _layout.tsx */}
      </View>
    </SafeAreaView>
  );
};
