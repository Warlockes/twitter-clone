import { axios } from "../../core/axios";
import { User } from "../../store/ducks/user/contracts/state";
import { UsersState } from "../../store/ducks/users/contracts/state";

export const UsersApi = {
  async fetchUsers(): Promise<UsersState["items"]> {
    const { data } = await axios.get("/users");
    return data.data;
  },

  async getUserInfo(userId: string): Promise<User> {
    const { data } = await axios.get(`/users/${userId}`);
    return data.data;
  },
};
