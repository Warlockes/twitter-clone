import { Action } from "redux";
import { TweetsState, LoadingState, Tweet } from "./state";

export enum TweetsActionType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
  FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
  ADD_TWEET = "tweets/ADD_TWEET",
}

export interface ISetTweetsAction extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS;
  payload: TweetsState["items"];
}

export interface IFetchTweetsAction extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS;
}

export interface ISetTweetsLoadingState extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface IFetchAddTweetAction extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_ADD_TWEET;
  payload: string;
}

export interface IAddTweetsAction extends Action<TweetsActionType> {
  type: TweetsActionType.ADD_TWEET;
  payload: Tweet;
}

export type TweetsActions =
  | ISetTweetsAction
  | ISetTweetsLoadingState
  | IFetchTweetsAction
  | IFetchAddTweetAction
  | IAddTweetsAction;
