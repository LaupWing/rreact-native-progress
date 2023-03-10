import type {Moment} from "moment"
import moment from "moment"
import { View, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HomeHeader from "../components/HomeHeader"
import config from "../config"
import {tasks} from "../data"
import { Feather } from "@expo/vector-icons"

const WeeksScreen = () => {
   const weeks = Object.keys(tasks[0].dates)
      .map(date => moment(date, config.date_format))
      .sort((left:Moment, right:Moment) => {
         return moment.utc(left).diff(moment.utc(right))
      })
      .map(d => ({
         week: d.isoWeek(),
         year: d.year()
      })) 
      .filter((value, index, array)=> {
         return array.findIndex(v => v.week === value.week && v.year === value.year) === index
       })
   console.log(weeks)
   return (
      <SafeAreaView className="flex-1 bg-white">
         <View className="flex-1">
            <HomeHeader>
               <Text className="text-2xl mx-2">50%</Text>
               <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
                  <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
               </View>
            </HomeHeader>
            <View className="flex-1">
               <FlatList
                  data={weeks}
                  contentContainerStyle={{
                     paddingBottom: 60
                  }}
                  renderItem={({ item }) => {
                     return (
                        <View className="px-3 flex-row justify-between py-2 border-b border-gray-300 items-center">
                           <View className="flex flex-row space-x-2">
                              <Text className="text-lg">{item.year}</Text>
                              <Text className="text-lg">{item.week}</Text>
                           </View>
                           <Feather name="chevron-down" size={24} color="black" />
                        </View>
                     )
                  }}
               />
            </View>
         </View>
      </SafeAreaView>
   )
}
export default WeeksScreen