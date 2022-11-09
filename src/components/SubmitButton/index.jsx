import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { postForm } from "../../api/main.api";
import { ButtonSX } from "../../constants/style";

const SubmitButton = (props) => {
  const data = {
    name: props.fullName,
    email: props.email,
    password: props.password,
    occupation: props.occupationName,
    state: props.stateName,
  };

  const handleSubmit = async (data) => {
    props.setLoading(true);
    const response = await postForm(data);
    props.setLoading(false);
    console.log(response);
  };

  return (
    <Button
      variant="contained"
      type="submit"
      onClick={() => handleSubmit(data)}
      disabled={props.isDisabled}
      sx={ButtonSX}
    >
      Sign Up
    </Button>
  );
};

SubmitButton.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  occupationName: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
  isDisabled: false,
};

export default SubmitButton;
