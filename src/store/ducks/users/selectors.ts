import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { UsersState } from "./contracts/state";

export const selectUsers = (state: RootState): UsersState => state.users;

export const selectUsersItems = (state: RootState): UsersState["items"] =>
  selectUsers(state).items;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectUsers(state).loadingStatus;

export const selectIsUsersLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
