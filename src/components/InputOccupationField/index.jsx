import React from "react";
import PropTypes from "prop-types";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";
import { SelectLabelProps, SelectSX } from "../../constants/style";

const InputOccupationField = (props) => {
  return (
    <FormControl className={props.className}>
      <InputLabel
        variant="standard"
        htmlFor="uncontrolled-native"
        sx={SelectLabelProps.sx}
      >
        Occupation
      </InputLabel>
      <NativeSelect
        value={props.occupationName}
        inputProps={{
          name: "occupation",
          id: "uncontrolled-native",
        }}
        onChange={(e) => props.setOccupationName(e.target.value)}
        sx={SelectSX}
      >
        {props.occupationList.map((occupation) => (
          <option key={occupation} value={occupation}>
            {occupation}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

InputOccupationField.propTypes = {
  occupationName: PropTypes.string.isRequired,
  setOccupationName: PropTypes.func.isRequired,
  occupationList: PropTypes.array.isRequired,
  className: PropTypes.string,
};

InputOccupationField.defaultProps = {
  className: "Landing-Occupation",
};

export default InputOccupationField;
