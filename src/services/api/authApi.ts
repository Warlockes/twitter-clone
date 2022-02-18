import { axios } from "../../core/axios";
import { ILoginFormState } from "../../pages/SignIn/components/LoginModal";

interface IResponseAuthApi {
  status: string;
  data: any; // убрать any
}

export const AuthApi = {
  async signIn(payload: ILoginFormState): Promise<IResponseAuthApi> {
    const { data } = await axios.post<IResponseAuthApi>("/auth/signin", {
      username: payload.email,
      password: payload.password,
    });
    return data.data;
  },

  async getMe(): Promise<IResponseAuthApi> {
    const { data } = await axios.get<IResponseAuthApi>("users/me");
    return data.data;
  },
};
