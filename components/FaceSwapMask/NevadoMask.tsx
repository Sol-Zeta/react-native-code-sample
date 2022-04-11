import React from "react";
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
    noseBasePosition: {
      x: number;
      y: number;
    };
  };
  origin: {
    x: number;
    y: number;
  };
  rotation: number;
  margin: number;
}

export const NevadoMask = ({ dimensions, face, origin, rotation, margin }: Props) => {
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
            {/* NEVADO CAP */}
            <View
              style={{
                width: dimensions.width * 1.76344,
                height: dimensions.height * 1.76344,
                position: "absolute",
                zIndex: 500,
                top: origin.y-margin,
                left: origin.x,
                transform: [
                  { translateX: dimensions.width * -0.4 },
                  { translateY: dimensions.height * -0.719764 },
                  //   {translateX: dimensions.width*-0.62},
                  //  {translateY: dimensions.height*-0.7},
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[4].layer[0]}
              />
            </View>
            {/* NEVADO NOSE */}
            <View
              style={{
                width: dimensions.width,
                height: dimensions.height,
                position: "absolute",
                zIndex: 500,
                top: origin.y-margin,
                left: origin.x,
                transform: [
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[4].layer[1]}
              />
            </View>
            {/* NEVADO SCARF */}
            <View
              style={{
                width: dimensions.width,
                height: dimensions.height * 1.5024794,
                position: "absolute",
                zIndex: 500,
                top: origin.y-margin,
                left: origin.x,
                transform: [
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[4].layer[2]}
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

export default NevadoMask;
