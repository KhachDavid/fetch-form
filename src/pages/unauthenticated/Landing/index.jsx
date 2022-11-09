import "./index.scss";
import React, { useEffect, lazy } from "react";
import { theme } from "../../../styles/_colors.scss";
import { fontMain } from "../../../styles/_fonts.scss";
// Lazy load the form components
const [
  InputNameField,
  InputEmailField,
  InputPasswordField,
  InputOccupationField,
  InputStateField,
  SubmitButton,
] = [
  import("../../../components/InputNameField"),
  import("../../../components/InputEmailField"),
  import("../../../components/InputPasswordField"),
  import("../../../components/InputOccupationField"),
  import("../../../components/InputStateField"),
  import("../../../components/SubmitButton"),
].map((component) => lazy(() => component));

import { getForm } from "../../../api/main.api";
import Loading from "../../../components/Loading";
import { Snackbar, Typography, Alert } from "@mui/material";

const Landing = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [occupationName, setOccupationName] = React.useState("");
  const [stateName, setStateName] = React.useState("");
  const [stateList, setStateList] = React.useState([]);
  const [occupationList, setOccupationList] = React.useState([]);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isFailure, setFailure] = React.useState(false);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputs = document.getElementsByTagName("input");
      const selects = document.getElementsByTagName("select");
      const elements = [...inputs, ...selects];
      for (let i = 0; i < elements.length; i++) {
        if (document.activeElement === elements[i]) {
          if (i + 1 < elements.length) {
            elements[i + 1].focus();
          }
          break;
        }
      }
    }

    return;
  };

  // add a use effect to make an api call to get the list of states
  // and set the stateName to the first state in the list
  useEffect(() => {
    async function fetchData() {
      const response = await getForm();
      if (response.status === 200) {
        // success
        setStateName(response.data.states[0].name);
        setOccupationName(response.data.occupations[0]);
        setStateList(response.data.states);
        setOccupationList(response.data.occupations);
        return;
      }
    }
    fetchData();

    // autofocus on the first input field
    document.getElementsByTagName("input")[0].focus();

    // add a listener when the user presses the enter key or return key
    // to focus on the next input or select field
    document.addEventListener("keydown", (event) => {
      handleEnter(event);
    });

    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  const isPasswordValid = () => {
    // check if the password is valid
    // a valid password must be at least 8 characters long
    // and must contain at least one uppercase letter, one lowercase letter, and one number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="Header">
        <Typography
          variant="h2"
          component="h1"
          color={theme}
          fontFamily={fontMain}
        >
          Fetch Rewards
        </Typography>
      </div>
      <div className="Landing">
        <div className="Landing-Header">
          <Typography variant="h4" component="h1">
            Create a new account
          </Typography>
          <Typography variant="subtitle1" component="h2">
            It's free and only takes a minute
          </Typography>
        </div>
        <InputNameField fullName={fullName} setFullName={setFullName} />
        <InputEmailField
          email={email}
          setEmail={setEmail}
          error={email.length > 0 && !email.includes("@")}
          helperText="Invalid email"
        />
        <InputPasswordField
          password={password}
          setPassword={setPassword}
          error={password.length > 0 && !isPasswordValid()}
          helperText="Password must be at least 8 characters long and contain at least one number"
        />
        <InputPasswordField
          password={confirmPassword}
          setPassword={setConfirmPassword}
          isConfirm
          error={password !== confirmPassword && confirmPassword.length !== 0}
          helperText="Passwords do not match"
        />
        <InputOccupationField
          occupationName={occupationName}
          setOccupationName={setOccupationName}
          occupationList={occupationList}
        />
        <InputStateField
          stateName={stateName}
          setStateName={setStateName}
          stateList={stateList}
        />
        <SubmitButton
          fullName={fullName}
          email={email}
          password={password}
          stateName={stateName}
          occupationName={occupationName}
          setLoading={setLoading}
          setSuccess={setSuccess}
          setFailure={setFailure}
          isDisabled={
            fullName === "" ||
            email === "" ||
            !email.includes("@") ||
            !isPasswordValid() ||
            password === "" ||
            confirmPassword === "" ||
            password !== confirmPassword
          }
        />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isSuccess}
      >
        <Alert severity="success">Account created successfully!</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isFailure}
      >
        <Alert severity="error">Account creation failed!</Alert>
      </Snackbar>
    </>
  );
};

export default Landing;
