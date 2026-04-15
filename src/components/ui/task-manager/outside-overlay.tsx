import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

interface OutsideOverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}

const OutsideOverlay = ({ children, onClose }: OutsideOverlayProps) => {
  return (
    <View
      className="absolute inset-0 z-40"
      style={{ flex: 1 }}
      pointerEvents="box-none"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }} />
      </TouchableWithoutFeedback>
      <View
        style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
        pointerEvents="box-none"
      >
        <Animated.View
          entering={SlideInDown.duration(500)}
          exiting={SlideOutDown.duration(500)}
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 16,
            gap: 8,
            minHeight: 680,
          }}
        >
          {children}
        </Animated.View>
      </View>
    </View>
  );
};

export default OutsideOverlay;
