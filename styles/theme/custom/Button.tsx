const Button = {
    baseStyle: {
    },
    variants: {
        solid: {
            bg: "#093c7e"
        },
        alternative: {
            bg: "#00244d",
            _hover: {
                bg: "#1253b0"
            },
            _active: {
                bg: "#000c1e"
            },
            _disabled: {
                bg: "#1253b0"
            },
            ':disabled:hover': {
                bg: "#1c6be1"
            }
        }
    },
    defaultProps: {
        variant: "solid",
    }
};

export default Button;