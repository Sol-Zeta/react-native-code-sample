import React, { useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { HomeMap, Profile, Calendar, FaceSwap } from "../screens";
import { MainNavigationParams } from "./Main";
import { useAuth } from "../hooks/useAuth";
import { styles, tabTextStyle } from "../styles/components/tabMenu";
import { LightsWalk } from "../screens/LightsWalk";

export type tabMenuKeys = keyof TabMenuParams;
import { colors } from "../styles/mainStyles";
import { DATA } from "../data/navigation";
import BottomSheetContext from "../context/BottomSheetContext";

export type TabMenuParams = {
  ra: { itemId: string; title: string; line: any; solid: any };
  photo: { itemId: string; title: string; line: any; solid: any };
  map: { itemId: string; title: string; line: any; solid: any };
  calendar: { itemId: string; title: string; line: any; solid: any };
  profile: { itemId: string; title: string; line: any; solid: any };
};

const Tab = createBottomTabNavigator<TabMenuParams>();

export const TabMenu = ({
  navigation,
}: StackScreenProps<MainNavigationParams, "tabNavigation">) => {
  const { isAuthUser } = useAuth();
  const { isOpen } = useContext(BottomSheetContext);

  useEffect(() => {
    !isAuthUser && navigation.navigate("login");
  }, [isAuthUser]);

  return (
    <>
      <Tab.Navigator
        initialRouteName="map"
        tabBarOptions={{
          activeTintColor: colors.white,
          inactiveTintColor: colors.black,
          showLabel: false,
          tabStyle: styles.tab,
          style: styles.navigator,
        }}
        backBehavior="initialRoute"
        detachInactiveScreens={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconProps<any>["name"];
            let text = "";

            if (route.name === "map") {
              iconName = "home";
              text = "Joy to the World";
            } else if (route.name === "ra") {
              iconName = focused ? "cursor-move" : "cursor-move";
              text = "Paseo de las luces";
            } else if (route.name === "photo") {
              iconName = "camera";
              text = "Faceswap";
            } else if (route.name === "calendar") {
              iconName = "calendar";
              text = "Calendario navideño";
            } else if (route.name === "profile") {
              iconName = "account";
              text = "Descubre más";
            }
            const index = useNavigationState((state) => state.index);
            return (
              <View
                style={[
                  styles.tabContainer,
                  route.name === "map" && styles.mapContainer,
                  (index === 1 || index === 0 || isOpen) &&
                    styles.mapContainerHidden,
                  route.name === "photo" && { marginRight: 30 },
                  route.name === "calendar" && { marginLeft: 33 },
                  focused && route.name !== "map" && styles.tabContainerFocused,
                ]}
              >
                <View
                  style={[
                    styles.iconContainer,
                    route.name === "map" && styles.iconMapContainer,
                  ]}
                >
                  <Image
                    source={
                      focused
                        ? DATA.icons[route.name].solid
                        : DATA.icons[route.name].line
                    }
                    style={[
                      styles.icon,
                      route.name === "map" && styles.iconMap,
                    ]}
                  />
                </View>
                {route.name !== "map" && (
                  <Text
                    adjustsFontSizeToFit
                    style={tabTextStyle(size - 3).text}
                  >
                    {text}
                  </Text>
                )}
              </View>
            );
          },
        })}
      >
        <Tab.Screen
          name="ra"
          component={LightsWalk}
          initialParams={{ itemId: "RA" }}
          options={{ tabBarVisible: false, unmountOnBlur: false }}
        />
        <Tab.Screen
          name="photo"
          component={FaceSwap}
          initialParams={{ itemId: "PHOTO" }}
          options={{ tabBarVisible: false, unmountOnBlur: true }}
        />
        <Tab.Screen
          name="map"
          component={HomeMap}
          options={{ tabBarVisible: !isOpen }}
        />
        <Tab.Screen
          name="calendar"
          component={Calendar}
          initialParams={{ itemId: "CALENDAR" }}
          options={{ unmountOnBlur: true, tabBarVisible: !isOpen }}
        />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};
