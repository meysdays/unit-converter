import { useTask } from "@/src/context/task-manager/task-context";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import OutsideOverlay from "./outside-overlay";

const CustomizeModal = () => {
  const { showModal, closeModal, addTask, updateTask, getTask, editTaskId } =
    useTask();
  const isEditMode = editTaskId !== null && editTaskId !== undefined;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (showModal && isEditMode && editTaskId) {
      const task = getTask(editTaskId);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    } else if (showModal && !isEditMode) {
      setTitle("");
      setDescription("");
    }
  }, [showModal, isEditMode, editTaskId]);

  if (!showModal) return null;

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) return;
    try {
      if (isEditMode && editTaskId) {
        await updateTask(editTaskId, {
          title,
          description,
          time: new Date().toISOString(),
        });
      } else {
        await addTask({
          title,
          description,
          time: new Date().toISOString(),
        });
      }
      closeModal();
    } finally {
      console.log("here");
    }
  };

  return (
    <OutsideOverlay onClose={closeModal}>
      <View>
        <Text className="text-center font-bold text-3xl">
          {isEditMode ? "EDIT TASK" : "ADD TASK"}
        </Text>

        <View className="mt-6">
          <Text className="font-medium text-xl">Title</Text>
          <TextInput
            className="border border-gray-400 rounded-xl px-3 py-2 mt-1"
            value={title}
            onChangeText={setTitle}
            placeholder="Enter task title"
          />
        </View>

        <View className="mt-8">
          <Text className="font-medium text-xl">Description</Text>
          <TextInput
            multiline
            className="border border-gray-400 rounded-xl h-34 px-3 py-2 mt-1"
            value={description}
            onChangeText={setDescription}
            placeholder="Enter task description"
          />
        </View>

        <Pressable
          className="bg-[#944494] mt-12 flex items-center py-3.5 rounded-2xl"
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold text-xl">
            {isEditMode ? "UPDATE" : "SUBMIT"}
          </Text>
        </Pressable>
      </View>
    </OutsideOverlay>
  );
};

export default CustomizeModal;
