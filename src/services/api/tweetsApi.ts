import axios from "axios";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  async fetchTweets(): Promise<TweetsState["items"]> {
    const { data } = await axios.get("https://trycode.pw/c/2OBQ1.json");
    return data;
  },
};
