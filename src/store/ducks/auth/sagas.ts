import { call, put, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../../../services/api/authApi";
import { LoadingStatus } from "../../types";
import { setUserData } from "../user/actionCreators";
import { User } from "../user/contracts/state";
import { setAuthDataLoadingStatus } from "./actionCreators";
import {
  AuthDataActionType,
  IFetchSignInAction,
  IFetchSignUpAction,
} from "./contracts/actionTypes";

export function* fetchSignInRequest({ payload }: IFetchSignInAction): any {
  try {
    throw new Error();
    // const data: User = yield call(AuthApi.signIn, payload);

    // if (data.token) {
    //   window.localStorage.setItem("twitter-clone_token", data.token);
    // }

    // yield put(setUserData(data));
  } catch (error) {
    yield put(setAuthDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchSignUpRequest({ payload }: IFetchSignUpAction): any {
  try {
    throw new Error();
    // const data: User = yield call(AuthApi.signUp, payload);
    // yield put(setUserData(data));
  } catch (error) {
    yield put(setAuthDataLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* authSaga() {
  yield takeLatest(AuthDataActionType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(AuthDataActionType.FETCH_SIGN_UP, fetchSignUpRequest);
}
