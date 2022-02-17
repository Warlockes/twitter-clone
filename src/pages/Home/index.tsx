import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { AddTweetForm } from "../../components/AddTweetForm";
import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { RightSide } from "../../components/RightSide";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";
import { BackButton } from "../../components/BackButton";
import { FullTweet } from "./components/FullTweet";
import styles from "./Home.module.scss";

export const Home = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container className={styles["wrapper"]} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={styles["tweetsWrapper"]} variant="outlined">
            <Paper className={styles["tweetsHeader"]} variant="outlined">
              <Route path="/home/:any">
                <BackButton />
              </Route>

              <Route path={["/home", "/home/search"]} exact>
                <Typography variant="h6">Главная</Typography>
              </Route>

              <Route path="/home/tweet">
                <Typography variant="h6">Твит</Typography>
              </Route>
            </Paper>
            <Route path={["/home", "/home/search"]} exact>
              <Paper>
                <div className={styles["addForm"]}>
                  <AddTweetForm />
                </div>
                <div className={styles["addFormBottomLine"]} />
              </Paper>
            </Route>

            <Route path="/home" exact>
              {isLoadingTweets ? (
                <div className={styles["tweetsLoader"]}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => <Tweet key={tweet._id} {...tweet} />)
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} />
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <RightSide />
        </Grid>
      </Grid>
    </Container>
  );
};
