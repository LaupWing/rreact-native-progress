import { StatusBar } from "expo-status-bar"
import { SafeAreaView, Text, View } from "react-native"

export default function App() {
   return (
      <SafeAreaView className="bg-white flex-1">
         <View className="py-10 px-4 flex flex-row">
            <Text className="text-3xl">50%</Text>
            <View className=""></View>
         </View>
         <StatusBar style="auto" />
      </SafeAreaView>
   )
}
