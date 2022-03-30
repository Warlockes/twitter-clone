import { LoadingStatus } from "../../types";
import {
  IFetchUserDataAction,
  ISetUserDataAction,
  ISetUserLoadingStatus,
  ISignOutAction,
  UserDataActionType,
} from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const setUserData = (
  payload: UserState["data"]
): ISetUserDataAction => ({
  type: UserDataActionType.SET_USER_DATA,
  payload,
});

export const fetchUserData = (): IFetchUserDataAction => ({
  type: UserDataActionType.FETCH_USER_DATA,
});

export const setUserDataLoadingStatus = (
  payload: LoadingStatus
): ISetUserLoadingStatus => ({
  type: UserDataActionType.SET_LOADING_STATUS,
  payload,
});

export const signOut = (): ISignOutAction => ({
  type: UserDataActionType.SIGN_OUT,
});
