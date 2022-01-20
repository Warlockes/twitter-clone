import { Action } from "redux";
import { Tweet } from "../../tweets/contracts/state";
import { LoadingState } from "./state";

export enum TweetDataActionType {
  SET_TWEET_DATA = "tweet/SET_DATA",
  FETCH_TWEET_DATA = "tweet/FETCH_DATA",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export interface ISetTweetDataAction extends Action<TweetDataActionType> {
  type: TweetDataActionType.SET_TWEET_DATA;
  payload: Tweet;
}

export interface IFetchTweetDataAction extends Action<TweetDataActionType> {
  type: TweetDataActionType.FETCH_TWEET_DATA;
  payload: string;
}

export interface ISetTweetDataLoadingState extends Action<TweetDataActionType> {
  type: TweetDataActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export type TweetDataActions =
  | ISetTweetDataAction
  | IFetchTweetDataAction
  | ISetTweetDataLoadingState;
