import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { Tweet } from "../tweets/contracts/state";
import { TweetState } from "./contracts/state";

export const selectTweetState = (state: RootState): TweetState => state.tweet;

export const selectTweetData = (state: RootState): Tweet | undefined =>
  selectTweetState(state).data;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADED;

export const selectLoadingState = (state: RootState): LoadingStatus =>
  selectTweetState(state).loadingState;
