import React from "react";
import PropTypes from "prop-types";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";

const InputOccupationField = (props) => {
  return (
    <FormControl>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Occupation
      </InputLabel>
      <NativeSelect
        value={props.occupationName}
        inputProps={{
          name: "occupation",
          id: "uncontrolled-native",
        }}
        onChange={(e) => props.setOccupationName(e.target.value)}
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
};

export default InputOccupationField;
