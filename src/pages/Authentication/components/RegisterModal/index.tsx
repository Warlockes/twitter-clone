import React from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ModalBlock } from "../../../../components/ModalBlock";
import { useNotification } from "../../../../hooks/useNotification";
import { Notification } from "../../../../components/Notification";
import styles from "./RegisterModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../../../../store/ducks/user/actionCreators";
import { selectLoadingStatus } from "../../../../store/ducks/user/selectors";
import { LoadingStatus } from "../../../../store/types";

interface IRegisterModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface IRegisterFormState {
  email: string;
  username: string;
  fullname: string;
  password: string;
  confirmedPassword: string;
}

const RegisterFormSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("Некорректная почта")
      .required("Введите почту"),
    username: yup.string().required("Введите логин"),
    fullname: yup.string().required("Введите полное имя"),
    password: yup
      .string()
      .min(6, "Минимальная длина пароля - 6 символов")
      .required("Это обязательное поле!"),
    confirmedPassword: yup
      .string()
      .required("Это обязательное поле!")
      .oneOf([yup.ref("password")], "Введенные пароли не совпадают!"),
  })
  .required();

export const RegisterModal: React.FC<IRegisterModalProps> = ({
  open,
  handleClose,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectLoadingStatus);
  const [text, handleOpenNotification, handleCloseNotification] =
    useNotification();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormState>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (data: IRegisterFormState): Promise<void> => {
    dispatch(fetchSignUp(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.ERROR) {
      handleOpenNotification("Произошла ошибка при создании учетной записи");
    } else if (loadingStatus === LoadingStatus.LOADED) {
      handleClose();
    }
  }, [loadingStatus, handleClose, handleOpenNotification]);

  return (
    <>
      <Notification text={text} handleClose={handleCloseNotification} />
      <ModalBlock
        visible={open}
        onClose={handleClose}
        title="Создайте учетную запись"
      >
        <FormControl
          className={styles["registerFormControl"]}
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <TextField
              className={styles["registerField"]}
              {...register("fullname")}
              label="Полное имя"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              error={!!errors.fullname}
              helperText={errors.fullname?.message}
              fullWidth
              autoFocus
            />
            <TextField
              className={styles["registerField"]}
              {...register("username")}
              label="Логин"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              error={!!errors.username}
              helperText={errors.username?.message}
              fullWidth
            />
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
            <TextField
              className={styles["registerField"]}
              {...register("confirmedPassword")}
              label="Повторите пароль"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              type="password"
              error={!!errors.confirmedPassword}
              helperText={errors.confirmedPassword?.message}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Создать
            </Button>
          </FormGroup>
        </FormControl>
      </ModalBlock>
    </>
  );
};
