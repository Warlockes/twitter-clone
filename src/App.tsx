import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { AuthApi } from "./services/api/authApi";
import { setUserData } from "./store/ducks/user/actionCreators";

function App() {
  // TODO:
  // 1) Поправить через саги или как-то еще - тут херня
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await AuthApi.getMe();
        dispatch(setUserData(data));
        history.replace("/home");
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, [history, dispatch]);

  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
