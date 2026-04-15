import {
  AlegreyaSans_400Regular,
  AlegreyaSans_500Medium,
  AlegreyaSans_700Bold,
  useFonts,
} from "@expo-google-fonts/alegreya-sans";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomizeModal from "../components/ui/task-manager/modal";
import { TaskManagerContextProvider } from "../context/task-manager/task-context";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    regular: AlegreyaSans_400Regular,
    medium: AlegreyaSans_500Medium,
    bold: AlegreyaSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <TaskManagerContextProvider>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <CustomizeModal />
      </TaskManagerContextProvider>
    </SafeAreaProvider>
  );
}
