import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Avatar, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ArrowBottomIcon from "@material-ui/icons/KeyboardArrowDown";

import { selectUserData } from "../../store/ducks/user/selectors";
import { signOut } from "../../store/ducks/user/actionCreators";
import styles from "./UserSideProfile.module.scss";

export const UserSideProfile: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenPopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopup = (): void => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    window.localStorage.removeItem("twitter-clone_token");
    dispatch(signOut());
  };

  if (!userData) {
    return null;
  }

  return (
    <>
      <div onClick={handleOpenPopup} className={styles.sideProfile}>
        <Avatar alt={userData.fullname} src={"Ссылка на аватар"} />
        <div className={styles.sideProfileInfo}>
          <Typography className={styles.fullname}>
            {userData.fullname}
          </Typography>
          <Typography className={styles.username}>
            @{userData.username}
          </Typography>
        </div>
        <ArrowBottomIcon />
      </div>
      <Menu
        classes={{
          paper: styles.profileMenu,
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClosePopup}
        keepMounted
      >
        <Link to={`/user/${userData._id}`}>
          <MenuItem onClick={handleClosePopup}>Мой профиль</MenuItem>
        </Link>
        <MenuItem onClick={handleSignOut}>Выйти</MenuItem>
      </Menu>
    </>
  );
};
