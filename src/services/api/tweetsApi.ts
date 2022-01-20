import axios from "axios";
import { Tweet, TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  async fetchTweets(): Promise<TweetsState["items"]> {
    const { data } = await axios.get("/tweets");
    return data;
  },
  async fetchTweet(tweetId: string): Promise<Tweet[]> {
    const { data } = await axios.get(`/tweets?_id=${tweetId}`);
    return data;
  },
};
