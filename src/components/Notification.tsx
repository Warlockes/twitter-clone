import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

interface INotificationProps {
  text: string | null;
  handleClose: () => void;
}

export const Notification: React.FC<INotificationProps> = ({
  text,
  handleClose,
}): React.ReactElement => {
  return (
    <Snackbar open={!!text} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity="error"
        elevation={6}
        variant="filled"
      >
        {text}
      </MuiAlert>
    </Snackbar>
  );
};
