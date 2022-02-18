import { SnackbarCloseReason } from "@material-ui/core/Snackbar";
import React from "react";

type UseNotification = () => [
  text: string | null,
  handleOpenNotification: (notificationText: string) => void,
  handleCloseNotification: (
    event?: React.SyntheticEvent<any>,
    reason?: SnackbarCloseReason
  ) => void
];

export const useNotification: UseNotification = () => {
  const [label, setText] = React.useState<string | null>(null);

  const handleOpenNotification = React.useCallback(
    (notificationText: string) => {
      setText(notificationText);
    },
    [setText]
  );

  const handleCloseNotification: (
    event?: React.SyntheticEvent<any>,
    reason?: SnackbarCloseReason
  ) => void = React.useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }

      setText(null);
    },
    [setText]
  );

  return [label, handleOpenNotification, handleCloseNotification];
};
