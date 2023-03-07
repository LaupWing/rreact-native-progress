import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from "./screens/HomeScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import MonthScreen from "./screens/MonthScreen"
import WeeksScreen from "./screens/WeeksScreen"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type RootStackParamsList = {
   Home: undefined
   Month: undefined
   Week: undefined
}

const Drawer = createDrawerNavigator<RootStackParamsList>()


const Stack = createNativeStackNavigator()

export default function App() {
   return (
      <Provider store={store}>
         <SafeAreaProvider>
            <NavigationContainer>
               
            </NavigationContainer>
         </SafeAreaProvider>
      </Provider>
   )
}
