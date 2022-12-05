import React from "react";
import PropTypes from "prop-types";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";
import { SelectLabelProps, SelectSX } from "../../constants/style";
import { useDispatch } from "react-redux";
import { SELECT_VARIANTS } from "./constants";

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
