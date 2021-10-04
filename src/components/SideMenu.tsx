import { IconButton, Typography, Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PersonOutlineOutlined";
import React from "react";
import { useHomeStyles } from "../pages/Home";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <>
      <ul className={classes.sideMenuList}>
        <li>
          <IconButton aria-label="delete" color="primary">
            <TwitterIcon className={classes.logo} />
          </IconButton>
        </li>
        <li className={classes.sideMenuListItem}>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Поиск
          </Typography>
        </li>
        <li className={classes.sideMenuListItem}>
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Уведомления
          </Typography>
        </li>
        <li className={classes.sideMenuListItem}>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Сообщения
          </Typography>
        </li>
        <li className={classes.sideMenuListItem}>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Закладки
          </Typography>
        </li>
        <li className={classes.sideMenuListItem}>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Список
          </Typography>
        </li>
        <li className={classes.sideMenuListItem}>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Профиль
          </Typography>
        </li>
      </ul>
      <Button
        className={classes.sideMenuButton}
        variant="contained"
        color="primary"
        fullWidth
      >
        Твитнуть
      </Button>
    </>
  );
};
