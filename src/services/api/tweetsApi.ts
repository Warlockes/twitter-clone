import { axios } from "../../core/axios";
import { Tweet } from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(userId?: string): Promise<Tweet[]> {
    const { data } = await axios.get<Response<Tweet[]>>(
      userId ? `/tweets/user/${userId}` : "/tweets"
    );
    return data.data;
  },
  async fetchTweet(tweetId: string): Promise<Tweet> {
    const { data } = await axios.get<Response<Tweet>>(`/tweets/${tweetId}`);
    return data.data;
  },
  async fetchAddTweet(payload: {
    text: string;
    images: string[];
  }): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>("/tweets", payload);
    return data.data;
  },
  async removeTweet(id: string): Promise<void> {
    await axios.delete(`/tweets/${id}`);
  },
};
