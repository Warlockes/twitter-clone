import { LoadingStatus } from "../../types";
import { User } from "../user/contracts/state";
import {
  IFetchUsersItemsAction,
  ISetUsersItemsAction,
  ISetUsersLoadingStatus,
  UsersActionType,
} from "./contracts/actionTypes";

export const setUsers = (payload: User[]): ISetUsersItemsAction => ({
  type: UsersActionType.SET_ITEMS,
  payload,
});

export const fetchUsers = (): IFetchUsersItemsAction => ({
  type: UsersActionType.FETCH_ITEMS,
});

export const setUsersLoadingStatus = (
  payload: LoadingStatus
): ISetUsersLoadingStatus => ({
  type: UsersActionType.SET_LOADING_STATUS,
  payload,
});
