/**
 * TODO: Write a description of the component
 */

import React, { useEffect, lazy } from "react";

// Lazy load the form components
const [CustomTextField, CustomSelect, Loading] = [
  import("../../../components/CustomTextField"),
  import("../../../components/CustomSelect"),
  import("../../../components/Loading"),
].map((component) => lazy(() => component));

// style imports
import { Typography, FormGroup, Button } from "@mui/material";
import { theme } from "../../../styles/_colors.scss";
import { fontMain } from "../../../styles/_fonts.scss";
import "./index.scss";

// constant imports
import { SELECT_INPUT, TEXT_INPUT } from "../../../constants";
import { SubmitButtonSX } from "../../../constants/style";
import { getFormRecipe, renderAlerts } from "./constants";

// redux imports
import {
  createAccountRequest,
  getOptionsRequest,
} from "../../../store/actions/form.action.js";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../languages";

/**
 *
 * @returns {JSX.Element} Landing page
 */
const LandingPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.status.isWaiting);
  const currentLanguage = useSelector((state) => state.language.language);

  useEffect(() => {
    // Get the options for the select input
    dispatch(getOptionsRequest());

    // autofocus on the first input field
    document.getElementsByTagName("input")[0].focus();
  }, []);

  /**
   *
   * @returns {JSX.Element} Header for the form
   */
  const getFormHeader = () => {
    return (
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
    );
  };

  // get the form recipe from the constants file
  const formRecipe = getFormRecipe();

  return (
    <React.Fragment>
      {renderAlerts()}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {getFormHeader()}
          {/** Form elements are defined in ./constants.js */}
          <FormGroup className="Form">
            {formRecipe.map((recipe) => {
              switch (recipe.formType) {
                case TEXT_INPUT:
                  return (
                    <CustomTextField
                      key={recipe.className}
                      className={recipe.className}
                      label={recipe.label}
                      type={recipe.type}
                      value={recipe.value}
                      setValue={recipe.setValue}
                      error={recipe.error}
                      helperText={recipe.helperText}
                    />
                  );
                case SELECT_INPUT:
                  return (
                    <CustomSelect
                      key={recipe.className}
                      className={recipe.className}
                      label={recipe.label}
                      name={recipe.name}
                      options={recipe.options}
                      value={recipe.value}
                      setValue={recipe.setValue}
                    />
                  );
                default:
                  return null;
              }
            })}

            {/** Note: this is the only button component in the codebase
             * Make this a reusable component if another button is needed
             */}
            <Button
              variant="contained"
              type="submit"
              sx={SubmitButtonSX}
              onClick={() => dispatch(createAccountRequest())}
              disabled={
                // checks if at least one of the fields is empty or invalid
                formRecipe.some((recipe) => recipe.error) ||
                formRecipe.some((recipe) => recipe.value === "")
              }
            >
              {languages[currentLanguage].SIGN_UP_LABEL}
            </Button>
          </FormGroup>
        </>
      )}
    </React.Fragment>
  );
};

export default LandingPage;
