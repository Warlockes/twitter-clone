import { call, put, takeLatest } from "redux-saga/effects";

import { LoadingStatus } from "../../types";
import { setUsers, setUsersLoadingStatus } from "./actionCreators";
import { UsersActionType } from "./contracts/actionTypes";
import { UsersApi } from "../../../services/api/usersApi";

export function* fetchUsersRequest(): any {
  try {
    const items = yield call(UsersApi.fetchUsers);
    yield put(setUsers(items));
  } catch (error) {
    yield put(setUsersLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActionType.FETCH_ITEMS, fetchUsersRequest);
}
