import { StatusBar } from "expo-status-bar"
import { SafeAreaView, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
   return (
      <NavigationContainer>
         <SafeAreaProvider className="bg-white flex-1">
            <View className="py-10 px-4 flex flex-row items-center border-b border-gray-300">
               <Ionicons name="menu" size={28} color="black" />
               <Text className="text-3xl">50%</Text>
               <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
                  <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
               </View>
            </View>
            <StatusBar style="auto" />
         </SafeAreaProvider>
      </NavigationContainer>
   )
}
