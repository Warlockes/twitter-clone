import { ILoginFormState } from "../../../pages/SignIn/components/LoginModal";
import { LoadingStatus } from "../../types";
import {
  IFetchSignInAction,
  ISetUserDataAction,
  ISetUserLoadingStatus,
  UserDataActionType,
} from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const setUserData = (
  payload: UserState["data"]
): ISetUserDataAction => ({
  type: UserDataActionType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: ILoginFormState): IFetchSignInAction => ({
  type: UserDataActionType.FETCH_SIGN_IN,
  payload,
});

export const setUserDataLoadingStatus = (
  payload: LoadingStatus
): ISetUserLoadingStatus => ({
  type: UserDataActionType.SET_LOADING_STATUS,
  payload,
});
