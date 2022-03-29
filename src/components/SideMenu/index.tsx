import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import CreateIcon from "@material-ui/icons/Create";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { ModalBlock } from "../ModalBlock";
import { AddTweetForm } from "../AddTweetForm";
import styles from "./SideMenu.module.scss";

export const SideMenu: React.FC = (): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const handleClickOpenAddTweet = (): void => {
    setVisibleAddTweet(true);
  };

  const onCloseAddTweet = (): void => {
    setVisibleAddTweet(false);
  };

  return (
    <ul className={styles["sideMenuList"]}>
      <li className={styles["sideMenuListItem"]}>
        <Link to="/home">
          <IconButton className={styles["logo"]} aria-label="" color="primary">
            <TwitterIcon className={styles["logoIcon"]} />
          </IconButton>
        </Link>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <div>
          <SearchIcon className={styles["sideMenuListItemIcon"]} />
          <Hidden smDown>
            <Typography
              className={styles["sideMenuListItemLabel"]}
              variant="h6"
            >
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <div>
          <NotificationIcon className={styles["sideMenuListItemIcon"]} />
          <Hidden smDown>
            <Typography
              className={styles["sideMenuListItemLabel"]}
              variant="h6"
            >
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <div>
          <MessageIcon className={styles["sideMenuListItemIcon"]} />

          <Hidden smDown>
            <Typography
              className={styles["sideMenuListItemLabel"]}
              variant="h6"
            >
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <div>
          <BookmarkIcon className={styles["sideMenuListItemIcon"]} />

          <Hidden smDown>
            <Typography
              className={styles["sideMenuListItemLabel"]}
              variant="h6"
            >
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <div>
          <ListIcon className={styles["sideMenuListItemIcon"]} />

          <Hidden smDown>
            <Typography
              className={styles["sideMenuListItemLabel"]}
              variant="h6"
            >
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <Link to="/user" className={styles["link"]}>
          <div>
            <UserIcon className={styles["sideMenuListItemIcon"]} />

            <Hidden smDown>
              <Typography
                className={styles["sideMenuListItemLabel"]}
                variant="h6"
              >
                Профиль
              </Typography>
            </Hidden>
          </div>
        </Link>
      </li>
      <li className={styles["sideMenuListItem"]}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={styles["sideMenuTweetButton"]}
          variant="contained"
          color="primary"
          fullWidth
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ minWidth: 550 }}>
            <AddTweetForm maxRows={15} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};
