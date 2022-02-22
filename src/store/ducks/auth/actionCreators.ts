import { ILoginFormState } from "../../../pages/Authentication/components/LoginModal";
import { IRegisterFormState } from "../../../pages/Authentication/components/RegisterModal";
import { LoadingStatus } from "../../types";
import {
  AuthDataActionType,
  IFetchSignInAction,
  IFetchSignUpAction,
  ISetSignInLoadingStatus,
  ISetSignUpLoadingStatus,
} from "./contracts/actionTypes";

export const fetchSignIn = (payload: ILoginFormState): IFetchSignInAction => ({
  type: AuthDataActionType.FETCH_SIGN_IN,
  payload,
});

export const fetchSignUp = (
  payload: IRegisterFormState
): IFetchSignUpAction => ({
  type: AuthDataActionType.FETCH_SIGN_UP,
  payload,
});

export const setSignInLoadingStatus = (
  payload: LoadingStatus
): ISetSignInLoadingStatus => ({
  type: AuthDataActionType.SET_SiGN_IN_LOADING_STATUS,
  payload,
});

export const setSignUpLoadingStatus = (
  payload: LoadingStatus
): ISetSignUpLoadingStatus => ({
  type: AuthDataActionType.SET_SiGN_UP_LOADING_STATUS,
  payload,
});
