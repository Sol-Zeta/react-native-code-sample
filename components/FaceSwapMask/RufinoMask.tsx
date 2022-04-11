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
    leftEyePosition: {
      x: number;
      y: number;
    };
    rightEyePosition: {
      x: number;
      y: number;
    };
    leftEarPosition: {
      x: number;
      y: number;
    };
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

export const JoyMask = ({ dimensions, face, origin, rotation, margin }: Props) => {
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
            {/* RUFINO NOSE */}
            <View
              style={{
                width: dimensions.width * 0.23,
                height: dimensions.height * 0.23,
                position: "absolute",
                zIndex: 500,
                top: face.noseBasePosition.y-margin,
                left: face.noseBasePosition.x,
                transform: [
                  { translateX: dimensions.width * 0.23 * -0.5 },
                  { translateY: dimensions.width * -0.05 },
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[2].layer[0]}
              />
            </View>
            {/* RUFINO LEFT EAR */}
            <View
              style={{
                width: dimensions.width * 1.44113,
                height: dimensions.height,
                position: "absolute",
                zIndex: 500,
                top: origin.y-margin,
                left: origin.x,
                transform: [
                  { translateX: dimensions.width * -0.16945 },
                  { translateY: dimensions.width * 0.2 },
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[2].layer[2]}
              />
            </View>
            {/* RUFINO RIGHT EAR */}
            <View
              style={{
                width: dimensions.width * 1.44113,
                height: dimensions.height,
                position: "absolute",
                zIndex: 500,
                top: origin.y-margin,
                left: origin.x,
                transform: [
                  { translateX: dimensions.width * -0.29945 },
                  { translateY: dimensions.width * 0.2 },
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[2].layer[4]}
              />
            </View>
            {/* RUFINO LEFT HORN */}
            <View
              style={{
                width: dimensions.width * 2.199,
                height: dimensions.height * 1.65429,
                position: "absolute",
                zIndex: 500,
                top: face.leftEyePosition.y-margin,
                left: face.leftEyePosition.x,
                transform: [
                  { translateX: dimensions.width * -0.9 },
                  { translateY: dimensions.width * -1 },
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[2].layer[1]}
              />
            </View>
            {/* RUFINO right HORN */}
            <View
              style={{
                width: dimensions.width * 2.199,
                height: dimensions.height * 1.65429,
                position: "absolute",
                zIndex: 500,
                top: face.rightEyePosition.y-margin,
                left: face.rightEyePosition.x,
                transform: [
                  { translateX: dimensions.width * -1.355 },
                  { translateY: dimensions.width * -1 },
                  { rotateY: `${face.yawAngle}deg` },
                  { rotateX: `${face.rollAngle}deg` },
                  { rotateZ: `${-rotation}deg` },
                ],
              }}
            >
              <Image
                style={[faceSwapMask.joy]}
                source={DATA.masks[2].layer[3]}
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

export default JoyMask;
