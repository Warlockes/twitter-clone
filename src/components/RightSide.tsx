import React from "react";

import { InputAdornment, Paper, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import Button from "@material-ui/core/Button/Button";

import { useHomeStyles } from "../pages/Home/theme";
import { SearchTextField } from "./SearchTextField";
import { Tags } from "./Tags";

export const RightSide = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.rightSide}>
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
      <Paper className={classes.rightSideBlock}>
        <Tags />
      </Paper>
      <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader} variant="outlined">
          <Typography component="b">Кого читать</Typography>
        </Paper>
        <List>
          <ListItem className={classes.rightSideBlockItem}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=601&q=80"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Dock Of Shame"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  @FavDockOfShame
                </Typography>
              }
            />
            <Button color="primary">
              <PersonAddIcon />
            </Button>
          </ListItem>
          <Divider component="li" />
        </List>
      </Paper>
    </div>
  );
};
