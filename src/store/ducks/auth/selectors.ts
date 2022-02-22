import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { AuthState } from "./contracts/state";

export const selectAuthState = (state: RootState): AuthState => state.auth;

export const selectSignInLoadingStatus = (state: RootState): LoadingStatus =>
  selectAuthState(state).loadingSignInStatus;

export const selectSignUpLoadingStatus = (state: RootState): LoadingStatus =>
  selectAuthState(state).loadingSignUpStatus;
