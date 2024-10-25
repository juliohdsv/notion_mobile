import { View, Text } from "react-native";
import { colors } from "@/styles/color";

export default function Notifications(){
  return(
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{color: colors.white}}>Notifivastions</Text>
    </View>
  )
}

