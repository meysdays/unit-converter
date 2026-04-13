import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DisplayCardUnit from "../../ui/card";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const unitList = [
    { name: "Length", route: "/length" },
    { name: "Temperature", route: "/temperature" },
    { name: "Weight", route: "/weight" },
  ] as const;

  return (
    <SafeAreaView edges={["top"]}>
      <View className="bg-primary h-screen p-2.5">
        <View className="mb-4">
          <Text className="font-bold text-3xl text-white">Unit Converter</Text>
        </View>

        <View className=" flex items-center justify-center gap-3">
          <Text className="text-[#944494] font-bold text-3xl tracking-wider">
            One App. Every Conversion
          </Text>
          <Text className="text-white font-regular text-xl text-center tracking-tight">
            No stress, no guesswork, just instant results across all your
            everyday units.
          </Text>
        </View>

        <Text className="text-white font-medium text-3xl mt-8 mb-2">Units</Text>

        <View className="gap-4">
          {unitList.map((item) => (
            <Pressable key={item.route} onPress={() => router.push(item.route)}>
              <DisplayCardUnit unit={item.name} />
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
