import { axios } from "../core/axios";

interface UploadImageResponse {
  height: number;
  width: number;
  url: string;
  size: number;
}

export const uploadImage = async (file: File): Promise<UploadImageResponse> => {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
