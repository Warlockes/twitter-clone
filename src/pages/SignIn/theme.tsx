import { makeStyles } from "@material-ui/core";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "0 10px",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "400%",
    height: "400%",
    transform: "translate(-50%, -50%)",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 380,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    padding: "0 10px",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
    marginBottom: 20,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
  },
  registerField: {
    marginBottom: 15,
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));
