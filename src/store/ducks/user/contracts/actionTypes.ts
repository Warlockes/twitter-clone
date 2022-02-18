import { Action } from "redux";
import { ILoginFormState } from "../../../../pages/SignIn/components/LoginModal";
import { LoadingStatus } from "../../../types";
import { User } from "./state";

export enum UserDataActionType {
  SET_USER_DATA = "user/SET_DATA",
  FETCH_SIGN_IN = "user/FETCH_SIGN_IN",
  SET_LOADING_STATUS = "user/SET_LOADING_STATUS",
}

export interface IFetchSignInAction extends Action<UserDataActionType> {
  type: UserDataActionType.FETCH_SIGN_IN;
  payload: ILoginFormState;
}

export interface ISetUserDataAction extends Action<UserDataActionType> {
  type: UserDataActionType.SET_USER_DATA;
  payload: User | undefined;
}

export interface ISetUserLoadingStatus extends Action<UserDataActionType> {
  type: UserDataActionType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export type UserDataActions =
  | ISetUserDataAction
  | ISetUserLoadingStatus
  | IFetchSignInAction;
