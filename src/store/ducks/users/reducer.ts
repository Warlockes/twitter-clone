import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { UsersActions, UsersActionType } from "./contracts/actionTypes";
import { UsersState } from "./contracts/state";

const initialUsersState: UsersState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const usersReducer = produce(
  (draft: Draft<UsersState>, action: UsersActions) => {
    switch (action.type) {
      case UsersActionType.SET_ITEMS:
        draft.items = action.payload;
        draft.loadingStatus = LoadingStatus.LOADED;
        break;

      case UsersActionType.FETCH_ITEMS:
        draft.items = [];
        draft.loadingStatus = LoadingStatus.LOADING;
        break;

      case UsersActionType.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload;
        break;

      default:
        break;
    }
  },
  initialUsersState
);
