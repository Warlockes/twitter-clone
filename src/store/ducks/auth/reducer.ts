import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { AuthDataActions, AuthDataActionType } from "./contracts/actionTypes";
import { AuthState } from "./contracts/state";

const initialUserState: AuthState = {
  loadingStatus: LoadingStatus.NEVER,
};

export const authReducer = produce(
  (draft: Draft<AuthState>, action: AuthDataActions) => {
    switch (action.type) {
      case AuthDataActionType.FETCH_SIGN_IN:
        draft.loadingStatus = LoadingStatus.LOADING;
        break;

      case AuthDataActionType.FETCH_SIGN_UP:
        draft.loadingStatus = LoadingStatus.LOADING;
        break;

      case AuthDataActionType.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload;
        break;

      default:
        break;
    }
  },
  initialUserState
);
