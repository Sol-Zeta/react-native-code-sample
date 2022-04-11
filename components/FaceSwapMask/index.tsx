import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import FugazMask from './FugazMask';
import ElfoMask from './ElfoMask';
import UmbraMask from './UmbraMask'
import JoyMask from './JoyMask'
import NevadoMask from './NevadoMask'
import RufinoMask from './RufinoMask'
import { useFaceSwap } from "../../hooks/useFaceSwap";

interface Props {
    facesDetected: any;
    maskId: number
}

const index = ({facesDetected, maskId}: Props) => {
    const [face, setFace] = useState(null);
    const [dimensions, setDimensions] = useState({width: 0, height:0});
    const [origin, setOrigin] = useState({x: 0, y:0});
    const { rotation, calculateRotation } = useFaceSwap()
    const margin = Dimensions.get('screen').height * 0.08

    useEffect(() => {
    if(facesDetected.length > 0){
        setFace(facesDetected[0])
        setDimensions(facesDetected[0].bounds.size)
        setOrigin(facesDetected[0].bounds.origin)
        calculateRotation(facesDetected[0].leftEyePosition, facesDetected[0].rightEyePosition)    
    }
    }, [facesDetected]);


    const renderMask = (id: number) => {
        switch (id) {
            case 0:
                return (<JoyMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
            case 1:
                return (<UmbraMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
            case 2:
                return (<RufinoMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
            case 3:
                return (<FugazMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
            case 4:
                return (<NevadoMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
            case 5:
                return (<ElfoMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
            default:
                return (<JoyMask face={face} dimensions={dimensions} origin={origin} rotation={rotation} margin={margin}/>)
        }
    }
    return renderMask(maskId)
}

export default index;
