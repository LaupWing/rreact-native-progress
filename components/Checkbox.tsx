import { FC } from "react"
import { View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

interface CheckboxProps {
   checked: boolean
   className?: string
}

const Checkbox: FC<CheckboxProps> = ({className = "", checked}) => {
   return (
      <View
         className={"w-8 h-8 rounded border-2 border-purple-500 flex items-center justify-center "+ className}
      >
         {checked && (
            <>
               <View className="flex-1 bg-purple-500 flex items-center justify-center w-full scale-105 absolute inset-0">
               </View>
               <FontAwesome name="check" size={24} color="white" />
            </>
         )}
      </View>
   )
}
export default Checkbox
