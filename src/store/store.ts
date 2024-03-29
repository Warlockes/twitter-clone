import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./ducks/auth/contracts/state";

import { TagsState } from "./ducks/tags/contracts/state";
import { TweetState } from "./ducks/tweet/contracts/state";
import { TweetsState } from "./ducks/tweets/contracts/state";
import { UserState } from "./ducks/user/contracts/state";
import { UsersState } from "./ducks/users/contracts/state";
import { rootReducer } from "./rootReducer";
import rootSaga from "./saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet: TweetState;
  user: UserState;
  users: UsersState;
  auth: AuthState;
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
