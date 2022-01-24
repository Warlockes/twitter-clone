import { makeStyles, Theme } from "@material-ui/core";

export const useFullTweetStyles = makeStyles((theme: Theme) => ({
  tweetLoader: {
    textAlign: "center",
    padding: "70px 0 0 0",
  },
  textWrapper: {
    paddingTop: 0,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  actionButtonRow: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    justifyContent: "space-around",
  },
  tweetText: {
    wordBreak: "break-word",
  },
}));
