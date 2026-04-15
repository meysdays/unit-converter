import { Tabs } from "expo-router";
import { MeasureIcon, TaskIcon } from "@/src/assests/icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#944494",
        tabBarIconStyle: {
          flex: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Utility",
          tabBarIcon: ({ color }) => <MeasureIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="task"
        options={{
          title: "Todo",
          tabBarIcon: ({ color }) => <TaskIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
