import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { TweetsActions, TweetsActionType } from "./contracts/actionTypes";
import { AddFormState, TweetsState } from "./contracts/state";

const initialTweetState: TweetsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  loadingState: LoadingStatus.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingStatus.LOADED;
        break;

      case TweetsActionType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingStatus.LOADING;
        break;

      case TweetsActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case TweetsActionType.SET_ADD_FORM_STATE:
        draft.addFormState = action.payload;
        break;

      case TweetsActionType.ADD_TWEET:
        draft.items.unshift(action.payload);
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
