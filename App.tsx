import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
   return (
      <Provider store={store}>
         <SafeAreaProvider>
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen}/>
                  <Stack.Screen name="Login" component={LoginScreen}/>
               </Stack.Navigator>
            </NavigationContainer>
         </SafeAreaProvider>
      </Provider>
   )
}
