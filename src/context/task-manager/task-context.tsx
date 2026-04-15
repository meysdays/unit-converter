import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export interface TaskListProps {
  id: number;
  title: string;
  description: string;
  time: string;
}

interface ContextValue {
  task: TaskListProps[];
  addTask: (task: Omit<TaskListProps, "id">) => Promise<void>;
  updateTask: (
    id: number,
    updatedTask: Omit<TaskListProps, "id">,
  ) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  getTask: (id: number) => TaskListProps | undefined;
  openModal: (id?: number) => void;
  closeModal: () => void;
  showModal: boolean;
  editTaskId: number | null;
}

const TaskManagerContext = createContext<ContextValue | undefined>(undefined);

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

export const TaskManagerContextProvider = ({ children }: PropsWithChildren) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [task, setTasks] = useState<TaskListProps[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (e) {
        // handle error
        console.error("Failed to load tasks", e);
      }
    };
    loadTasks();
  }, []);

  const persistTasks = async (tasks: TaskListProps[]) => {
    try {
      await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks", e);
    }
  };

  const addTask = async (newTask: Omit<TaskListProps, "id">) => {
    const id = Date.now();
    const taskToAdd = { ...newTask, id };
    const updatedTasks = [...task, taskToAdd];
    setTasks(updatedTasks);
    await persistTasks(updatedTasks);
  };

  const updateTask = async (
    id: number,
    updatedTask: Omit<TaskListProps, "id">,
  ) => {
    const updatedTasks = task.map((t) =>
      t.id === id ? { ...t, ...updatedTask } : t,
    );
    setTasks(updatedTasks);
    await persistTasks(updatedTasks);
  };

  const deleteTask = async (id: number) => {
    const updatedTasks = task.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    await persistTasks(updatedTasks);
  };

  const getTask = (id: number) => {
    return task.find((t) => t.id === id);
  };

  const openModal = (id?: number) => {
    setEditTaskId(id ?? null);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setEditTaskId(null);
  };

  return (
    <TaskManagerContext.Provider
      value={{
        closeModal,
        openModal,
        showModal,
        task,
        addTask,
        updateTask,
        deleteTask,
        getTask,
        editTaskId,
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskManagerContext);
  if (!context) {
    throw new Error("useTask must be used within TaskManagerContextProvider");
  }
  return context;
};
