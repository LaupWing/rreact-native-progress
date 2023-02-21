import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

export default function App() {
   return (
      <NavigationContainer>
         <SafeAreaProvider className="bg-white flex-1">
            
         </SafeAreaProvider>
      </NavigationContainer>
   )
}
