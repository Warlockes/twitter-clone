import produce, { Draft } from "immer";
import { TweetsActions, TweetsActionType } from "./contracts/actionTypes";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

const initialTweetState: TweetsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TweetsActionType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TweetsActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case TweetsActionType.ADD_TWEET:
        draft.items.push(action.payload);
        draft.addFormState = AddFormState.ADDED;
        break;

      case TweetsActionType.FETCH_ADD_TWEET:
        draft.addFormState = AddFormState.LOADING;
        break;

      default:
        break;
    }
  },
  initialTweetState
);
