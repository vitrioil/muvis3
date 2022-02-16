import { Dispatch, FC, SetStateAction } from "react";

import Audio from "./Audio";

import { VStack, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useAppDispatch } from "../../redux/hook";

const Effect: FC<{id: number, index: number, name: string,
                  path: string, moveCard: (dragIndex: number, hoverIndex: number) => void,
                  effectName: string}> = ({id, index, name, path, moveCard, effectName}) => {
    const bgColor = useColorModeValue("brand.500", "brand.800");

    console.log(name, effectName)
    return (
        <VStack bg={bgColor} borderRadius="15px" p="15px" spacing="15px">
            <Text w="100%" textAlign="start" fontWeight={700}>Effect Name</Text>
            <Audio id={id} index={index} moveCard={moveCard} name={name} path={path} effectName={effectName}/>
        </VStack>
    )
}

export default Effect;