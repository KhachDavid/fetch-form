import React from "react";
import PropTypes from "prop-types";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";

const InputStateField = (props) => {
  return (
    <FormControl >
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        State
      </InputLabel>
      <NativeSelect
        value={props.stateName}
        inputProps={{
          name: 'state',
          id: 'uncontrolled-native',
        }}
        onChange={(e) => props.setStateName(e.target.value)}
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
};

export default InputStateField;
