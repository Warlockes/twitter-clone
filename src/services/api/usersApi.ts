import { axios } from "../../core/axios";
import { UsersState } from "../../store/ducks/users/contracts/state";

export const UsersApi = {
  async fetctUsers(): Promise<UsersState["items"]> {
    const { data } = await axios.get("/users");
    return data.data;
  },
};
