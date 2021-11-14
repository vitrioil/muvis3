import { FC } from "react";

import { VStack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

const CustomInput: FC = () => {
    const bgColor = "brand.800";
    const minWidth = "525px";
    const borderColor = bgColor;
    const focusBorderColor = "brand.500";
    const color = "white";
    const isInvalid = false;

    return (
        <VStack>
            <Input w={minWidth}
                   isInvalid={isInvalid}
                   bgColor={bgColor}
                   color={color}
                   borderColor={borderColor}
                   focusBorderColor={focusBorderColor}
                   variant="outline"
                   borderRadius="10px" />
        </VStack>
    )
}

export default CustomInput;