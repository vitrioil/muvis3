import { FC } from "react";

import Audio from "./Audio";

import { VStack, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Effect: FC<{id: number, index: number, name: string, moveCard: (dragIndex: number, hoverIndex: number) => void}> = ({id, index, name, moveCard}) => {
    const bgColor = useColorModeValue("brand.500", "brand.800");
    return (
        <VStack bg={bgColor} borderRadius="15px" p="15px" spacing="15px">
            <Text w="100%" textAlign="start" fontWeight={700}>Effect Name</Text>
            <Audio id={id} index={index} moveCard={moveCard} name={name} />
        </VStack>
    )
}

export default Effect;