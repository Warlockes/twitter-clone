import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { Tweet } from "../../../components/Tweet";
import { fetchTweetData } from "../../../store/ducks/tweet/actionCreators";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../store/ducks/tweet/selectors";
import { useHomeStyles } from "../theme";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const tweetData = useSelector(selectTweetData);
  const isLoadingData = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const { id } = params;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
  }, [dispatch, id]);

  if (!tweetData) {
    return null;
  }

  return isLoadingData ? (
    <div className={classes.tweetLoader}>
      <CircularProgress />
    </div>
  ) : (
    <Tweet {...tweetData} />
  );
};
