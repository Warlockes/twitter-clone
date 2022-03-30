import React from "react";
import {
  Avatar,
  CircularProgress,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { BackButton } from "../../components/BackButton";
import { Tweet } from "../../components/Tweet";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import { formatWord } from "../../utils/formatWord";
import { User } from "../../store/ducks/user/contracts/state";
import { UsersApi } from "../../services/api/usersApi";
import { RouteComponentProps } from "react-router-dom";
import styles from "./UserPage.module.scss";

export const UserPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [userData, setUserData] = React.useState<User | undefined>(undefined);
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    const userId = match.params.id;

    const fetchUserData = async () => {
      if (userId) {
        const userData = await UsersApi.getUserInfo(userId);
        setUserData(userData);
      }
    };

    fetchUserData();
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Paper className={styles.tweetsWrapper} variant="outlined">
      <Paper className={styles.tweetsHeader} variant="outlined">
        <BackButton />
        <div>
          <Typography variant="h6">Профиль</Typography>
          {isLoadingTweets ? (
            <Skeleton variant="text" width={50} />
          ) : (
            <Typography variant="caption" display="block" gutterBottom>
              {tweets.length}{" "}
              {formatWord(tweets.length, ["твит", "твита", "твитов"])}
            </Typography>
          )}
        </div>
      </Paper>

      <div className={styles.userHeader} />

      <div className={styles.userInfo}>
        <Avatar />
        {!userData ? (
          <Skeleton variant="text" width={250} height={30} />
        ) : (
          <h2 className={styles.fullname}>{userData?.fullname}</h2>
        )}
        {!userData ? (
          <Skeleton variant="text" width={100} />
        ) : (
          <h4 className={styles.username}>@{userData?.username}</h4>
        )}
        <p>ABOUT INFO</p>
        <ul>
          <li>Место рождения</li>
          <li>
            <a className="link" href="https://google.com">
              Ссылка на личную страницу
            </a>
          </li>
          <li>Дата рождения: 11.12.1996</li>
          <li>Регистрация: ноябрь 2021</li>
        </ul>
      </div>
      <Tabs
        className={styles.tabs}
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Твиты" />
        <Tab label="Твиты и ответы" />
        <Tab label="Медиа" />
        <Tab label="Нравится" />
      </Tabs>
      <div className={styles.userTweets}>
        {isLoadingTweets ? (
          <div className={styles.tweetsLoader}>
            <CircularProgress />
          </div>
        ) : (
          tweets.map((tweet) => <Tweet key={tweet._id} {...tweet} />)
        )}
      </div>
    </Paper>
  );
};
