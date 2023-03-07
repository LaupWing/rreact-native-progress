import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "./HomeScreen"
import MonthScreen from "./MonthScreen"
import WeeksScreen from "./WeeksScreen"

export type RootStackParamsList = {
   Home: undefined
   Month: undefined
   Week: undefined
}

const Drawer = createDrawerNavigator<RootStackParamsList>()

const Home2Screen = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            drawerType: "front",
            headerShown: false,
            drawerActiveTintColor: "#A855F7"
         }}
      >
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Month" component={MonthScreen} />
         <Drawer.Screen name="Week" component={WeeksScreen} />
      </Drawer.Navigator>
   )
}
export default Home2Screen
