import { Action } from "redux";
import { ILoginFormState } from "../../../../pages/Authentication/components/LoginModal";
import { IRegisterFormState } from "../../../../pages/Authentication/components/RegisterModal";
import { LoadingStatus } from "../../../types";

export enum AuthDataActionType {
  FETCH_SIGN_IN = "auth/FETCH_SIGN_IN",
  FETCH_SIGN_UP = "auth/FETCH_SIGN_UP",
  SET_SiGN_IN_LOADING_STATUS = "auth/SET_SiGN_IN_LOADING_STATUS",
  SET_SiGN_UP_LOADING_STATUS = "auth/SET_SiGN_UP_LOADING_STATUS",
}

export interface IFetchSignInAction extends Action<AuthDataActionType> {
  type: AuthDataActionType.FETCH_SIGN_IN;
  payload: ILoginFormState;
}

export interface IFetchSignUpAction extends Action<AuthDataActionType> {
  type: AuthDataActionType.FETCH_SIGN_UP;
  payload: IRegisterFormState;
}

export interface ISetSignInLoadingStatus extends Action<AuthDataActionType> {
  type: AuthDataActionType.SET_SiGN_IN_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface ISetSignUpLoadingStatus extends Action<AuthDataActionType> {
  type: AuthDataActionType.SET_SiGN_UP_LOADING_STATUS;
  payload: LoadingStatus;
}

export type AuthDataActions =
  | ISetSignInLoadingStatus
  | ISetSignUpLoadingStatus
  | IFetchSignInAction
  | IFetchSignUpAction;
