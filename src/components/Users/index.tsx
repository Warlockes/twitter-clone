import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersItems } from "../../store/ducks/users/selectors";
import { fetchUsers } from "../../store/ducks/users/actionCreators";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import styles from "./Users.module.scss";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersItems);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <Paper className={styles["rightSideBlockHeader"]} variant="outlined">
        <Typography component="b">Кого читать</Typography>
      </Paper>
      <List>
        {users.map(({ _id, username, fullname }) => (
          <ListItem key={_id} className={styles["rightSideBlockItem"]}>
            <ListItemAvatar>
              <Avatar
                alt={username}
                src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=601&q=80"
              />
            </ListItemAvatar>
            <ListItemText
              primary={fullname}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  @{username}
                </Typography>
              }
            />
            <Button color="primary">
              <PersonAddIcon />
            </Button>
          </ListItem>
        ))}
        <Divider component="li" />
      </List>
    </>
  );
};
