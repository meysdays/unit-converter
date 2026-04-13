import React from 'react'
import { Text, View } from 'react-native'

interface DisplayCardUnitProps {
    unit: string
}

const DisplayCardUnit = ({unit}:DisplayCardUnitProps) => {
  return (
    <View className='w-full px-2 py-3 border border-white rounded-xl'>
        <Text className='text-white font-medium text-xl'>{unit}</Text>
    </View>
  )
}

export default DisplayCardUnit