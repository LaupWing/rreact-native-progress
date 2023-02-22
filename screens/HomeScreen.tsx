import { View, Text, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import {tasks} from "../data"
import Checkbox from "expo-checkbox"

const HomeScreen = () => {
   const insets = useSafeAreaInsets()
   
   return (
      <View 
         className="flex-1"
         style={{
            paddingTop: insets.top
         }}
      >
         <View className="flex-1">
            <View className="px-4 py-3 flex flex-row items-center border-b border-gray-300">
               <Ionicons name="menu" size={30} color="black" />
               <Text className="text-2xl mx-2">50%</Text>
               <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
                  <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
               </View>
            </View>
            <View>
               <FlatList
                  data={tasks}
                  renderItem={({item}) => {
                     return (
                        <View className="px-3 flex-row justify-between py-2 border-b border-gray-300">
                           <Text className="text-lg max-w-[90%]">{item.text}</Text>
                           <Checkbox 
                              className="flex-shrink-0"
                              style={{
                                 margin: 2,
                                 width: 20
                              }}
                           />
                        </View>
                     )
                  }}
               />
            </View>
         </View>
      </View>
   )
}
export default HomeScreen
