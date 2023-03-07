import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home2Screen from "./screens/HomeScreen"

export type RootStackParamsList = {
   Home: undefined
   Month: undefined
   Week: undefined
}

const Stack = createNativeStackNavigator()

export default function App() {
   return (
      <Provider store={store}>
         <SafeAreaProvider>
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home2Screen}/>
               </Stack.Navigator>
            </NavigationContainer>
         </SafeAreaProvider>
      </Provider>
   )
}
