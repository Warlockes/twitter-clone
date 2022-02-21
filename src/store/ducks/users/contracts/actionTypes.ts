import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";

export enum UsersActionType {
  SET_ITEMS = "users/SET_ITEMS",
  FETCH_ITEMS = "users/FETCH_ITEMS",
  SET_LOADING_STATUS = "users/SET_LOADING_STATUS",
}

export interface ISetUsersItemsAction extends Action<UsersActionType> {
  type: UsersActionType.SET_ITEMS;
  payload: User[];
}

export interface IFetchUsersItemsAction extends Action<UsersActionType> {
  type: UsersActionType.FETCH_ITEMS;
}

export interface ISetUsersLoadingStatus extends Action<UsersActionType> {
  type: UsersActionType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export type UsersActions =
  | ISetUsersItemsAction
  | IFetchUsersItemsAction
  | ISetUsersLoadingStatus;
