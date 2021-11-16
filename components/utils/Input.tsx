import { ChangeEventHandler, FC } from "react";

import { VStack, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

const CustomInput: FC<{label: string, isInvalid: boolean, onChange: ChangeEventHandler<HTMLInputElement>, onBlur: ChangeEventHandler<HTMLInputElement>}> =
    ({label, isInvalid, onChange, onBlur}) => {
    // const bgColor = "brand.800";
    // const minWidth = "525px";
    // const borderColor = bgColor;
    // const focusBorderColor = "brand.500";
    // const color = "white";
    // const isInvalid = false;

    return (
        <VStack>
            <Text color="white" w="100%" textAlign="start">{label}</Text>
            <Input isInvalid={isInvalid} onChange={onChange} onBlur={onBlur} />
        </VStack>
    )
}

export default CustomInput;