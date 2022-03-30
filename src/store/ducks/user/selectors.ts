import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { User, UserState } from "./contracts/state";

export const selectUserState = (state: RootState): UserState => state.user;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectUserState(state).loadingStatus;

export const selectUserData = (state: RootState): User | undefined =>
  selectUserState(state).data;

export const selectIsUserLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsUserLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectIsAuth = (state: RootState) => !!selectUserData(state);
