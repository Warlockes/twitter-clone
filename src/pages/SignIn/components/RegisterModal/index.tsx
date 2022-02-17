import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import { ModalBlock } from "../../../../components/ModalBlock";
import styles from "./RegisterModal.module.scss";

interface RegisterModalProps {
  open: boolean;
  handleClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  handleClose,
}): React.ReactElement => {
  return (
    <ModalBlock
      visible={open}
      onClose={handleClose}
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
  );
};
