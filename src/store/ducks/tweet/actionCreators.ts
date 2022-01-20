import { Tweet } from "../tweets/contracts/state";
import {
  ISetTweetDataAction,
  TweetDataActionType,
  IFetchTweetDataAction,
  ISetTweetDataLoadingState,
} from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

export const setTweetData = (payload: Tweet): ISetTweetDataAction => ({
  type: TweetDataActionType.SET_TWEET_DATA,
  payload,
});

export const fetchTweetData = (payload: string): IFetchTweetDataAction => ({
  type: TweetDataActionType.FETCH_TWEET_DATA,
  payload,
});

export const setTweetDataLoadingState = (
  payload: LoadingState
): ISetTweetDataLoadingState => ({
  type: TweetDataActionType.SET_LOADING_STATE,
  payload,
});
