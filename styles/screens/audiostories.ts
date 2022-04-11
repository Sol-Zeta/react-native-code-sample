import { StyleSheet } from "react-native";
import { colors } from "../mainStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 64,
    marginBottom: 12,
    paddingBottom: 23,
    marginHorizontal: 24,
  },
  backgroundContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 0,
    width: "100%",
    height: "25%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  itemsContainer: {
    marginTop: 10,
    marginBottom: 130,
    // flex: 1,
    // justifyContent: "space-between",
  },
  itemContainer: {
    margin: 3,
    backgroundColor: colors.light1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: "8.5%",
    paddingVertical: 8,
    borderBottomColor: colors.light3,
    borderBottomWidth: 2,
  },
  itemContainerActive: {
    paddingVertical: 16,
    borderBottomWidth: 0,
    borderRadius: 8,
    shadowColor: "rgba(0, 25, 88, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    marginHorizontal: "5.5%",
    paddingHorizontal: "3.5%",
    marginVertical: "1%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    borderBottomWidth: 2,
    borderBottomColor: colors.light3,
  },
  title: {
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    letterSpacing: 0.5,
    color: colors.dark1,
  },
  textContainer: {
    width: "60%",
  },
  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 14,
    letterSpacing: 0.4,
    color: colors.dark4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: "black",
    borderRadius: 8,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  numberContainer: {
    marginLeft: 8,
    marginRight: 8,
  },
  number: {
    fontFamily: "Lato_700Bold",
    fontSize: 20,
  },
  playerContainer: {
    backgroundColor: colors.dark1,
    position: "absolute",
    bottom: 0,
    height: 74,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "2%",
    paddingLeft: "2%",
    paddingRight: "4%",
  },
  playerIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 8,
    overflow: "hidden",
  },
  numberAndTextContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 2,
  },
  playerNumberContainer: {
    alignSelf: "flex-start",
  },
  playerNumber: {
    color: colors.light1,
  },
  playerTitle: {
    color: colors.light1,
    fontSize: 16,
  },
  playerText: {
    color: colors.light1,
  },
  progressBar: {
    position: "absolute",
    bottom: 74,
    height: 4,
    backgroundColor: colors.red,
  },
});
