import React, { useState } from "react";
import { View, Image } from "react-native";
import FaceSwapMask from "../components/FaceSwapMask/index.js";
import { MaskCarousel } from "../components/Carousel";
import AugmentedCamera from "../components/AugmentedCamera";
import icon from "../data/icons";

export const FaceSwap = ({ navigation: { navigate } }: any) => {
  const [facesDetected, setFacesDetected] = useState(null);
  const [mask, setMask] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const handleFacesDetected = ({ faces }: any) => {
    if (faces.length > 0) {
      setFacesDetected(faces);
    } else {
      setFacesDetected(null);
    }
  };

  const getMaskId = (id: number) => setMask(id);
  const handleClose = () => navigate("map");
  const handleIsRecording = (bool: boolean) => setIsRecording(bool);

  return (
    <>
      <AugmentedCamera
        navigation={navigate}
        screen="faceswap"
        cameraType={"front"}
        handleClose={handleClose}
        handleFacesDetected={handleFacesDetected}
        getIsRecording={handleIsRecording}
      >
        {facesDetected !== null ? (
          <FaceSwapMask facesDetected={facesDetected} maskId={mask} />
        ) : (
          <View />
        )}
        {!isRecording ? (
          <MaskCarousel getMaskId={getMaskId} firstMask={mask} />
        ) : (
          <View
            style={{
              width: "100%",
              height: 90,
              position: "absolute",
              zIndex: 999,
              bottom: 130,
            }}
          >
            <Image
              source={icon.watermark}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
            />
          </View>
        )}
      </AugmentedCamera>
    </>
  );
};
