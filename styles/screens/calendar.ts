import { StyleSheet } from "react-native";
import { colors } from "../mainStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "6.5%",
    marginTop: "6.5%",
    width: "100%",
    height: "100%",
    shadowColor: colors.dark1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  backgroundImage: {
    position: "absolute",
    top: "16%",
    zIndex: -1,
    width: "100%",
    height: "25%",
    resizeMode: "stretch",
  },
  redBackground: {
    position: "absolute",
    top: 0,
    zIndex: -100,
    backgroundColor: colors.primary,
    width: "100%",
    height: "30%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "flex-start",
    marginBottom: "7.5%",
  },
  title: {
    fontSize: 32,
    fontFamily: "AmaticSC_700Bold",
    textAlign: "center",
    paddingTop: "7.5%",
    marginBottom: "4%",
    paddingHorizontal: "13.6%",
    color: colors.white,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Lato_400Regular",
    paddingHorizontal: "7%",
    color: colors.white,
  },
});
