import React from 'react';
import {View, Image} from 'react-native';
import { faceSwapMask } from '../../styles/components/faceSwapMask';
import { DATA } from '../../data/faceSwap';

interface Props {
    dimensions: {
        width: number,
        height: number
    };
    face: {
        yawAngle: number,
        rollAngle: number,
        leftEyePosition: {
          x: number,
          y: number
        },
        leftEarPosition: {
          x: number,
          y: number
        },
    };
    origin: {
        x: number,
        y: number
    };
    rotation: number;
    margin: number;
}

export const JoyMask = ({dimensions, face, origin, rotation, margin}: Props) => {
    if(dimensions.width && face.yawAngle && face.rollAngle && origin.x && rotation && margin){
      return (
        <View
        style={{
          position: 'relative',
          zIndex: 400,
          width: '100%', 
          height: '100%',
          top: margin,
          left: 0,
          overflow: 'hidden'
        }}
      >
        {dimensions.width > 0 && face ? (
          <>
            {/* JOY CAP */}
            <View style={{
                width: dimensions.width, 
                height: dimensions.height*1.74831,
                position: 'absolute',
                zIndex: 500,
                top: origin.y-margin,
                left: origin.x,
                transform:[
                    {translateY: dimensions.height*-0.770035},
                    {rotateY: `${face.yawAngle}deg`},
                    {rotateX: `${face.rollAngle}deg`},
                    {rotateZ: `${-rotation}deg`}
                ]
              }}>
                <Image style={[faceSwapMask.joy]} source={DATA.masks[0].layer[0]} />
              </View> 
            {/* JOY LEFT EAR */}
            <View style={{
                 width: dimensions.width*1.44113, 
                 height: dimensions.height,
                 position: 'absolute',
                 zIndex: 500,
                 top: origin.y-margin,
                 left: origin.x,
                 transform:[
                     {translateX: dimensions.width*-0.16945},
                     {translateY: dimensions.width*0.05},
                     {rotateY: `${face.yawAngle}deg`},
                     {rotateX: `${face.rollAngle}deg`},
                     {rotateZ: `${-rotation}deg`}
                 ]
               }}>
                <Image style={[faceSwapMask.joy]} source={DATA.masks[0].layer[1]} />
              </View>
              {/* JOY RIGHT EAR */}
            <View style={{
                 width: dimensions.width*1.44113, 
                 height: dimensions.height,
                 position: 'absolute',
                 zIndex: 500,
                 top: origin.y-margin,
                 left: origin.x,
                 transform:[
                     {translateX: dimensions.width*-0.29945},
                     {translateY: dimensions.width*0.05},
                     {rotateY: `${face.yawAngle}deg`},
                     {rotateX: `${face.rollAngle}deg`},
                     {rotateZ: `${-rotation}deg`}
                 ]
               }}>
                <Image style={[faceSwapMask.joy]} source={DATA.masks[0].layer[2]} />
              </View>
              </>
                ) : (
                  <View></View>
                )}
              </View>
        );
    } else {
        return <View></View>
    }
}

export default JoyMask;
