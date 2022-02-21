import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";

import styles from "./SignIn.module.scss";
import { LoginModal } from "./components/LoginModal";
import { RegisterModal } from "./components/RegisterModal";
import { useNotification } from "../../hooks/useNotification";
import { Notification } from "../../components/Notification";
import { useSelector } from "react-redux";
import {
  selectIsAuthLoading,
  selectLoadingStatus,
} from "../../store/ducks/auth/selectors";
import { LoadingStatus } from "../../store/types";

enum SignInModalState {
  Login = "signIn",
  Register = "signUp",
}

export const Authentication: React.FC = (): React.ReactElement => {
  const [visibleModal, setVisibleModal] = useState<
    SignInModalState.Login | SignInModalState.Register | undefined
  >(undefined);
  const loadingStatus = useSelector(selectLoadingStatus);
  const isLoagin = useSelector(selectIsAuthLoading);
  const [text, handleOpenNotification, handleCloseNotification] =
    useNotification();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal(SignInModalState.Login);
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal(SignInModalState.Register);
  };

  const handleCloseModal = React.useCallback((): void => {
    setVisibleModal(undefined);
  }, [setVisibleModal]);

  React.useEffect(() => {
    if (
      loadingStatus === LoadingStatus.ERROR &&
      visibleModal === SignInModalState.Login
    ) {
      handleOpenNotification("Неверный логин или пароль");
    } else if (
      loadingStatus === LoadingStatus.ERROR &&
      visibleModal === SignInModalState.Register
    ) {
      handleOpenNotification("Произошла ошибка при создании учетной записи");
    } else if (loadingStatus === LoadingStatus.LOADED) {
      handleCloseModal();
    }
  }, [loadingStatus, handleCloseModal, handleOpenNotification, visibleModal]);

  return (
    <>
      <Notification text={text} handleClose={handleCloseNotification} />
      <div className={styles["wrapper"]}>
        <section className={styles["blueSide"]}>
          <TwitterIcon color="primary" className={styles["blueSideBigIcon"]} />
          <ul className={styles["blueSideListInfo"]}>
            <li className={styles["blueSideListInfoItem"]}>
              <Typography variant="h6">
                <SearchIcon className={styles["blueSideListInfoIcon"]} />
                Читайте о том, что вам интересно.
              </Typography>
            </li>
            <li className={styles["blueSideListInfoItem"]}>
              <Typography variant="h6">
                <PeopleIcon className={styles["blueSideListInfoIcon"]} />
                Узнайте, о чем говорят в мире.
              </Typography>
            </li>
            <li className={styles["blueSideListInfoItem"]}>
              <Typography variant="h6">
                <MessageIcon className={styles["blueSideListInfoIcon"]} />
                Присоединяйтесь к общению.
              </Typography>
            </li>
          </ul>
        </section>
        <section className={styles["loginSide"]}>
          <div className={styles["loginSideWrapper"]}>
            <TwitterIcon
              color="primary"
              className={styles["loginSideTwitterIcon"]}
            />
            <Typography className={styles["loginSideTitle"]} variant="h4">
              Узнайте, что происходит в мире прямо сейчас
            </Typography>
            <Typography>
              <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
            </Typography>
            <br />
            <Button
              onClick={handleClickOpenSignUp}
              style={{ marginBottom: 20 }}
              variant="contained"
              color="primary"
              fullWidth
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={handleClickOpenSignIn}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Войти
            </Button>
            <LoginModal
              open={visibleModal === SignInModalState.Login}
              handleClose={handleCloseModal}
              loading={isLoagin}
            />
            <RegisterModal
              open={visibleModal === SignInModalState.Register}
              handleClose={handleCloseModal}
              loading={isLoagin}
            />
          </div>
        </section>
      </div>
    </>
  );
};
