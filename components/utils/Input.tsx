import { ChangeEventHandler, FC } from "react";

import { Container, VStack, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

const CustomInput: FC<{label: string, isInvalid?: boolean, statusText?: string, onChange: ChangeEventHandler<HTMLInputElement>, onBlur: ChangeEventHandler<HTMLInputElement>}> =
    ({label, isInvalid, statusText, onChange, onBlur}) => {
    // const bgColor = "brand.800";
    // const minWidth = "525px";
    // const borderColor = bgColor;
    // const focusBorderColor = "brand.500";
    // const color = "white";
    // const isInvalid = false;

    return (
        <VStack w="100%">
            <Text color="white" w="100%" textAlign="start">{label}</Text>
            <Input isInvalid={isInvalid} onChange={onChange} onBlur={onBlur} borderRadius={10} h={50} />
            <Container placeSelf="flex-start" marginRight="auto" variant="statusForm">{statusText}</Container>
        </VStack>
    )
}

export default CustomInput;