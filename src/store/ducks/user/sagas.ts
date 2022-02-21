import { call, put, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../../../services/api/authApi";
import { LoadingStatus } from "../../types";
import { setUserData, setUserDataLoadingStatus } from "./actionCreators";
import { UserDataActionType } from "./contracts/actionTypes";
import { User } from "./contracts/state";

export function* fetchUserDataRequest(): any {
  try {
    const data: User = yield call(AuthApi.getMe);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserDataActionType.FETCH_USER_DATA, fetchUserDataRequest);
}
