import { DrawerNavigationProp } from "@react-navigation/drawer"
import { useNavigation } from "@react-navigation/native"
import type { FC, PropsWithChildren } from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { HomeStackParamsList } from "../screens/HomeScreen"

const HomeHeader:FC<PropsWithChildren> = ({
   children
}) => {
   const navigation = useNavigation<DrawerNavigationProp<HomeStackParamsList>>()
   return (
      <View className="px-4 py-5 flex flex-row items-center border-b border-gray-300">
         <Ionicons
            name="menu"
            size={30}
            color="black"
            onPress={navigation.openDrawer}
         />
         { children }
      </View>
   )
}
export default HomeHeader
