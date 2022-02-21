import { ILoginFormState } from "../../../pages/Authentication/components/LoginModal";
import { IRegisterFormState } from "../../../pages/Authentication/components/RegisterModal";
import { LoadingStatus } from "../../types";
import {
  AuthDataActionType,
  IFetchSignInAction,
  IFetchSignUpAction,
  ISetAuthLoadingStatus,
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

export const setAuthDataLoadingStatus = (
  payload: LoadingStatus
): ISetAuthLoadingStatus => ({
  type: AuthDataActionType.SET_LOADING_STATUS,
  payload,
});
