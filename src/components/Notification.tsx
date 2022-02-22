import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { Color } from "@material-ui/lab/Alert";
import { Slide } from "@material-ui/core";

interface INotificationProps {
  open: boolean;
  severity: Color;
  text: string | null;
  handleClose: () => void;
}

export const Notification: React.FC<INotificationProps> = ({
  open,
  severity,
  text,
  handleClose,
}): React.ReactElement => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <MuiAlert
        onClose={handleClose}
        severity={severity}
        elevation={6}
        variant="filled"
      >
        {text}
      </MuiAlert>
    </Snackbar>
  );
};
