import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Authentication } from "./pages/Authentication";
import { UserPage } from "./pages/User";
import {
  selectIsAuth,
  selectLoadingStatus,
} from "./store/ducks/user/selectors";
import { fetchUserData } from "./store/ducks/user/actionCreators";
import { LoadingStatus } from "./store/types";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "./App.module.scss";

function App() {
  // TODO:
  // 3) При удалении пользователя удалять все его твиты

  const dispatch = useDispatch();
  const { replace } = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectLoadingStatus);
  const isReady =
    loadingStatus !== LoadingStatus.NEVER &&
    loadingStatus !== LoadingStatus.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  React.useEffect(() => {
    if (isReady && !isAuth) {
      replace("/auth");
    } else {
      replace("/home");
    }
  }, [isAuth, isReady, replace]);

  if (!isReady) {
    return (
      <div className={styles.loaderContainer}>
        <TwitterIcon color="primary" />
      </div>
    );
  }

  return (
    <div className={styles.twitterClone}>
      <Switch>
        <Route path="/auth" component={Authentication} exact />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user/:id" component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
