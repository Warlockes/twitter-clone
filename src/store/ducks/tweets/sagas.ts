import { call, put, takeLatest } from "redux-saga/effects";

import { TweetsApi } from "../../../services/api/tweetsApi";
import { addTweet, setTweets, setTweetsLoadingState } from "./actionCreators";
import {
  IFetchAddTweetAction,
  TweetsActionType,
} from "./contracts/actionTypes";
import { LoadingState, Tweet } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetAction): any {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substring(2),
      text: payload,
      user: {
        fullname: "Test User",
        username: "testUSer",
        avatarUrl: "https://source.unsplash.com/random/100x100?5",
      },
    };
    const item = yield call(TweetsApi.fetchAddTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
