import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  AlegreyaSans_400Regular,
  AlegreyaSans_500Medium,
  AlegreyaSans_700Bold
} from "@expo-google-fonts/alegreya-sans";

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
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="length" />
      </Stack>
    </SafeAreaProvider>
  );
}
