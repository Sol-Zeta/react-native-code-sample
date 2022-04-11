import React from "react";
import {
  TextStyle,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  View,
} from "react-native";
import styles from "../../styles/components/recordVideo";

interface Props {
  onPress: () => void;
  onStopPress: () => void;
  recording?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  direction?: String | undefined;
}

const SnapCamera = ({ onPress, onStopPress, recording }: Props) => {
  return (
    <>
      {recording ? (
        <TouchableOpacity onPress={onStopPress} style={styles.container}>
          <View style={styles.recording}></View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <View style={styles.center}></View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SnapCamera;
