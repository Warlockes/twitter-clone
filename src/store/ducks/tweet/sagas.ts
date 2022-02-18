import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../types";
import { Tweet } from "../tweets/contracts/state";
import { setTweetData, setTweetDataLoadingState } from "./actionCreators";
import {
  IFetchTweetDataAction,
  TweetDataActionType,
} from "./contracts/actionTypes";

export function* fetchTweetRequest({
  payload: tweetId,
}: IFetchTweetDataAction): any {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweet, tweetId);
    yield put(setTweetData(data));
  } catch (error) {
    yield put(setTweetDataLoadingState(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetDataActionType.FETCH_TWEET_DATA, fetchTweetRequest);
}
