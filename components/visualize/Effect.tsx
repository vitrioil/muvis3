import { Dispatch, FC, SetStateAction } from "react";

import Audio from "./Audio";

import { VStack, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { swapEffect } from "../../redux/slice/audio";
import { useAppDispatch } from "../../redux/hook";

const Effect: FC<{id: number, index: number, name: string,
                  path: string, moveCard: (dragIndex: number, hoverIndex: number) => void,
                  setSpeed: Dispatch<SetStateAction<number>>}> = ({id, index, name, path, moveCard, setSpeed}) => {
    const bgColor = useColorModeValue("brand.500", "brand.800");
    const dispatch = useAppDispatch()

    // dispatch(swapEffect(["1", "2"]))

    return (
        <VStack bg={bgColor} borderRadius="15px" p="15px" spacing="15px">
            <Text w="100%" textAlign="start" fontWeight={700}>Effect Name</Text>
            <Audio id={id} index={index} moveCard={moveCard} name={name} path={path} setSpeed={setSpeed}/>
        </VStack>
    )
}

export default Effect;