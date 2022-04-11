import React, { useState } from "react";
import { Text, View, Image, ScrollView, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Accordion from "react-native-collapsible/Accordion";
import { StackScreenProps } from "@react-navigation/stack";
import { MainNavigationParams } from "../navigation/Main";
import { SubscreenHeader } from "../components/SubscreenHeader";
import image from "../data/countDown";
import icon from "../data/icons";
import { SECTIONS } from "../data/faq";
import { styles } from "../styles/screens/faq";

export const Faq = ({
  navigation,
}: StackScreenProps<MainNavigationParams, "letter">) => {
  const [activeSections, setActiveSections] = useState([]);

  const handleOnPress = () => navigation.navigate("tabNavigation");

  const renderHeader = (
    section: any,
    _: number,
    isActive: boolean
  ): JSX.Element => {
    return (
      <View
        style={[styles.titleContainer, isActive && styles.titleContainerActive]}
      >
        <Text style={[styles.title, isActive && styles.titleActive]}>
          {section.title}
        </Text>
        <View style={styles.iconContainer}>
          <Image
            source={isActive ? icon.arrowDropUp : icon.arrowDropDown}
            style={styles.icon}
          />
        </View>
      </View>
    );
  };

  const trimText = (text: string) => {
    const words = text.split(" ");
    const firstPart = words.slice(0, words.length - 2).join(" ");
    const secondPart = words.slice(-1)[0];
    return { firstPart, secondPart };
  };

  const renderContent = (
    section: any,
    _: number,
    isActive: boolean
  ): JSX.Element => {
    const splitedText = section.link ? trimText(section.content) : "";
    return (
      <View
        style={[styles.textContainer, isActive && styles.textContainerActive]}
      >
        {section.link && splitedText ? (
          <Text style={styles.text}>
            {splitedText.firstPart}
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL("https://www.ifema.es/servicios/parking")
              }
            >
              {` ${splitedText.secondPart}`}
            </Text>
          </Text>
        ) : (
          <Text style={styles.text}>{section.content}</Text>
        )}
      </View>
    );
  };

  const updateSections = (activeSections: any) =>
    setActiveSections(activeSections);

  return (
    <>
      <View style={styles.container}>
        <SubscreenHeader
          title="Preguntas frecuentes"
          onPress={handleOnPress}
          style={styles.header}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 0,
            width: "100%",
            height: "25%",
          }}
        >
          <Image
            source={image.snow}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Accordion
            activeSections={activeSections}
            sections={SECTIONS}
            renderAsFlatList={false}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={updateSections}
            touchableComponent={TouchableOpacity}
            containerStyle={styles.itemContainer}
          />
        </ScrollView>
      </View>
    </>
  );
};
