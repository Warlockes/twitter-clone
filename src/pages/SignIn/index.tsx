import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { ModalBlock } from "../../components/ModalBlock";

import styles from "./SignIn.module.scss";

export const SignIn: React.FC = (): React.ReactElement => {
  const [visibleSignIn, setVisibleSignIn] = useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleSignIn("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleSignIn("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleSignIn(undefined);
  };

  return (
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
          <ModalBlock
            visible={visibleSignIn === "signIn"}
            onClose={handleCloseModal}
            title="Войти в аккаунт"
          >
            <FormControl
              className={styles["loginFormControl"]}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={styles["registerField"]}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={styles["registerField"]}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={styles["registerField"]}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleSignIn === "signUp"}
            onClose={handleCloseModal}
            title="Создайте учетную запись"
          >
            <FormControl
              className={styles["loginFormControl"]}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={styles["registerField"]}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={styles["registerField"]}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
