import React from "react";
import PropTypes from "prop-types";

// mui imports
import { NativeSelect, FormControl, InputLabel } from "@mui/material";

// style imports
import { SelectLabelProps, SelectSX } from "../../constants/style";

// redux imports
import { useDispatch } from "react-redux";

// constant imports
import { SELECT_VARIANTS } from "./constants";

/**
 * A custom select component that can be reused across the app
 * @param {object} props - are defined at the bottom of
 *                        the file with PropTypes
 * @returns a select component with the given options and value
 * @example
   <CustomSelect
    className="CustomSelect"
    label="Select a value"
    name="select"
    options={["option1", "option2", "option3"]}
    value={value}
    setValue={setValue}
   />
 * @see https://mui.com/material-ui/api/native-select/
 */
const CustomSelect = (props) => {
  const dispatch = useDispatch();

  return (
    <FormControl className={props.className}>
      <InputLabel
        htmlFor="uncontrolled-native"
        sx={SelectLabelProps.sx}
        variant={SELECT_VARIANTS.STANDARD}
      >
        {props.label}
      </InputLabel>
      <NativeSelect
        inputProps={{
          // name is necessary because the value is set by the name
          // it is the only use case for the name prop
          name: props.name,
          id: "uncontrolled-native",
        }}
        onChange={(e) => dispatch(props.setValue(e.target.value))}
        sx={SelectSX}
        value={props.value}
      >
        {props.options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CustomSelect;
