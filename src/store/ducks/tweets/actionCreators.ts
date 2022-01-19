import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/state";

export enum TweetsActionType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
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

export const setTweets = (payload: TweetsState["items"]): ISetTweetsAction => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
  type: TweetsActionType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): ISetTweetsLoadingState => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload,
});

export type TweetActions =
  | ISetTweetsAction
  | ISetTweetsLoadingState
  | IFetchTweetsAction;
