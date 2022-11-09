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

    if (response.status === 201) {
      // success
      props.setLoading(false);
      props.setSuccess(true);
      // in two seconds, set success to false
      setTimeout(() => {
        props.setSuccess(false);
      }, 2000);
    } else {
      // error
      props.setLoading(false);
      props.setFailure(true);
      // in two seconds, set failure to false
      setTimeout(() => {
        props.setFailure(false);
      }
      , 2000);
    }
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
  setSuccess: PropTypes.func.isRequired,
  setFailure: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
  isDisabled: false,
};

export default SubmitButton;
