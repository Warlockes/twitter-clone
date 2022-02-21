import React from "react";
import { InputAdornment, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import { SearchTextField } from "../SearchTextField";
import { Tags } from "../Tags";
import { Users } from "../Users";
import styles from "./RightSide.module.scss";

export const RightSide = (): React.ReactElement => {
  return (
    <div className={styles["rightSide"]}>
      <SearchTextField
        variant="outlined"
        placeholder="Поиск в Твиттере"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Paper className={styles["rightSideBlock"]}>
        <Tags />
      </Paper>
      <Paper className={styles["rightSideBlock"]}>
        <Users />
      </Paper>
    </div>
  );
};
