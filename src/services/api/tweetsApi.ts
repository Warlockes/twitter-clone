import axios from "axios";
import { Tweet } from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(): Promise<Tweet[]> {
    const { data } = await axios.get<Response<Tweet[]>>(`/tweets`);
    return data.data;
  },
  async fetchTweet(tweetId: string): Promise<Tweet> {
    const { data } = await axios.get<Response<Tweet>>(`/tweets/${tweetId}`);
    return data.data;
  },
  async fetchAddTweet(payload: Tweet): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>("/tweets", {
      text: payload,
    });
    return data.data;
  },
};
