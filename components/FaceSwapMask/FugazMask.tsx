import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { faceSwapMask } from "../../styles/components/faceSwapMask";
import { DATA } from "../../data/faceSwap";

interface Props {
  dimensions: {
    width: number;
    height: number;
  };
  face: {
    yawAngle: number;
    rollAngle: number;
  };
  origin: {
    x: number;
    y: number;
  };
  rotation: number;
  margin: number;
}

const FugazMask = ({ dimensions, face, origin, rotation, margin }: Props) => {
  if (
    dimensions.width &&
    face.yawAngle &&
    face.rollAngle &&
    origin.x &&
    rotation &&
    margin
  ) {
    return (
      <View
        style={{
          position: "relative",
          zIndex: 400,
          width: "100%",
          height: "100%",
          top: margin,
          left: 0,
          overflow: "hidden",
        }}
      >
        {dimensions.width > 0 && face ? (
          <>
            <View
              style={{
                width: dimensions.width * 2.2,
                height: dimensions.height * 1.94,
                position: "absolute",
                zIndex: 500,
                top: origin.y - margin,
                left: origin.x,
                transform: [
                  { translateX: dimensions.width * -0.62 },
                  { translateY: dimensions.height * -0.485 },
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.fugaz]}
                source={DATA.masks[3].layer[0]}
              />
            </View>
          </>
        ) : (
          <View></View>
        )}
      </View>
    );
  } else {
    return <View></View>;
  }
};

export default FugazMask;
