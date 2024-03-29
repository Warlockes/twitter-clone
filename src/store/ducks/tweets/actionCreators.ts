import { LoadingStatus } from "../../types";
import {
  ISetTweetsAction,
  TweetsActionType,
  IFetchTweetsAction,
  ISetTweetsLoadingState,
  IAddTweetsAction,
  IFetchAddTweetAction,
  ISetAddFormState,
  IRemoveTweetAction,
} from "./contracts/actionTypes";
import { AddFormState, Tweet, TweetsState } from "./contracts/state";

export const setTweets = (payload: TweetsState["items"]): ISetTweetsAction => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const addTweet = (payload: Tweet): IAddTweetsAction => ({
  type: TweetsActionType.ADD_TWEET,
  payload,
});

export const fetchAddTweet = (payload: {
  text: string;
  images: string[];
}): IFetchAddTweetAction => ({
  type: TweetsActionType.FETCH_ADD_TWEET,
  payload,
});

export const removeTweet = (payload: string): IRemoveTweetAction => ({
  type: TweetsActionType.REMOVE_TWEET,
  payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
  type: TweetsActionType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (
  payload: LoadingStatus
): ISetTweetsLoadingState => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload,
});

export const setAddFormState = (payload: AddFormState): ISetAddFormState => ({
  type: TweetsActionType.SET_ADD_FORM_STATE,
  payload,
});
