import React, { useState, useEffect } from "react";
import {
  TextStyle,
  Alert,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import gradient from "../../data/buttonGrandient";
import { withText } from "../../styles/components/btns";
import { colors } from "../../styles/mainStyles";

interface Props {
  onPress: () => void;
  text: string | undefined;
  color: string;
  size?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const WithText = ({
  onPress,
  text,
  style,
  textStyle,
  color,
  size,
  disabled,
}: Props) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [gradients, setGradients] = useState<any | undefined>(undefined);

  useEffect(() => {
    setGradients(gradient);
  }, [gradient]);

  useEffect(() => {
    switch (color) {
      case "green":
        setBackgroundColor(colors.green);
        break;
      case "red":
        setBackgroundColor(colors.primary);
        break;
      case "white":
        setBackgroundColor(colors.white);
        break;
      default:
        setBackgroundColor(colors.green);
        break;
    }
  }, [color]);

  const handleDisabled = () =>
    Alert.alert("Acepta los términos y condiciones para poder continuar");

  return (
    <>
      {gradients ? (
        <TouchableOpacity
          onPressIn={disabled ? handleDisabled : onPress}
          style={[
            withText.container,
            size === "small"
              ? { width: "42.5%", minWidth: "35%", height: 50 }
              : { minWidth: 250, width: "87.5%" },
            style,
            { backgroundColor: backgroundColor },
          ]}
        >
          <LinearGradient
            colors={color ? gradients[color][0] : [colors.primary]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ height: 48 }}
          >
            <LinearGradient
              colors={color ? gradients[color][1] : [colors.primary]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={{ height: 48, justifyContent: "center" }}
            >
              <Text
                style={[
                  withText.text,
                  textStyle,
                  color === "red" && { color: colors.light1 || "white" },
                ]}
              >
                {text}
              </Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

export default WithText;
