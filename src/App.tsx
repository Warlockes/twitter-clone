import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Authentication } from "./pages/Authentication";
import { UserPage } from "./pages/User";
import { selectIsUserLoaded } from "./store/ducks/user/selectors";
import { fetchUserData } from "./store/ducks/user/actionCreators";

function App() {
  // TODO:
  // 2) Чекать, если юзер не авторизован, то очищать токен и редакс
  // 3) При удалении пользователя удалять все его твиты

  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsUserLoaded);

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  React.useEffect(() => {
    if (isAuth) {
      history.replace("/home");
    }
  }, [isAuth, history]);

  return (
    <div className="twitter-clone">
      <Switch>
        <Route path="/auth" component={Authentication} exact />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
