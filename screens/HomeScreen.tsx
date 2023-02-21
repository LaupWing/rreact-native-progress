import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const HomeScreen = () => {
   return (
      <View>
         <View className="py-10 px-4 flex flex-row items-center border-b border-gray-300">
            <Ionicons name="menu" size={28} color="black" />
            <Text className="text-3xl">50%</Text>
            <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
               <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
            </View>
         </View>
      </View>
   )
}
export default HomeScreen
