import { Action } from "redux";
import { LoadingState, TagsState } from "./contracts/state";

export enum TagsActionType {
  SET_TAGS = "tags/SET_TAGS",
  FETCH_TAGS = "tags/FETCH_TAGS",
  SET_LOADING_STATE = "tags/SET_LOADING_STATE",
}

export interface ISetTagsAction extends Action<TagsActionType> {
  type: TagsActionType.SET_TAGS;
  payload: TagsState["items"];
}

export interface IFetchTagsAction extends Action<TagsActionType> {
  type: TagsActionType.FETCH_TAGS;
}

export interface ISetTagsLoadingState extends Action<TagsActionType> {
  type: TagsActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

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

export type TagsActions =
  | ISetTagsAction
  | IFetchTagsAction
  | ISetTagsLoadingState;
