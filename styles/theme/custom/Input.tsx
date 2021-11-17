const Input = {
    baseStyle: {
      field: {
        bg: '#00244d',
        color: 'white',
        _focus: {
            boxShadow: "0 2px 0 0 #1c6be1", // brand.500 better way??
        },
        _invalid: {
            boxShadow: "0 5px 0 0 #661200",
        },
      },
    },
    sizes: {},
    variants: {},
    defaultProps: {
      variant: null // null here
    }
  }

export default Input;