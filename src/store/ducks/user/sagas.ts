import { call, put, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../../../services/api/authApi";
import { LoadingStatus } from "../../types";
import { setUserData, setUserDataLoadingStatus } from "./actionCreators";
import {
  IFetchSignInAction,
  IFetchSignUpAction,
  UserDataActionType,
} from "./contracts/actionTypes";
import { User } from "./contracts/state";

export function* fetchSignInRequest({ payload }: IFetchSignInAction): any {
  try {
    const data: User = yield call(AuthApi.signIn, payload);

    if (data.token) {
      window.localStorage.setItem("twitter-clone_token", data.token);
    }

    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchSignUpRequest({ payload }: IFetchSignUpAction): any {
  try {
    const data: User = yield call(AuthApi.signUp, payload);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchUserDataRequest(): any {
  try {
    const data: User = yield call(AuthApi.getMe);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserDataActionType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(UserDataActionType.FETCH_SIGN_UP, fetchSignUpRequest);
  yield takeLatest(UserDataActionType.FETCH_USER_DATA, fetchUserDataRequest);
}
