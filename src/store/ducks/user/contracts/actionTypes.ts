import { Action } from "redux";
import { ILoginFormState } from "../../../../pages/Authentication/components/LoginModal";
import { IRegisterFormState } from "../../../../pages/Authentication/components/RegisterModal";
import { LoadingStatus } from "../../../types";
import { User } from "./state";

export enum UserDataActionType {
  SET_USER_DATA = "user/SET_DATA",
  FETCH_SIGN_IN = "user/FETCH_SIGN_IN",
  FETCH_SIGN_UP = "user/FETCH_SIGN_UP",
  SET_LOADING_STATUS = "user/SET_LOADING_STATUS",
}

export interface IFetchSignInAction extends Action<UserDataActionType> {
  type: UserDataActionType.FETCH_SIGN_IN;
  payload: ILoginFormState;
}

export interface IFetchSignUpAction extends Action<UserDataActionType> {
  type: UserDataActionType.FETCH_SIGN_UP;
  payload: IRegisterFormState;
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
  | IFetchSignInAction
  | IFetchSignUpAction;
