import produce, { Draft } from "immer";
import { TweetActions, TweetsActionType } from "./actionCreators";
import { LoadingState, TweetsState } from "./contracts/state";

const initialTweetState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetActions) => {
    const { type, payload } = action;

    if (type === TweetsActionType.SET_TWEETS) {
      draft.items = payload;
    }
  },
  initialTweetState
);
