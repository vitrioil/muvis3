import React, { createRef, FC } from "react";

import { Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/slider";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ResponsiveValue } from "@chakra-ui/styled-system";

const player: FC<{width: ResponsiveValue<string | number>, height: ResponsiveValue<string | number>, controlsDisabled?: boolean, children?: React.ReactNode}> = ({width, height, controlsDisabled, children}) => {
    const canvas = createRef<HTMLCanvasElement>();

    return (
        <Box h={height} w={width} position="relative">
            <Canvas orthographic={false}>
                <OrbitControls />
                {children}
            </Canvas>
            {!controlsDisabled ? 
            <>
                <IconButton aria-label="Play / Pause" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" icon={<ChevronRightIcon />} />
                <Slider position="absolute" bottom="15%" w="80%" left="10%" aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </>
            :
            <></>}
        </Box>
    )
}

export default player;