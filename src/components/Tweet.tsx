import React from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

import { useHomeStyles } from "../pages/Home";

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
  text: string;
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  user,
  text,
}: TweetProps): React.ReactElement => {
  return (
    <Paper
      className={classNames(classes.tweetsHeader, classes.tweet)}
      variant="outlined"
    >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватар пользователя ${user.fullname}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>{" "}
            <span className={classes.tweetUserName}>@{user.username}</span>
            <span className={classes.tweetUserName}> · </span>
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetButtonRow}>
            <div>
              <IconButton>
                <CommentIcon className={classes.tweetIcons} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon className={classes.tweetIcons} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon className={classes.tweetIcons} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon className={classes.tweetIcons} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
