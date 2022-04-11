import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/components/stopChip";

interface Props {
  stop?: number;
}

export const StopChip = ({ stop }: Props) => {
  return (
    <View style={styles.container}>
      {typeof stop === "number" && stop > 0 && stop < 6 ? (
        <Text style={styles.text}>{`PARADA ${stop}`}</Text>
      ) : (
        <Text style={styles.text}>RECUERDA ESCANEAR EL QR DE LA PARADA</Text>
      )}
    </View>
  );
};
