import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from "./screens/HomeScreen"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerShown: false
               }}
               initialRouteName="Home"
            >
               <Stack.Screen
                  name="Home"
                  component={HomeScreen}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaProvider>
   )
}
