import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectTagsItems = (state: RootState): TagsState["items"] =>
  selectTags(state).items;

export const selectIsTagsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingStatus.LOADED;

export const selectLoadingState = (state: RootState): LoadingStatus =>
  selectTags(state).loadingState;
