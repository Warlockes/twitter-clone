import { call, put, takeLatest } from "redux-saga/effects";

import { setTags, setTagsLoadingState, TagsActionType } from "./actionCreators";
import { TagsApi } from "../../../services/api/tagsApi";
import { LoadingState } from "./contracts/state";

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
