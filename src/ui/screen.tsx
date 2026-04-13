import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'
import { withUniwind } from "uniwind";


interface RnScreenProps extends SafeAreaViewProps {
  children: React.ReactNode;
  className?: string;
  contentContainerClassName?: string;
}

const UniwindSafeAreaView = withUniwind(SafeAreaView);


export default function AppScreen(props: RnScreenProps) {
  return (
    <UniwindSafeAreaView >
        <ScrollView
        showsHorizontalScrollIndicator={false}
        >

        </ScrollView>
    </UniwindSafeAreaView>
  )
}
