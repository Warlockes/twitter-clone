import { LoadingStatus } from "../../../types";

export enum AddFormState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
  ADDED = "ADDED",
}

export interface Tweet {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: {
    fullname: string;
    username: string;
  };
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingStatus;
  addFormState: AddFormState;
}
