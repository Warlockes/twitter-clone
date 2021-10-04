import React from "react";
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    fontSize: 36,
    marginBottom: "15px 0",
  },
  sideMenuList: {
    listStyle: "none",
  },
  sideMenuListItem: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 30,
    padding: "0 15px 0 10px",
    height: 50,
    marginBottom: 15,
    transition: "all 0.15s ease-in-out",
    "& svg": {
      marginRight: 10,
    },
    "&:last-child": {
      marginBottom: 25,
    },
    "&:hover": {
      backgroundColor: "rgba(29, 161, 242, 0.1)",
      "& h6": {
        color: theme.palette.primary.main,
      },
      "& svg path": {
        fill: theme.palette.primary.main,
      },
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 5,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  sideMenuButton: {
    maxWidth: 230,
    padding: theme.spacing(3),
  },
  tweetsWrapper: {
    borderRadius: 0,
    borderBottom: "none",
    borderTop: "none",
    height: "100%",
  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: "none",
    borderTop: "none",
    borderRight: "none",
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetButtonRow: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 20,
    position: "relative",
    left: -10,
  },
  tweetIcons: {
    fontSize: 20,
  },
  tweet: {
    paddingTop: 10,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: " rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: "0 15px",
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Tweet
              classes={classes}
              user={{
                fullname: "mxhxvoid",
                username: "mahavoid",
                avatarUrl:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
              }}
              text={`Слушаю краем уха экскурсовода в нижегородском кремле: "Против России
								в 1941 году ополчился весь Евросоюз". Какой Евросоюз, деревянная
								башка? Знайте, что пропаганда доберется до вас даже через "гидов".
								Ищите нормальных неформальных экскурсоводов!`}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Анастасия Брюханова",
                username: "bananstena",
                avatarUrl:
                  "https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
              text={`В субботу Алексей Венедиктов на радио опять доказывал, что электронное голосование честное, и внезапно стал угрожать подать на меня в суд, попутно называя кацеботом. `}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "mxhxvoid",
                username: "mahavoid",
                avatarUrl:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
              }}
              text={`Слушаю краем уха экскурсовода в нижегородском кремле: "Против России
								в 1941 году ополчился весь Евросоюз". Какой Евросоюз, деревянная
								башка? Знайте, что пропаганда доберется до вас даже через "гидов".
								Ищите нормальных неформальных экскурсоводов!`}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Анастасия Брюханова",
                username: "bananstena",
                avatarUrl:
                  "https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
              text={`В субботу Алексей Венедиктов на радио опять доказывал, что электронное голосование честное, и внезапно стал угрожать подать на меня в суд, попутно называя кацеботом. `}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "mxhxvoid",
                username: "mahavoid",
                avatarUrl:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
              }}
              text={`Слушаю краем уха экскурсовода в нижегородском кремле: "Против России
								в 1941 году ополчился весь Евросоюз". Какой Евросоюз, деревянная
								башка? Знайте, что пропаганда доберется до вас даже через "гидов".
								Ищите нормальных неформальных экскурсоводов!`}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Анастасия Брюханова",
                username: "bananstena",
                avatarUrl:
                  "https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
              text={`В субботу Алексей Венедиктов на радио опять доказывал, что электронное голосование честное, и внезапно стал угрожать подать на меня в суд, попутно называя кацеботом. `}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "mxhxvoid",
                username: "mahavoid",
                avatarUrl:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
              }}
              text={`Слушаю краем уха экскурсовода в нижегородском кремле: "Против России
								в 1941 году ополчился весь Евросоюз". Какой Евросоюз, деревянная
								башка? Знайте, что пропаганда доберется до вас даже через "гидов".
								Ищите нормальных неформальных экскурсоводов!`}
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Анастасия Брюханова",
                username: "bananstena",
                avatarUrl:
                  "https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
              text={`В субботу Алексей Венедиктов на радио опять доказывал, что электронное голосование честное, и внезапно стал угрожать подать на меня в суд, попутно называя кацеботом. `}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск в Твиттере" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};
