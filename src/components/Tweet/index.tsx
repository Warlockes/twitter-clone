import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import {
  Avatar,
  IconButton,
  Paper,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { formatDate } from "../../utils/formatDate";
import styles from "./Tweet.module.scss";

interface TweetProps {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  createdAt,
  user,
}: TweetProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Link className={styles["tweetWrapper"]} to={`/home/tweet/${_id}`}>
      <Paper
        className={classNames(styles["tweet"], styles["tweetsHeader"])}
        variant="outlined"
      >
        <Avatar
          className={styles["tweetAvatar"]}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <Box component="div">
          <Typography>
            <strong>{user.fullname}</strong>&nbsp;
            <span className={styles["tweetUserName"]}>@{user.username}</span>
            &nbsp;
            <span className={styles["tweetUserName"]}>·</span>&nbsp;
            <span className={styles["tweetUserName"]}>
              {formatDate(new Date(createdAt))}
            </span>
          </Typography>
          <Typography
            className={styles["tweetText"]}
            variant="body1"
            gutterBottom
          >
            {text}
          </Typography>
          <div className={styles["tweetFooter"]}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </Box>
        <div>
          <IconButton
            aria-label="more"
            id="menu-button"
            aria-controls={open ? "action-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="action-menu"
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            <MenuItem onClick={handleClose}>Удалить твит</MenuItem>
          </Menu>
        </div>
      </Paper>
    </Link>
  );
};
