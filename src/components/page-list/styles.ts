import { StyleSheet } from "react-native";
import { colors } from "@/styles/color";

export const s = StyleSheet.create({
  container:{
    padding: 20,
    gap: 12,
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingRight: 16,
  },
  title:{
    color: colors.gray[300],
    fontSize: 16,
    flex: 1
  },

})