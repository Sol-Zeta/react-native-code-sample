import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import audios from "../../data/audiostories";
import icon from "../../data/icons";
import { styles } from "../../styles/components/audioStoriesPlayer";

type Props = {
  activeItem: number;
  handleStopAudio: boolean;
};

const AudioStoriesPlayer = ({ activeItem, handleStopAudio }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<any>();
  const [soundPosition, setSoundPosition] = useState<number>(0);
  const [soundPercentage, setSoundPercentage] = useState(0);

  useEffect(() => {
    sound && handleStopAudio ? sound.stopAsync() : undefined;
  }, [handleStopAudio]);

  useEffect(() => {
    const stopAudio = async () => {
      try {
        if (sound) {
          await sound.stopAsync();
        }
      } catch (error) {
        console.error("Error stoping audio: ", error);
      }
    };
    setIsPlaying(false);
    setSoundPosition(0);
    handleAudio(activeItem);
    stopAudio();
  }, [activeItem]);

  const handleAudio = async (item: number) => {
    try {
      setSoundPosition(0);
      const { sound } = await Audio.Sound.createAsync(audios[item].audio);
      setSound(sound);
      sound.setOnPlaybackStatusUpdate(onPlayback);
    } catch (error) {
      console.error(error);
    }
  };

  const onPlayback = (status: any) => {
    const duration = status.durationMillis;
    const progress = status.positionMillis;
    const currentPercentage = (progress * 100) / duration;
    setSoundPercentage(currentPercentage);
  };

  const trimTitle = (title: string) => {
    if (title.split(" ")[0] === "La") {
      return title;
    } else if (title.split(" ").length > 4) {
      return `${title.split(" ").slice(0, 4).join(" ")} ...`;
    } else {
      return title;
    }
  };

  const handlePlay = async () => {
    try {
      if (!isPlaying) {
        console.log("trying to play audio", activeItem);
        if (activeItem !== null) {
          console.log("2. playing track");
          await sound.playFromPositionAsync(soundPosition);
        }
      } else {
        if (sound) {
          await sound.pauseAsync();
          const status = await sound.getStatusAsync();
          setSoundPosition(status.positionMillis);
        }
      }
    } catch (error) {
      console.error("Error playing track", error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <View style={[styles.progressBar, { width: `${soundPercentage}%` }]} />
      <View style={styles.playerContainer}>
        <View style={[styles.iconContainer, styles.playerIconContainer]}>
          <Image
            source={activeItem ? audios[activeItem].image : audios[0].image}
            style={styles.icon}
          />
        </View>
        <View style={styles.numberAndTextContainer}>
          <View style={styles.numberContainer}>
            <Text style={[styles.number, styles.playerNumber]}>
              {activeItem ? activeItem + 1 : 1}
            </Text>
          </View>
          <View style={styles.playerTextContainer}>
            <Text style={[styles.title, styles.playerTitle]}>
              {activeItem
                ? trimTitle(audios[activeItem].title)
                : trimTitle(audios[0].title)}
            </Text>
            <Text style={[styles.text, styles.playerText]}>
              {activeItem ? audios[activeItem].subtitle : audios[0].subtitle}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={handlePlay}>
          <Image
            source={isPlaying ? icon.pause : icon.play}
            style={styles.playerIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AudioStoriesPlayer;
