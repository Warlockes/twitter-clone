import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { TagsActions, TagsActionType } from "./contracts/actionTypes";
import { TagsState } from "./contracts/state";

const initialTagState: TagsState = {
  items: [],
  loadingState: LoadingStatus.NEVER,
};

export const tagsReducer = produce(
  (draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
      case TagsActionType.SET_TAGS:
        draft.items = action.payload;
        draft.loadingState = LoadingStatus.LOADED;
        break;

      case TagsActionType.FETCH_TAGS:
        draft.items = [];
        draft.loadingState = LoadingStatus.LOADING;
        break;

      case TagsActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      default:
        break;
    }
  },
  initialTagState
);
