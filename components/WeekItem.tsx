import type { FC } from "react"
import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

interface WeekItemProps {
   weekNumber: number,
   year: number
}

const WeekItem:FC<WeekItemProps> = ({
   weekNumber,
   year
}) => {
   return (
      <View className="px-3 flex-row justify-between py-2 border-b border-gray-300 items-center">
         <View className="flex flex-row space-x-2">
            <Text className="text-lg">{year}</Text>
            <Text className="text-lg">{weekNumber}</Text>
         </View>
         <Feather name="chevron-down" size={24} color="black" />
      </View>
   )
}
export default WeekItem
