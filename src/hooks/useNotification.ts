import { SnackbarCloseReason } from "@material-ui/core/Snackbar";
import { Color } from "@material-ui/lab/Alert";
import React from "react";

type UseNotification = () => [
  open: boolean,
  text: string | null,
  severity: Color,
  handleOpenNotification: (severity: Color, notificationText: string) => void,
  handleCloseNotification: (
    event?: React.SyntheticEvent<any>,
    reason?: SnackbarCloseReason
  ) => void
];

export const useNotification: UseNotification = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string | null>(null);
  const [severity, setSeverity] = React.useState<Color>("error");

  const handleOpenNotification = React.useCallback(
    (severity: Color, notificationText: string) => {
      setSeverity(severity);
      setText(notificationText);
      setOpen(true);
    },
    [setText, setSeverity, setOpen]
  );

  const handleCloseNotification: (
    event?: React.SyntheticEvent<any>,
    reason?: SnackbarCloseReason
  ) => void = React.useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    },
    [setOpen]
  );

  return [
    open,
    text,
    severity,
    handleOpenNotification,
    handleCloseNotification,
  ];
};
