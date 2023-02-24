import { View, Text, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDrawerStatus } from "@react-navigation/drawer"
import {tasks} from "../data"
import Checkbox from "../components/Checkbox"

const HomeScreen = () => {
   const navigation = useNavigation()
   return (
      <SafeAreaView className="flex-1 bg-white">
         <View className="flex-1">
            <View className="px-4 py-5 flex flex-row items-center border-b border-gray-300">
               <Ionicons 
                  name="menu" 
                  size={30} 
                  color="black" 
                  onPress={() => navigation.op}
               />
               <Text className="text-2xl mx-2">50%</Text>
               <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
                  <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
               </View>
            </View>
            <View className="flex-1">
               <FlatList
                  data={tasks}
                  renderItem={({item}) => {
                     return (
                        <View className="px-3 flex-row justify-between py-2 border-b border-gray-300 items-center">
                           <Text className="text-lg flex-1">{item.text}</Text>
                           <Checkbox className="mx-2"/>
                        </View>
                     )
                  }}
               />
            </View>
         </View>
      </SafeAreaView>
   )
}
export default HomeScreen
