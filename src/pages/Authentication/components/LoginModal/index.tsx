import React from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { ModalBlock } from "../../../../components/ModalBlock";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import styles from "./LoginModal.module.scss";
import { useNotification } from "../../../../hooks/useNotification";
import { Notification } from "../../../../components/Notification";
import { LoadingStatus } from "../../../../store/types";
import { fetchSignIn } from "../../../../store/ducks/auth/actionCreators";
import { selectLoadingStatus } from "../../../../store/ducks/auth/selectors";

interface ILoginModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface ILoginFormState {
  email: string;
  password: string;
}

const LoginFormSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("Некорректная почта")
      .required("Это обязательное поле!"),
    password: yup
      .string()
      .min(6, "Минимальная длина пароля - 6 символов")
      .required("Это обязательное поле!"),
  })
  .required();

export const LoginModal: React.FC<ILoginModalProps> = ({
  open,
  handleClose,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectLoadingStatus);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormState>({
    resolver: yupResolver(LoginFormSchema),
  });
  const [text, handleOpenNotification, handleCloseNotification] =
    useNotification();

  const onSubmit = async (data: ILoginFormState): Promise<void> => {
    dispatch(fetchSignIn(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.ERROR) {
      handleOpenNotification("Неверный логин или пароль");
    } else if (loadingStatus === LoadingStatus.LOADED) {
      handleClose();
    }
  }, [loadingStatus, handleClose, handleOpenNotification]);

  return (
    <>
      <Notification text={text} handleClose={handleCloseNotification} />
      <ModalBlock visible={open} onClose={handleClose} title="Войти в аккаунт">
        <FormControl
          className={styles["loginFormControl"]}
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <TextField
              className={styles["registerField"]}
              {...register("email")}
              label="E-mail"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              autoFocus
            />
            <TextField
              className={styles["registerField"]}
              {...register("password")}
              label="Пароль"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              disabled={loadingStatus === LoadingStatus.LOADING}
              type="submit"
              fullWidth
            >
              {loadingStatus === LoadingStatus.LOADING ? (
                <CircularProgress size={20} />
              ) : (
                <>Войти</>
              )}
            </Button>
          </FormGroup>
        </FormControl>
      </ModalBlock>
    </>
  );
};
