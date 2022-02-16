import { RootState } from "../../store";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

export const selectTweetsState = (state: RootState): TweetsState =>
  state.tweets;

export const selectTweetsItems = (state: RootState): TweetsState["items"] =>
  selectTweetsState(state).items;

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweetsState(state).loadingState;

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweetsState(state).addFormState;
