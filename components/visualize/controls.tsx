import { FC } from "react";

import { HStack, Box } from "@chakra-ui/layout";

import Effect from './effect';

const controls: FC = () => {
    const items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
    const maxWidth = "820px";
    const height = "250px";
    const bgColor = "brand.700";

    return (
        <Box maxW={maxWidth} h={height} bg={bgColor} borderRadius="15px">
            <HStack h="100%" p="40px" spacing="40px" overflowX="auto">
                {items.map((item, index) => <Effect key={index} />)}
            </HStack>
        </Box>
    )
}

export default controls