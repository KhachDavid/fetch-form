import React from "react";
import PropTypes from "prop-types";

// mui imports
import { TextField, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// style imports
import { TextFieldSX, InputLabelProps } from "../../constants/style";
import "./index.scss";

// redux imports
import { useDispatch } from "react-redux";

// constant imports
import { TEXTFIELD_TYPES, TEXTFIELD_VARIANTS } from "./constants";

/**
 * A custom text field component that can be reused across the app
 * Accepts a variety of types and variants that can be found in the ./constants.js
 * @param {object} props - are defined at the bottom of
 *                         the file with PropTypes and default props
 * @returns a text field component with the given type and variant
 * @example
   <CustomTextField
    className="TextField-RecipeName"
    name="recipeName"
    id="recipeName"
    label="Recipe Name"
    type={TEXTFIELD_TYPES.TEXT}
    value="recipeName"
    setValue="setRecipeName"
    error={recipe.error}
    helperText={recipe.helperText}
   />
 * @see https://mui.com/material-ui/api/text-field/
 */
const CustomTextField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  // visibility icon for password fields
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
    // there is important to the isFocus state because it is used to determine
    // whether or not to show the error message
    // if the text field is focused, then the error message should not be shown
    // because the user is still typing
    <TextField
      className={props.className}
      label={props.label}
      error={props.error && !isFocused}
      helperText={props.error && !isFocused ? props.helperText : ""}
      id={props.id}
      InputLabelProps={InputLabelProps(props.isRequired)}
      InputProps={
        props.type === TEXTFIELD_TYPES.PASSWORD
          ? {
              endAdornment: endAdornment,
            }
          : null
      }
      name={props.name}
      onChange={(e) => dispatch(props.setValue(e.target.value))}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      // customize styling based on error and focus
      sx={TextFieldSX(props.error && !isFocused)}
      type={
        // if the type is password, then show the password if showPassword is true
        // otherwise, show the password as a password
        // otherwise, show the type as text/email etc.
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
