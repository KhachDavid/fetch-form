import React from "react";

// mui imports
import { Button, Typography } from "@mui/material";

// style imports
import { theme } from "../../styles/_colors.scss";
import { fontMain } from "../../styles/_fonts.scss";
import "./index.scss";
import { SecondaryButtonSX } from "../../constants/style";

// redux imports
import { useDispatch } from "react-redux";
import { setLanguage } from "../../store/actions/language.action";

// constant imports
import { languageList } from "../../languages/constants";

/**
 * A footer component that can be reused across the app
 * sticky to the bottom of the page
 */
const Footer = () => {
  const dispatch = useDispatch();

  // get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div>
        {languageList.map((language) => (
          <Button
            key={language}
            sx={SecondaryButtonSX}
            onClick={() => dispatch(setLanguage(language))}
            color="primary"
          >
            {language}
          </Button>
        ))}
      </div>
      <Typography
        variant="body2"
        component="p"
        color={theme}
        fontFamily={fontMain}
      >
        © {currentYear} Fetch Rewards
      </Typography>
    </div>
  );
};

export default Footer;
