import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { UserDataActions, UserDataActionType } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

const initialUserState: UserState = {
  data: undefined,
  loadingStatus: LoadingStatus.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserDataActions) => {
    switch (action.type) {
      case UserDataActionType.SET_USER_DATA:
        draft.data = action.payload;
        draft.loadingStatus = LoadingStatus.LOADED;
        break;

      case UserDataActionType.FETCH_USER_DATA:
        draft.data = undefined;
        draft.loadingStatus = LoadingStatus.LOADING;
        break;

      case UserDataActionType.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload;
        break;

      default:
        break;
    }
  },
  initialUserState
);
