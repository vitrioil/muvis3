const Select = {
  parts: ["field", "icon"],
  variants: {
    filled: {
      field: {
        bg: "#00244d",
        color: "#ffffff",
        _hover: {
          bg: "#1253b0"
        }
      }
    }
  },
  defaultProps: {
    variant: "filled"
  }
};

export default Select;