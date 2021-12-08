import { mode, StyleConfig } from "@chakra-ui/theme-tools";

const Button = {
    variants: {
        solid: (props: StyleConfig) => ({
            bg: mode("brand.300", "brand.700")(props),
            color: mode("black", "white")(props),
            _active: {
                color: mode("white", "black")(props)
            }
        }),
        alternative: (props: StyleConfig) => ({
            bg: mode("brand.100", "brand.800")(props),
            _hover: {
                bg: "brand.600"
            },
            _active: {
                bg: "brand.900"
            },
            _disabled: {
                bg: "brand.600"
            },
            ':disabled:hover': {
                bg: "brand.500"
            }
        })
    },
    defaultProps: {
        variant: "solid",
    }
};

export default Button;