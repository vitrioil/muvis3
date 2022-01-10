import React, { useState, FC, SetStateAction, Dispatch } from "react";

import { Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/slider";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ResponsiveValue } from "@chakra-ui/styled-system";

import { setPlaying } from "../../redux/slice/audio";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { ReactReduxContext, Provider } from 'react-redux';

const Player: FC<{width: ResponsiveValue<string | number>, height: ResponsiveValue<string | number>,
                  controlsDisabled?: boolean, children?: React.ReactNode}> = ({width, height, controlsDisabled, children}) => {

    const [showPlayButton, setShowPlayButton] = useState(false);
    const isPlaying = useAppSelector((state) => state.audio.isPlaying);
    const dispatch = useAppDispatch();

    return (
        <Box h={height} w={width} position="relative" onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)}>
            <ReactReduxContext.Consumer>
                {
                    ({store}) => (
                        <Canvas orthographic={false} pixelRatio={[1, 4]}>
                            <Provider store={store}>
                                <OrbitControls />
                                {children}
                            </Provider>
                        </Canvas>
                    )
                }
            </ReactReduxContext.Consumer>
            {/* <Canvas orthographic={false} pixelRatio={[1, 4]}>
                <OrbitControls />
                {children}
            </Canvas> */}
            <IconButton onClick={() => dispatch(setPlaying(!isPlaying))}
                        aria-label="Play / Pause"
                        position="absolute"
                        top="50%" left="50%"
                        transform="translate(-50%, -50%)"
                        icon={<ChevronRightIcon />}
                        style={{display: showPlayButton ? "block": "none"}} />
            {(!controlsDisabled || !isPlaying) ? 
            <>
                {/* <Slider position="absolute" bottom="15%" w="80%" left="10%" aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider> */}
            </>
            :
            <></>}
        </Box>
    )
}

export default Player;