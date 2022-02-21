import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { User } from "./state";

export enum UserDataActionType {
  SET_USER_DATA = "user/SET_DATA",
  FETCH_USER_DATA = "user/FETCH_DATA",
  SET_LOADING_STATUS = "user/SET_LOADING_STATUS",
}

export interface ISetUserDataAction extends Action<UserDataActionType> {
  type: UserDataActionType.SET_USER_DATA;
  payload: User | undefined;
}

export interface IFetchUserDataAction extends Action<UserDataActionType> {
  type: UserDataActionType.FETCH_USER_DATA;
}

export interface ISetUserLoadingStatus extends Action<UserDataActionType> {
  type: UserDataActionType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export type UserDataActions =
  | ISetUserDataAction
  | ISetUserLoadingStatus
  | IFetchUserDataAction;
