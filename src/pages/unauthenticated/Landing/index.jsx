import "./index.scss";
import React, { useEffect } from "react";
import InputEmailField from "../../../components/InputEmailField";
import InputNameField from "../../../components/InputNameField";
import InputOccupationField from "../../../components/InputOccupationField";
import InputPasswordField from "../../../components/InputPasswordField";
import InputConfirmPasswordField from "../../../components/InputConfirmPasswordField";
import InputStateField from "../../../components/InputStateField";
import { getForm, postForm } from "../../../api/main.api";
import { createBrowserHistory } from "history";

const Landing = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [occupationName, setOccupationName] = React.useState("");
  const [stateName, setStateName] = React.useState("");
  const [stateList, setStateList] = React.useState([]);
  const [occupationList, setOccupationList] = React.useState([]);

  const history = createBrowserHistory();

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
      // failure
      history.push("/error");
    }
    fetchData();
  }, []);

  // route to the error page if the api call fails

  return (
    <div className="Landing">
      <InputNameField fullName={fullName} setFullName={setFullName} />
      <InputEmailField email={email} setEmail={setEmail} />
      <InputPasswordField password={password} setPassword={setPassword} />
      <InputConfirmPasswordField
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
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
    </div>
  );
};

export default Landing;
