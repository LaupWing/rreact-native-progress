import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from "./screens/HomeScreen"
import "react-native-gesture-handler"
import { createDrawerNavigator } from "@react-navigation/drawer"
import MonthScreen from "./screens/MonthScreen"
import WeeksScreen from "./screens/WeeksScreen"

export type RootStackParamsList = {
   Home: undefined
   Month: undefined
   Week: undefined
}

const Drawer = createDrawerNavigator<RootStackParamsList>()

export default function App() {
   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <Drawer.Navigator
               screenOptions={{
                  headerShown: false,
               }}
               initialRouteName="Home"
            >
               <Drawer.Screen name="Home" component={HomeScreen} />
               <Drawer.Screen name="Month" component={MonthScreen} />
               <Drawer.Screen name="Week" component={WeeksScreen} />
            </Drawer.Navigator>
         </NavigationContainer>
      </SafeAreaProvider>
   )
}
