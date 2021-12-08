import { mode, StyleConfig } from "@chakra-ui/theme-tools";

const Input = {
    variants: {
      alternative: (props: StyleConfig) => ({
          field: {
            bg: mode("brand.600", "brand.800")(props),
            _focus: {
                boxShadow: "0 2px 0 0 #1c6be1", // brand.500 better way??
            },
            _invalid: {
                boxShadow: "0 5px 0 0 #661200",
            },
          },
      })
    },
    defaultProps: {
      variant: "alternative" // null here
    }
  }

export default Input;