import {
  ISetTweetsAction,
  TweetsActionType,
  IFetchTweetsAction,
  ISetTweetsLoadingState,
} from "./contracts/actionTypes";
import { LoadingState, TweetsState } from "./contracts/state";

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
