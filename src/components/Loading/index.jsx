import React, { useEffect, useState } from "react";

// material ui imports
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// style imports
import { LoadingSX } from "../../constants/style";
import { textColorLight } from "../../styles/_colors.scss";

/**
 * Custom circular progress bar that shows the percentage
 * @param {current progress} props.value - the value of the progress bar
 * @returns {JSX.Element} Circular progress bar
 */
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box sx={LoadingSX}>
        <Typography variant="caption" component="div" color={textColorLight}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

/**
 * This is a circular progress bar that is used to show the user that the app is
 * loading
 * @returns {JSX.Element} Loading component
 */
export default function Loading() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // the timer is set to 800ms to make the loading bar look more natural
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
