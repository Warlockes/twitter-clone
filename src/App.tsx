import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Authentication } from "./pages/Authentication";
import { UserPage } from "./pages/User";
import {
  selectIsUserLoaded,
  selectLoadingStatus,
} from "./store/ducks/user/selectors";
import { fetchUserData } from "./store/ducks/user/actionCreators";
import { LoadingStatus } from "./store/types";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "./App.module.scss";

function App() {
  // TODO:
  // 2) Чекать, если юзер не авторизован, то очищать токен и редакс
  // 3) При удалении пользователя удалять все его твиты

  const dispatch = useDispatch();
  const history = useHistory();
  const isUserLoaded = useSelector(selectIsUserLoaded);
  const loadingStatus = useSelector(selectLoadingStatus);
  const isReady =
    loadingStatus !== LoadingStatus.NEVER &&
    loadingStatus !== LoadingStatus.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  React.useEffect(() => {
    if (isReady && !isUserLoaded) {
      history.replace("/auth");
    } else {
      history.replace("/home");
    }
  }, [isUserLoaded, history, isReady]);

  if (!isReady) {
    return (
      <div className={styles["loader-container"]}>
        <TwitterIcon color="primary" />
      </div>
    );
  }

  return (
    <div className={styles["twitter-clone"]}>
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
