import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

import {
  fetchTweetData,
  setTweetData,
} from "../../../../store/ducks/tweet/actionCreators";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../../store/ducks/tweet/selectors";
import { useFullTweetStyles } from "./FullTweet";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const classes = useFullTweetStyles();
  const tweetData = useSelector(selectTweetData);
  const isLoadingData = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const { id } = params;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoadingData) {
    return (
      <div className={classes.tweetLoader}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    const { text, user } = tweetData;
    const { fullname, username, avatarUrl } = user;

    return (
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={avatarUrl}></Avatar>}
          title={<b>{fullname}</b>}
          subheader={`@${username}`}
        />
        <CardContent className={classes.textWrapper}>
          <Typography className={classes.tweetText} variant="h5">
            {text}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionButtonRow}>
          <IconButton aria-label="">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share">
            <RepostIcon />
          </IconButton>
          <IconButton aria-label="">
            <LikeIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }

  return null;
};
