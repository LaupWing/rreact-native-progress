import type { FC } from "react"
import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

interface WeekItemProps {
   weekNumber: number
}

const WeekItem:FC<WeekItemProps> = ({
   weekNumber
}) => {
   return (
      <View className="px-3 flex-row justify-between py-2 border-b border-gray-300 items-center">
         {/* <Text className="text-lg flex-1">{moment()}</Text> */}
         <Text className="text-lg flex-1">{weekNumber}</Text>
         <Feather name="chevron-down" size={24} color="black" />
      </View>
   )
}
export default WeekItem
