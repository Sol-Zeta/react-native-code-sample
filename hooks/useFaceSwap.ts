import { useState } from "react";

export const useFaceSwap = () => {
  const [rotation, setRotation] = useState(0);
  const [hatRotation, setHatRotation] = useState(0);

  const calculateRotation = (leftEye, rightEye) => {
    if (leftEye && rightEye) {
      const height = leftEye.y - rightEye.y;
      const distance = rightEye.x - leftEye.x;
      const faceRotation = (Math.atan(height / distance) * 180) / 3.1416;
      setRotation(faceRotation);
    }
  };
  const calculateHatRotation = (leftHead, rightHead) => {
    if (leftHead && rightHead) {
      const height = leftHead.y - rightHead.y;
      const distance = rightHead.x - leftHead.x;
      const faceRotation = (Math.atan(height / distance) * 180) / 3.1416;
      setHatRotation(faceRotation);
    }
  };

  return {
    rotation,
    calculateRotation,
    hatRotation,
    calculateHatRotation,
  };
};
