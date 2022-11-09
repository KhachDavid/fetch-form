import React from "react";
import PropTypes from "prop-types";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";
import { SelectSX, SelectLabelProps } from "../../constants/style";

const InputStateField = (props) => {
  return (
    <FormControl className={props.className}>
      <InputLabel
        variant="standard"
        htmlFor="uncontrolled-native"
        sx={SelectLabelProps.sx}
      >
        State
      </InputLabel>
      <NativeSelect
        value={props.stateName}
        inputProps={{
          name: "state",
          id: "uncontrolled-native",
        }}
        onChange={(e) => props.setStateName(e.target.value)}
        sx={SelectSX}
      >
        {props.stateList.map((state) => (
          <option key={state.abbreviation} value={state.name}>
            {state.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

InputStateField.propTypes = {
  stateName: PropTypes.string.isRequired,
  setStateName: PropTypes.func.isRequired,
  stateList: PropTypes.array.isRequired,
  className: PropTypes.string,
};

InputStateField.defaultProps = {
  className: "Landing-State",
};

export default InputStateField;
