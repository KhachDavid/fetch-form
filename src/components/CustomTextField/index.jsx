import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";
import { TextFieldSX, InputLabelProps } from "../../constants/style";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./index.scss";
import { useDispatch } from "react-redux";
import { TEXTFIELD_TYPES, TEXTFIELD_VARIANTS } from "./constants";

/**
 *
 * @param {*} props
 * @returns
 */
const CustomTextField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  const endAdornment = (
    <InputAdornment position="end">
      {" "}
      {showPassword ? (
        <Visibility
          className="Cursor-Pointer"
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <VisibilityOff
          className="Cursor-Pointer"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </InputAdornment>
  );

  return (
    <TextField
      className={props.className}
      label={props.label}
      error={props.error && !isFocused}
      helperText={props.error && !isFocused ? props.helperText : ""}
      InputLabelProps={InputLabelProps(props.isRequired)}
      InputProps={
        props.type === TEXTFIELD_TYPES.PASSWORD
          ? {
              endAdornment: endAdornment,
            }
          : null
      }
      onChange={(e) => dispatch(props.setValue(e.target.value))}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      sx={TextFieldSX(props.error && !isFocused)}
      type={
        props.type === TEXTFIELD_TYPES.PASSWORD
          ? showPassword
            ? TEXTFIELD_TYPES.TEXT
            : TEXTFIELD_TYPES.PASSWORD
          : TEXTFIELD_TYPES.TEXT
      }
      value={props.value}
      variant={TEXTFIELD_VARIANTS.OUTLINED}
    />
  );
};

CustomTextField.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isRequired: PropTypes.bool,
  type: PropTypes.string,
};

CustomTextField.defaultProps = {
  error: false,
  helperText: "",
  isRequired: true,
  type: TEXTFIELD_TYPES.TEXT,
};

export default CustomTextField;
