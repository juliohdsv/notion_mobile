import { StyleSheet } from "react-native";
import { colors } from "@/styles/color";

export const s = StyleSheet.create({
  container:{
    width: "100%",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    padding: 16,
  },
  title:{
    color: colors.gray[100],
    fontSize: 16,
    flex: 1,
  },
})