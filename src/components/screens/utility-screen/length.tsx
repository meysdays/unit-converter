import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UnitInput from "../../ui/unit-input";

import {
  convertLength,
  LENGTH_UNITS,
  LengthUnit,
} from "../../../utils/convertLength";

const lengthUnits = Object.keys(LENGTH_UNITS) as LengthUnit[];

const LengthScren = () => {
  const [fromUnit, setFromUnit] = useState<LengthUnit>("m");
  const [toUnit, setToUnit] = useState<LengthUnit>("km");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const numericValue = Number(value);
    const converted = convertLength(numericValue, fromUnit, toUnit);
    setResult(converted);
  }, [value, fromUnit, toUnit]);

  return (
    <SafeAreaView edges={["top"]}>
      <View className="bg-primary h-screen p-2.5">
        <Pressable
          className="flex flex-row items-center gap-2 p-2.5 "
          onPress={() => router.back()}
        >
          <Text className="text-white">Back</Text>
          <Text className="font-bold text-3xl text-white">Convert Length</Text>
        </Pressable>

        <View className="flex flex-col justify-between bg-[#3d3c3c] p-2 rounded-2xl gap-4">
          <UnitInput
            label="From"
            value={value}
            onChangeValue={setValue}
            units={lengthUnits}
            selectedUnit={fromUnit}
            onChangeUnit={(val) => setFromUnit(val as LengthUnit)}
            type="input"
          />

          <UnitInput
            label="To"
            value={result.toString()}
            units={lengthUnits}
            selectedUnit={toUnit}
            onChangeUnit={(val) => setToUnit(val as LengthUnit)}
            type="output"
          />
          {/* <View>
            <Text className="text-white font-medium text-xl">From</Text>
            <View className="flex flex-row items-center justify-between gap-2">
              <TextInput
                keyboardType="numeric"
                className="text-white font-medium bg-[#2a2a2a] rounded-xl px-3 flex-[0.7]"
                placeholder="Enter value"
                placeholderTextColor="#aaa"
              />

              <View className="bg-[#2a2a2a] rounded-xl flex-[0.3]">
                <Picker
                  selectedValue={fromUnit}
                  onValueChange={(itemValue) => setFromUnit(itemValue)}
                  style={{ color: "white" }}
                >
                  {lengthUnits.map((unit) => (
                    <Picker.Item key={unit} label={unit} value={unit} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
          <View>
            <Text className="text-white font-medium text-xl">To</Text>
            <View className="flex flex-row items-center justify-between gap-2">
              <TextInput
                keyboardType="numeric"
                className="text-white font-medium bg-[#2a2a2a] rounded-xl px-3 flex-[0.7]"
                placeholder="Enter value"
                placeholderTextColor="#aaa"
              />

              <View className="bg-[#2a2a2a] rounded-xl flex-[0.3]">
                <Picker
                  selectedValue={toUnit}
                  onValueChange={(itemValue) => setToUnit(itemValue)}
                  style={{ color: "white" }}
                >
                  {lengthUnits.map((unit) => (
                    <Picker.Item key={unit} label={unit} value={unit} />
                  ))}
                </Picker>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LengthScren;
