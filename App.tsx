import { StatusBar } from "expo-status-bar"
import { SafeAreaView, Text, View } from "react-native"

export default function App() {
   return (
      <SafeAreaView className="bg-white flex-1">
         <View className="py-10 px-4 flex flex-row items-center">
            <Text className="text-3xl">50%</Text>
            <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
               <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
            </View>
         </View>
         <StatusBar style="auto" />
      </SafeAreaView>
   )
}
