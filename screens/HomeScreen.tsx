import { createDrawerNavigator } from "@react-navigation/drawer"
import DayScreen from "./DayScreen"
import MonthScreen from "./MonthScreen"
import WeeksScreen from "./WeeksScreen"

export type RootStackParamsList = {
   Day: undefined
   Month: undefined
   Week: undefined
}

const Drawer = createDrawerNavigator<RootStackParamsList>()

const HomeScreen = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            drawerType: "front",
            headerShown: false,
            drawerActiveTintColor: "#A855F7"
         }}
      >
         <Drawer.Screen name="Day" component={DayScreen} />
         <Drawer.Screen name="Week" component={WeeksScreen} />
         <Drawer.Screen name="Month" component={MonthScreen} />
      </Drawer.Navigator>
   )
}
export default HomeScreen
