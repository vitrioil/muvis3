import { FC } from "react";

import { Button } from "@chakra-ui/button";

const CustomButton: FC<{buttonText: string}> = ({buttonText}) => {
    const variant = "solid";

    return (
        <Button variant={variant}>
            {buttonText}
        </Button>
    )
} 

export default CustomButton