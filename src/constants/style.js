import {
  theme,
  textColorLight,
  textColorDark,
  errorColor,
  submitGreen,
  submitGreenHover,
} from "../styles/_colors.scss";
import { width } from "../styles/_styles.scss";

export const TextFieldSX = (error) => ({
  borderRadius: "1rem",
  width: width,

  "& .MuiOutlinedInput-root": {
    // normal state
    "& fieldset": {
      borderColor: error ? errorColor : theme,
    },

    // hover state
    "&:hover fieldset": {
      borderColor: error ? errorColor : theme,
    },

    // focused state
    "&.Mui-focused fieldset": {
      borderColor: error ? errorColor : theme,
    },
  },
});

export const InputLabelProps = (isRequired) => ({
  sx: {
    color: textColorLight,
    // change focus color
    "&.Mui-focused": {
      color: theme,
    },
    // choose filled
    "&.MuiFormLabel-filled": {
      color: theme,
    },
  },
  required: isRequired,
});

export const SelectSX = {
  width: width,
  ":before": { borderBottomColor: theme },
  ":after": { borderBottomColor: theme },
  ":hover:not(.Mui-disabled):before": { borderBottomColor: theme },
  select: {
    color: textColorDark,
  },
};

export const SelectLabelProps = {
  sx: {
    color: textColorLight,
    // change focus color
    "&.Mui-focused": {
      color: theme,
    },
    // choose filled
    "&.MuiFormLabel-filled": {
      color: theme,
    },
  },
};

export const ButtonSX = {
  borderRadius: "1rem",
  backgroundColor: submitGreen,

  "&:hover": {
    backgroundColor: submitGreenHover,

    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: submitGreen,
    },
  },

  // focus
  "&:focus": {
    outline: "none",
  },
};
