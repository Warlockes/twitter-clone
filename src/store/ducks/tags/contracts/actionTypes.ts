import { Action } from "redux";
import { TagsState, LoadingState } from "./state";

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

export type TagsActions =
  | ISetTagsAction
  | IFetchTagsAction
  | ISetTagsLoadingState;
