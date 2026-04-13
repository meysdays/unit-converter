import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import UnitInput from "../../ui/unit-input";
import {
  convertTemperature,
  TemperatureUnit,
} from "../../../utils/convert-temperature";

const temperatureUnits: TemperatureUnit[] = ["C", "F", "K"];

const TemperatureScreen = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>("C");
  const [toUnit, setToUnit] = useState<TemperatureUnit>("F");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const numericValue = Number(value);
    const converted = convertTemperature(numericValue, fromUnit, toUnit);
    setResult(converted);
  }, [value, fromUnit, toUnit]);

  return (
    <SafeAreaView edges={['top']}>
      <View className="bg-primary h-screen p-2.5">
        <Pressable
          className="flex flex-row items-center gap-2 mb-5"
          onPress={() => router.back()}
        >
          <Text className="text-white">Back</Text>
          <Text className="font-bold text-2xl text-white">
            Convert Temperature
          </Text>
        </Pressable>

        <UnitInput
          label="From"
          value={value}
          onChangeValue={setValue}
          units={temperatureUnits}
          selectedUnit={fromUnit}
          onChangeUnit={(val) => setFromUnit(val as TemperatureUnit)}
          type="input"
        />

        <View className="h-5" />

        <UnitInput
          label="To"
          value={result.toString()}
          units={temperatureUnits}
          selectedUnit={toUnit}
          onChangeUnit={(val) => setToUnit(val as TemperatureUnit)}
          type="output"
        />
      </View>
    </SafeAreaView>
  );
};

export default TemperatureScreen;
