import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

type UnitInputProps = {
  label: string;
  value: string;
  onChangeValue?: (val: string) => void;
  units: string[];
  selectedUnit: string;
  onChangeUnit: (unit: string) => void;
  type?: "input" | "output";
};

const UnitInput = ({
  label,
  value,
  onChangeValue,
  units,
  selectedUnit,
  onChangeUnit,
  type = "input",
}: UnitInputProps) => {
  const isOutput = type === "output";

  return (
    <View>
      <Text className="text-white font-medium text-xl mb-2">{label}</Text>

      <View className="flex flex-row items-center justify-between gap-2">
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          editable={!isOutput}
          keyboardType="numeric"
          placeholder={isOutput ? "Result" : "Enter value"}
          placeholderTextColor="#aaa"
          className="text-white font-medium bg-[#2a2a2a] rounded-xl px-3 flex-[0.7] h-12"
        />

        <View className="bg-[#2a2a2a] rounded-xl flex-[0.3] h-12 justify-center">
          <Picker
            selectedValue={selectedUnit}
            onValueChange={onChangeUnit}
            style={{ color: "white" }}
          >
            {units.map((unit) => (
              <Picker.Item key={unit} label={unit} value={unit} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default UnitInput;
