import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { tasks } from "../data"
import Checkbox from "../components/Checkbox"
import { useNavigation } from "@react-navigation/native"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { RootStackParamsList } from "../App"
import ReactNativeModal from "react-native-modal"
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"

const HomeScreen = () => {
   const navigation = useNavigation<DrawerNavigationProp<RootStackParamsList>>()
   const [showModal, setShowModal] = useState<boolean>(false)

   return (
      <SafeAreaView className="flex-1 bg-white">
         <ReactNativeModal 
            isVisible={showModal} 
            onBackdropPress={() => setShowModal(false)}
         >
            <View className="bg-white rounded p-4 space-y-2">
               <Text className="uppercase font-bold tracking-wider">Add a new task!</Text>
               <TextInput className="bg-neutral-100 rounded py-1 px-2 border border-neutral-300" placeholder="Task"/>
               <TouchableOpacity className="bg-purple-600 ml-auto px-4 py-1 rounded">
                  <Text className="text-white uppercase">Create</Text>
               </TouchableOpacity>
            </View>
         </ReactNativeModal>
         <View className="flex-1">
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
            <View className="flex-1">
               <FlatList
                  data={tasks}
                  contentContainerStyle={{
                     paddingBottom: 60
                  }}
                  renderItem={({ item }) => {
                     return (
                        <View className="px-3 flex-row justify-between py-2 border-b border-gray-300 items-center">
                           <Text className="text-lg flex-1">{item.text}</Text>
                           <Checkbox className="mx-2" />
                        </View>
                     )
                  }}
               />
            </View>
            <TouchableOpacity
               className="absolute bottom-0 right-4"
               onPress={() => setShowModal(true)}
            >
               <Ionicons 
                  name="md-add-circle" 
                  size={60} 
                  color="#A855F7" 
               />
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}
export default HomeScreen



