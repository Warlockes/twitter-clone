import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useHistory } from "react-router";
import styles from "./BackButton.module.scss";

export const BackButton: React.FC = () => {
  const history = useHistory();

  const handleClickButton = (): void => {
    history.goBack();
  };

  return (
    <IconButton
      onClick={handleClickButton}
      className={styles.tweetsHeaderBackButton}
      color="primary"
    >
      <ArrowBackIcon />
    </IconButton>
  );
};
