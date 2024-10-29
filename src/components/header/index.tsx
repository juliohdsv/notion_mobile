import { View, Image, Text,TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { s } from "./styles";
import { colors } from "@/styles/color";


export function Header(){
  return(
    <View style={s.container}>
      <Image 
        style={s.image} 
        source={{uri: "https://github.com/juliohdsv.png"}}
      />
      <View style={s.user}>
        <Text style={s.name}>Júlio Henrique</Text>
        <Text style={s.email}>juliohenrique@gmail.com</Text>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View> 
  )
}
