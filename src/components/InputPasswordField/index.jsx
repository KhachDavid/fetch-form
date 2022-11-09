import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";
import { TextFieldSX, InputLabelProps } from "../../constants/style";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./index.scss";

const InputPasswordField = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    // create a text field that takes in a password
    // and sets the password state
    <TextField
      value={props.password}
      onChange={(e) => props.setPassword(e.target.value)}
      label={props.isConfirm ? "Confirm Password" : "Password"}
      variant="outlined"
      type={showPassword ? "text" : "password"}
      className={props.className}
      InputLabelProps={InputLabelProps(props.isRequired)}
      InputProps={{
        endAdornment: (
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
        ),
      }}
      sx={TextFieldSX(props.error && !isFocused)}
      helperText={props.error && !isFocused ? props.helperText : ""}
      error={props.error && !isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

InputPasswordField.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  isConfirm: PropTypes.bool,
  className: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
};

InputPasswordField.defaultProps = {
  className: "Landing-Password",
  isConfirm: false,
  helperText: "",
  error: false,
  isRequired: true,
};

export default InputPasswordField;
