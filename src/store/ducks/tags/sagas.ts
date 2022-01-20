import { call, put, takeLatest } from "redux-saga/effects";

import { setTags, setTagsLoadingState } from "./actionCreators";
import { TagsApi } from "../../../services/api/tagsApi";
import { LoadingState } from "./contracts/state";
import { TagsActionType } from "./contracts/actionTypes";

export function* fetchTagsRequest(): any {
  try {
    const items = yield call(TagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest);
}
