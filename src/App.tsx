import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { SignIn } from "./pages/SignIn";
import { UserPage } from "./pages/User";
import { AuthApi } from "./services/api/authApi";
import { setUserData } from "./store/ducks/user/actionCreators";
import { selectIsUserLoaded } from "./store/ducks/user/selectors";

function App() {
  // TODO:
  // 1) Поправить через саги или как-то еще - тут херня
  // 2) Чекать, если юзер не авторизован, то очищать токен и редакс

  // const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsUserLoaded);

  // React.useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const { data } = await AuthApi.getMe();
  //       dispatch(setUserData(data));
  //       history.replace("/home");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   checkAuth();
  // }, [history, dispatch]);

  React.useEffect(() => {
    if (isAuth) {
      history.replace("/home");
    }
  }, [isAuth]);

  return (
    <div className="twitter-clone">
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
