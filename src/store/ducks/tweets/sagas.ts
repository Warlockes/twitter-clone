import { call, put, takeLatest } from "redux-saga/effects";

import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../types";
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {
  IFetchAddTweetAction,
  IRemoveTweetAction,
  TweetsActionType,
} from "./contracts/actionTypes";
import { AddFormState } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingStatus.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetAction): any {
  try {
    const item = yield call(TweetsApi.fetchAddTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* fetchRemoveTweetRequest({ payload }: IRemoveTweetAction): any {
  try {
    yield call(TweetsApi.removeTweet, payload);
  } catch (error) {
    alert("Ошибка при удалении твита");
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest);
  yield takeLatest(TweetsActionType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
