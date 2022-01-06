import { Dispatch, FC, SetStateAction } from "react";

import Audio from "./Audio";

import { VStack, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Effect: FC<{id: number, index: number, name: string,
                  path: string, moveCard: (dragIndex: number, hoverIndex: number) => void,
                  isPlaying: boolean, setSpeed: Dispatch<SetStateAction<number>>}> = ({id, index, name, path, moveCard, isPlaying, setSpeed}) => {
    const bgColor = useColorModeValue("brand.500", "brand.800");
    return (
        <VStack bg={bgColor} borderRadius="15px" p="15px" spacing="15px">
            <Text w="100%" textAlign="start" fontWeight={700}>Effect Name</Text>
            <Audio isPlaying={isPlaying} id={id} index={index} moveCard={moveCard} name={name} path={path} setSpeed={setSpeed}/>
        </VStack>
    )
}

export default Effect;