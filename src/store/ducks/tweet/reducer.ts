import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { TweetDataActions, TweetDataActionType } from "./contracts/actionTypes";
import { TweetState } from "./contracts/state";

const initialTweetState: TweetState = {
  data: undefined,
  loadingState: LoadingStatus.NEVER,
};

export const tweetReducer = produce(
  (draft: Draft<TweetState>, action: TweetDataActions) => {
    switch (action.type) {
      case TweetDataActionType.SET_TWEET_DATA:
        draft.data = action.payload;
        draft.loadingState = LoadingStatus.LOADED;
        break;

      case TweetDataActionType.FETCH_TWEET_DATA:
        draft.data = undefined;
        draft.loadingState = LoadingStatus.LOADING;
        break;

      case TweetDataActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      default:
        break;
    }
  },
  initialTweetState
);
