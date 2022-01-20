import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { Tweet } from "../../../components/Tweet";
import {
  fetchTweetData,
  setTweetData,
} from "../../../store/ducks/tweet/actionCreators";
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
    return <Tweet {...tweetData} />;
  }

  return null;
};
