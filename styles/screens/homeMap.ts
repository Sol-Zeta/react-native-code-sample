import { StyleSheet } from "react-native";
import { colors } from "../mainStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light3,
  },
  title: {
    fontFamily: "AmaticSC_700Bold",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: "16%",
    color: colors.dark1,
  },
});
