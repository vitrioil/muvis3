import { createRef, FC } from "react";

import { Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/slider";

import { Canvas } from "@react-three/fiber";
import { ResponsiveValue } from "@chakra-ui/styled-system";

const player: FC<{width: ResponsiveValue<string | number>, height: ResponsiveValue<string | number>, controlsDisabled?: boolean}> = ({width, height, controlsDisabled}) => {
    const canvas = createRef<HTMLCanvasElement>();

    return (
        <Box m={10} h={height} w={width} position="relative">
            {/* <canvas width={width} height={height} ref={canvas} style={{background: "black", borderRadius: "25px"}} /> */}
            <Canvas orthographic={false}>
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
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