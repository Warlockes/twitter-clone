import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useHomeStyles } from "../pages/Home/theme";
import { useHistory } from "react-router";

export const BackButton: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();
  const history = useHistory();

  const handleClickButton = (): void => {
    history.goBack();
  };

  return (
    <IconButton
      onClick={handleClickButton}
      className={classes.tweetsHeaderBackButton}
      color="primary"
    >
      <ArrowBackIcon />
    </IconButton>
  );
};
