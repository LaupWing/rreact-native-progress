import { DrawerNavigationProp } from "@react-navigation/drawer"
import { useNavigation } from "@react-navigation/native"
import type { FC, PropsWithChildren } from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { RootStackParamsList } from "../screens/HomeScreen"

const HomeHeader:FC<PropsWithChildren> = ({
   children
}) => {
   const navigation = useNavigation<DrawerNavigationProp<RootStackParamsList>>()
   return (
      <View className="px-4 py-5 flex flex-row items-center border-b border-gray-300">
         <Ionicons
            name="menu"
            size={30}
            color="black"
            onPress={navigation.openDrawer}
         />
         <Text className="text-2xl mx-2">50%</Text>
         <View className="border-purple-500 border-2 flex-1 rounded-full p-0.5 ml-2">
            <View className="w-[48%] h-2 bg-purple-500 rounded-full"></View>
         </View>
      </View>
   )
}
export default HomeHeader
