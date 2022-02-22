import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { AuthDataActions, AuthDataActionType } from "./contracts/actionTypes";
import { AuthState } from "./contracts/state";

const initialAuthState: AuthState = {
  loadingSignInStatus: LoadingStatus.NEVER,
  loadingSignUpStatus: LoadingStatus.NEVER,
};

export const authReducer = produce(
  (draft: Draft<AuthState>, action: AuthDataActions) => {
    switch (action.type) {
      case AuthDataActionType.FETCH_SIGN_IN:
        draft.loadingSignUpStatus = LoadingStatus.NEVER;
        draft.loadingSignInStatus = LoadingStatus.LOADING;
        break;

      case AuthDataActionType.FETCH_SIGN_UP:
        draft.loadingSignInStatus = LoadingStatus.NEVER;
        draft.loadingSignUpStatus = LoadingStatus.LOADING;
        break;

      case AuthDataActionType.SET_SiGN_IN_LOADING_STATUS:
        draft.loadingSignInStatus = action.payload;
        break;

      case AuthDataActionType.SET_SiGN_UP_LOADING_STATUS:
        draft.loadingSignUpStatus = action.payload;
        break;

      default:
        break;
    }
  },
  initialAuthState
);
