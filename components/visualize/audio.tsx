import { FC } from "react";

import { HStack, Text } from "@chakra-ui/layout";
import { DragHandleIcon } from '@chakra-ui/icons'

const audio: FC = () => {
    const minWidth = "320px";
    const height = "75px";
    const bgColor ="brand.700";

    return (
        <HStack minW={minWidth} h={height} borderRadius="20px" bgColor={bgColor} spacing="15px">
            <Text w="100%" paddingLeft="15px" color="white" fontWeight={600} textAlign="start">Vocals</Text>
            <DragHandleIcon boxSize={7} padding="0 15px 15px 0" color="white" marginBottom="auto" />
        </HStack>
    )
}

export default audio;