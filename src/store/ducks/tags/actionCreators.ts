import {
  ISetTagsAction,
  TagsActionType,
  IFetchTagsAction,
  ISetTagsLoadingState,
} from "./contracts/actionTypes";
import { LoadingState, TagsState } from "./contracts/state";

export const setTags = (payload: TagsState["items"]): ISetTagsAction => ({
  type: TagsActionType.SET_TAGS,
  payload,
});

export const fetchTags = (): IFetchTagsAction => ({
  type: TagsActionType.FETCH_TAGS,
});

export const setTagsLoadingState = (
  payload: LoadingState
): ISetTagsLoadingState => ({
  type: TagsActionType.SET_LOADING_STATE,
  payload,
});
