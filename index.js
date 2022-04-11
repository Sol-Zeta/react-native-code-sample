import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import messaging from "@react-native-firebase/messaging";
import App from "./App";

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    return null;
  }
  return <App />;
}

AppRegistry.registerComponent("main", () => HeadlessCheck);
