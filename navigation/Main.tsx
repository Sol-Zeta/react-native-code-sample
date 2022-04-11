import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  AudioStories,
  CountDownScreen,
  Ecommerce,
  Faq,
  Help,
  Information,
  LightsWalk,
  Login,
  Onboarding,
  Privacity,
  Profile,
  Splash,
  Settings,
} from "../screens";
import { TabMenu, tabMenuKeys } from "./TabMenu";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { useAuth } from "../hooks/useAuth";
import { Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";

type TabNvigationParams = {
  screen: tabMenuKeys;
};

type LoginTabParams = {
  nextScreen: tabMenuKeys;
};

export type MainNavigationParams = {
  splash: undefined;
  onboarding: undefined;
  login?: LoginTabParams;
  ra?: undefined;
  faq?: undefined;
  help?: undefined;
  settings?: undefined;
  info?: undefined;
  audiostories?: undefined;
  homemap: undefined;
  tabNavigation?: TabNvigationParams;
  letter: undefined;
  ecommerce: undefined;
  terms: undefined;
  profile: undefined;
  modal: undefined;
};

const Stack = createStackNavigator<MainNavigationParams>();

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    return authStatus;
  }
  return false;
};

let globalShowNotifications = false;

export const MainNavigation = () => {
  const navigationRef = useNavigationContainerRef<any>();

  const [notification, setNotification] = useState<any | false>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [notificationToken, setNotificationToken] = useState("");

  const { isAuthUser } = useAuth();
  const { firebaseConnect, onAuthStateChange } = useFirebaseAuth();
  const { login } = useAuth();

  useEffect(() => {
    try {
      firebaseConnect();
      const unsubscribeFirebase = onAuthStateChange(login);
      let unsubscribeNotifications = () => {};

      requestUserPermission()
        .then((authStatus) => {
          if (authStatus) {
            messaging()
              .getToken()
              .then((token) => {
                unsubscribeNotifications = messaging().onMessage(
                  async (remoteMessage) => {
                    if (
                      globalShowNotifications &&
                      remoteMessage &&
                      remoteMessage.notification
                    ) {
                      Alert.alert(
                        remoteMessage.notification.title
                          ? remoteMessage.notification.title
                          : "",
                        remoteMessage.notification.body
                          ? remoteMessage.notification.body
                          : ""
                      );
                    }
                  }
                );

                messaging().setBackgroundMessageHandler(
                  async (remoteMessage) => {
                    setNotification(remoteMessage);
                  }
                );

                setNotificationToken(token);
                setShowNotifications(true);
              })
              .catch((error) => {
                setNotificationToken("");
                setShowNotifications(false);
                console.error("Notifications token not received");
              });
          }
        })
        .catch((error) => {
          console.log("Notifications permissions disabled:", error);
        });

      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          setNotification(remoteMessage);
        })
        .catch((error) => {
          console.error("Initial notification error:", error);
        });

      return () => {
        unsubscribeFirebase();
        unsubscribeNotifications();
      };
    } catch (error: any) {
      console.error("Error concecting with Firebase:", error);
    }
  }, []);

  useEffect(() => {
    if (notification) {
      if (isAuthUser) {
        navigationRef.navigate("tabNavigation", { screen: "calendar" });
      } else {
        navigationRef.navigate("login", { nextScreen: "calendar" });
      }
    }
    setNotification(false);
  }, [notification]);

  useEffect(() => {
    globalShowNotifications = showNotifications;
  }, [showNotifications]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="terms" component={Privacity} />
        <Stack.Screen name="ra" component={LightsWalk} />
        <Stack.Screen name="tabNavigation" component={TabMenu} />
        <Stack.Screen name="letter" component={CountDownScreen} />
        <Stack.Screen name="ecommerce" component={Ecommerce} />
        <Stack.Screen name="faq" component={Faq} />
        <Stack.Screen name="settings">
          {(props) => (
            <Settings
              {...props}
              notifications={{
                setNotification,
                notificationToken,
                setNotificationToken,
                showNotifications,
                setShowNotifications,
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="help" component={Help} />
        <Stack.Screen name="info" component={Information} />
        <Stack.Screen name="audiostories" component={AudioStories} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
