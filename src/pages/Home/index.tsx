import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

import { AddTweetForm } from "../../components/AddTweetForm";
import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { RightSide } from "../../components/RightSide";
import { useHomeStyles } from "./theme";

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm />
              </div>
              <div className={classes.addFormBottomLine} />
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
        <Grid sm={3} md={3} item>
          <RightSide />
        </Grid>
      </Grid>
    </Container>
  );
};
