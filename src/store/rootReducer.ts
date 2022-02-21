import { combineReducers } from "redux";
import { authReducer } from "./ducks/auth/reducer";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetReducer } from "./ducks/tweet/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { userReducer } from "./ducks/user/reducer";
import { usersReducer } from "./ducks/users/reducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
  user: userReducer,
  users: usersReducer,
  auth: authReducer,
});
