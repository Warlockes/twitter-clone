import React from "react";
import { Box, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import { SearchTextField } from "../SearchTextField";
import { Tags } from "../Tags";
import { Users } from "../Users";
import styles from "./RightSide.module.scss";

export const RightSide = (): React.ReactElement => {
  return (
    <Box className={styles["rightSide"]}>
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
      <Tags />
      <Users />
    </Box>
  );
};
