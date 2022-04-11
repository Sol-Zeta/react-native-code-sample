import React, { useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MainNavigationParams } from "../navigation/Main";
import { SubscreenHeader } from "../components/SubscreenHeader";
import AudioStoriesPlayer from "../components/AudioStoriesPlayer";
import image from "../data/countDown";
import audios from "../data/audiostories";
import { styles } from "../styles/screens/audiostories";

export const AudioStories = ({
  navigation,
}: StackScreenProps<MainNavigationParams, "letter">) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [isStopedAudio, setIsStopedAudio] = useState(false);

  const handleOnPress = () => {
    setIsStopedAudio(true);
    navigation.navigate("tabNavigation");
  };

  const handleAudio = async (track: any, item: number) => {
    console.log(`Reproducir ${track}`);
    if (item !== activeItem) {
      setActiveItem(item);
    }
  };

  const handleStopAudio = (value: boolean) => {
    setIsStopedAudio(value);
  };

  const renderItems = () => {
    return audios.map((e, i) => (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeItem === i && styles.itemContainerActive,
        ]}
        onPress={() => handleAudio(e.title, i)}
        key={`audiostories-${i}`}
      >
        <View style={styles.iconContainer}>
          <Image source={e.image} style={styles.icon} />
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{i + 1}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{e.title}</Text>
          <Text style={styles.text}>{e.subtitle}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <>
      <View style={styles.container}>
        <SubscreenHeader
          title="Audiocuentos"
          onPress={handleOnPress}
          style={styles.header}
        />
        <View style={styles.backgroundContainer}>
          <Image source={image.snow} style={styles.backgroundImage} />
        </View>
        <ScrollView style={styles.itemsContainer}>{renderItems()}</ScrollView>
        <AudioStoriesPlayer
          activeItem={activeItem}
          handleStopAudio={isStopedAudio}
        />
      </View>
    </>
  );
};
