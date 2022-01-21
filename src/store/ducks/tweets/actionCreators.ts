import {
  ISetTweetsAction,
  TweetsActionType,
  IFetchTweetsAction,
  ISetTweetsLoadingState,
  IAddTweetsAction,
  IFetchAddTweetAction,
} from "./contracts/actionTypes";
import { LoadingState, Tweet, TweetsState } from "./contracts/state";

export const setTweets = (payload: TweetsState["items"]): ISetTweetsAction => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const addTweet = (payload: Tweet): IAddTweetsAction => ({
  type: TweetsActionType.ADD_TWEET,
  payload,
});

export const fetchAddTweet = (payload: string): IFetchAddTweetAction => ({
  type: TweetsActionType.FETCH_ADD_TWEET,
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
