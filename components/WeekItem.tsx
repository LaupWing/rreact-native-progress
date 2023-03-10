import type { FC } from "react"
import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"
import moment from "moment"
import { tasks } from "../data"
import config from "../config"

interface WeekItemProps {
   weekNumber: number,
   year: number
}

const WeekItem:FC<WeekItemProps> = ({
   weekNumber,
   year
}) => {
   const weekObj = moment().year(year).isoWeek(weekNumber) 
   const _tasks = tasks
      .filter(task => {
         const dateExists = Object.keys(task.dates).find(d => moment(d, config.date_format).isSame(weekObj, "week"))
         if(dateExists){
            return task
         }
      })
      .map(task => {
         const dateKey = Object.keys(task.dates).find(d => moment(d, config.date_format).isSame(weekObj, "week"))
         return {
            text: task.text,
            finished:task.dates[dateKey]
         }
      })

   return (
      <View className="px-3 py-2 border-b border-gray-300 w-full">
         <View className="flex-row flex-1 justify-between">
            <View className="flex flex-row space-x-2">
               <Text className="text-lg">{year}</Text>
               <Text className="text-lg">{weekNumber}</Text>
            </View>
            <Feather name="chevron-down" size={24} color="black" />
         </View>
         <View>

         </View>
      </View>
   )
}
export default WeekItem
