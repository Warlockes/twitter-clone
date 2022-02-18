import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { TagsState } from "./state";

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
  payload: LoadingStatus;
}

export type TagsActions =
  | ISetTagsAction
  | IFetchTagsAction
  | ISetTagsLoadingState;
