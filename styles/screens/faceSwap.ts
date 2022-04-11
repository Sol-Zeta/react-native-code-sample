import { StyleSheet } from "react-native";
import { colors } from "../mainStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraControlsBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    zIndex: 990,
    width: "100%",
    paddingVertical: "2.7%",
    backgroundColor: colors.totalBlack,
  },
  cameraControlsTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    paddingVertical: "2.7%",
    top: 0,
    zIndex: 999,
    width: "100%",
    padding: "5%",
    backgroundColor: colors.totalBlack,
  },
  flipButtonContainer: {
    position: "absolute",
    top: 27,
    left: 27,
    zIndex: 100,
  },
  closeCameraContainer: {
    position: "absolute",
    top: 27,
    right: 27,
    zIndex: 100,
  },
  cameraFlashContainer: {
    position: "absolute",
    top: 27,
    left: 27,
    zIndex: 100,
  },
  switchCamera: {
    alignSelf: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  downloadIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 999,
  },
});
