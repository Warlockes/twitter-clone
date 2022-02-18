import { LoadingStatus } from "../../../types";

export interface Tag {
  _id: string;
  label: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  loadingState: LoadingStatus;
}
