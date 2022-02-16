import { RootState } from "../../store";
import { Tweet } from "../tweets/contracts/state";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweetState = (state: RootState): TweetState => state.tweet;

export const selectTweetData = (state: RootState): Tweet | undefined =>
  selectTweetState(state).data;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweetState(state).loadingState;
