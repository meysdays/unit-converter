import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import UnitInput from "../../ui/unit-input";
import {
  convertWeight,
  WEIGHT_UNITS,
  WeightUnit,
} from "../../../utils/convert-weight";

const weightUnits = Object.keys(WEIGHT_UNITS) as WeightUnit[];

const WeightScreen = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<WeightUnit>("kg");
  const [toUnit, setToUnit] = useState<WeightUnit>("g");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const numericValue = Number(value);
    const converted = convertWeight(numericValue, fromUnit, toUnit);
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
          <Text className="font-bold text-2xl text-white">Convert Weight</Text>
        </Pressable>

        <UnitInput
          label="From"
          value={value}
          onChangeValue={setValue}
          units={weightUnits}
          selectedUnit={fromUnit}
          onChangeUnit={(val) => setFromUnit(val as WeightUnit)}
          type="input"
        />

        <View className="h-5" />

        <UnitInput
          label="To"
          value={result.toString()}
          units={weightUnits}
          selectedUnit={toUnit}
          onChangeUnit={(val) => setToUnit(val as WeightUnit)}
          type="output"
        />
      </View>
    </SafeAreaView>
  );
};

export default WeightScreen;
