import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";

export enum AddFormState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
  ADDED = "ADDED",
}

export interface Tweet {
  _id: string;
  text: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingStatus;
  addFormState: AddFormState;
}
