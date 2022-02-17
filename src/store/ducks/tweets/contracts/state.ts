export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

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
    avatarUrl: string;
  };
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
  addFormState: AddFormState;
}
