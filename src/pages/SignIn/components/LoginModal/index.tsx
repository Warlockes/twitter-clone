import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import { ModalBlock } from "../../../../components/ModalBlock";
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  open,
  handleClose,
}): React.ReactElement => {
  return (
    <ModalBlock visible={open} onClose={handleClose} title="Войти в аккаунт">
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
  );
};
