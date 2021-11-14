import { FC } from "react";

import Audio from "./audio";

import { VStack, Text } from "@chakra-ui/layout";

const effect: FC = () => {
    const minWidth = "350px";
    const height = "150px";
    const bgColor = "brand.800";
    const textColor = "white";
    return (
        <VStack minW={minWidth} h={height} bg={bgColor} borderRadius="15px" p="15px" spacing="15px">
            <Text w="100%" textAlign="start" color={textColor} fontWeight={700}>Effect Name</Text>
            <Audio />
        </VStack>
    )
}

export default effect