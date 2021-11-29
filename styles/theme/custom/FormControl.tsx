const FormControl = {
    parts: ["formControl", "formErrorMessage"],
    baseStyle: {
        formErrorMessage: {
            bg: "#000000"
        },
    },
    variants: {
        statusForm: {formErrorMessage: {
            color: "#661200",
            borderRadius: "8",
            width: "auto",
        }}
    }
};

export default FormControl;