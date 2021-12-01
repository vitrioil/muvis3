import { FC } from "react";

import Audio from "./Audio";

import { VStack, Text } from "@chakra-ui/layout";

const effect: FC<{id: number, index: number, name: string, moveCard: (dragIndex: number, hoverIndex: number) => void}> = ({id, index, name, moveCard}) => {
    const bgColor = "brand.800";
    const textColor = "white";
    return (
        <VStack bg={bgColor} borderRadius="15px" p="15px" spacing="15px">
            <Text w="100%" textAlign="start" color={textColor} fontWeight={700}>Effect Name</Text>
            <Audio id={id} index={index} moveCard={moveCard} name={name} />
        </VStack>
    )
}

export default effect