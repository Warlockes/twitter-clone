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
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsUsersLoading,
  selectUsersItems,
} from "../../store/ducks/users/selectors";
import { fetchUsers } from "../../store/ducks/users/actionCreators";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import styles from "./Users.module.scss";
import { Link } from "react-router-dom";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersItems);
  const isLoadingUsers = useSelector(selectIsUsersLoading);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Paper className={styles.rightSideBlock}>
      <Paper className={styles.rightSideBlockHeader} variant="outlined">
        <Typography component="b">Кого читать</Typography>
      </Paper>
      {isLoadingUsers ? (
        <div className={styles.rightSideTagsLoader}>
          <CircularProgress />
        </div>
      ) : (
        <List>
          {users.map(({ _id, username, fullname }) => (
            <Link to={`/user/${_id}`}>
              <ListItem key={_id} className={styles.rightSideBlockItem}>
                <ListItemAvatar>
                  <Avatar alt={fullname} src="Ссылка на аватар" />
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
            </Link>
          ))}
          <Divider component="li" />
        </List>
      )}
    </Paper>
  );
};
