import { FC, useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import moment from "moment"
import { tasks } from "../data"
import config from "../config"
import Collapsible from "react-native-collapsible"

interface WeekItemProps {
   weekNumber: number,
   year: number
}

const WeekItem:FC<WeekItemProps> = ({
   weekNumber,
   year
}) => {
   const weekObj = moment().year(year).isoWeek(weekNumber) 
   const [collapsed, setCollapsed] = useState(true)
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
   const progress = Math.round((_tasks.filter(x=>x.finished).length / _tasks.length) * 100)
   return (
      <>
         {progress ? (<ScrollView className="px-3 py-2 border-b border-gray-300 w-full">
            <View className="flex-row flex-1 justify-between items-center">
               <View className="flex flex-row space-x-2 shrink-0 w-20">
                  <Text className="text-lg">{year}</Text>
                  <Text className="text-lg">{weekNumber}</Text>
               </View>
               <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 mx-2">
                  <View 
                     style={{
                        width: `${progress}%`
                     }}
                     className="h-1.5 bg-purple-500 rounded-full"></View>
               </View>
               <Feather name="chevron-down" size={24} color="black" />
            </View>
            {/* @ts-ignore */}
            <Collapsible duration={2000} align="center" collapsed={collapsed}>
               <View>
                  {_tasks.map((x, i) => (
                     <Text 
                        className={x.finished ? "text-green-500" : "text-red-400"}
                        key={i}
                     >{x.text}</Text>
                     ))}
               </View>
            </Collapsible>
         </ScrollView>) : null}
      </>
   )
}
export default WeekItem
