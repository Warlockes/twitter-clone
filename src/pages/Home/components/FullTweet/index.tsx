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
import format from "date-fns/format";
import ruLang from "date-fns/locale/ru";

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
import styles from "./FullTweet.module.scss";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
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
      <div className={styles["tweetLoader"]}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    const { text, user, createdAt } = tweetData;
    const { fullname, username } = user;

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" alt={fullname} src="Ссылка на аватар" />
          }
          title={<b>{fullname}</b>}
          subheader={`@${username}`}
        />
        <CardContent className={styles["textWrapper"]}>
          <Typography className={styles["tweetText"]} variant="h5">
            {text}
          </Typography>
          <Typography>
            <span className={styles["tweetDate"]}>
              {format(new Date(createdAt), "H:mm")} ·{" "}
            </span>
            <span className={styles["tweetDate"]}>
              {format(new Date(createdAt), "dd MMM yyyy г.", {
                locale: ruLang,
              })}
            </span>
          </Typography>
        </CardContent>
        <CardActions className={styles["actionButtonRow"]}>
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
