import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { AuthState } from "./contracts/state";

export const selectAuthState = (state: RootState): AuthState => state.auth;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectAuthState(state).loadingStatus;

export const selectIsAuthLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsAuthLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
