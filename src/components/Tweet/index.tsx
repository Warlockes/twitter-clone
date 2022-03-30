import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { ImageList } from "../ImageList";
import { removeTweet } from "../../store/ducks/tweets/actionCreators";
import styles from "./Tweet.module.scss";

interface TweetProps {
  _id: string;
  text: string;
  images?: string[];
  createdAt: string;
  user: {
    fullname: string;
    username: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  images,
  createdAt,
  user,
}: TweetProps): React.ReactElement => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClickDeleteTweet = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    if (window.confirm("Действительно хотите удалить твит?")) {
      dispatch(removeTweet(_id));
    }

    handleClose(event);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleClickTweet = (): void => {
    push(`/home/tweet/${_id}`);
  };

  return (
    <Box
      component="div"
      className={styles.tweetWrapper}
      onClick={handleClickTweet}
    >
      <Paper
        className={classNames(styles.tweet, styles.tweetsHeader)}
        variant="outlined"
      >
        <Avatar
          className={styles.tweetAvatar}
          alt={user.fullname}
          src="Ссылка на аватар"
        />
        <Box component="div" className={styles.tweeetBody}>
          <Typography>
            <strong>{user.fullname}</strong>&nbsp;
            <span className={styles.tweetUserName}>@{user.username}</span>
            &nbsp;
            <span className={styles.tweetUserName}>·</span>&nbsp;
            <span className={styles.tweetUserName}>
              {formatDate(new Date(createdAt))}
            </span>
          </Typography>
          <Typography className={styles.tweetText} variant="body1" gutterBottom>
            {text}
          </Typography>
          {images && <ImageList images={images} />}
          <div className={styles.tweetFooter}>
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
        <Box component="div" id="actions-button" className={styles.tweetMenu}>
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
            classes={{
              paper: styles.menu,
            }}
            id="action-menu"
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            <MenuItem
              onClick={handleClickDeleteTweet}
              className={styles.menuDeleteButton}
            >
              Удалить твит
            </MenuItem>
          </Menu>
        </Box>
      </Paper>
    </Box>
  );
};
