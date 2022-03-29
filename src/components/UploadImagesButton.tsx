import React from "react";
import { IconButton } from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";

interface UploadImagesButtonProps {
  onAdd: (blobUrl: string, file: File) => void;
}

export const UploadImagesButton: React.FC<UploadImagesButtonProps> = ({
  onAdd,
}): React.ReactElement => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const input = inputRef.current;

    const handleChangeFileInput = (event: Event) => {
      if (event.target) {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
          const fileObj = new Blob([file]);
          onAdd(URL.createObjectURL(fileObj), file);
        }
      }
    };

    input?.addEventListener("change", handleChangeFileInput);

    return () => {
      input?.removeEventListener("change", handleChangeFileInput);
    };
  }, [onAdd]);

  const handleClickImage = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <IconButton color="primary" onClick={handleClickImage}>
        <ImageOutlinedIcon style={{ fontSize: 26 }} />
      </IconButton>
      <input ref={inputRef} type="file" hidden />
    </>
  );
};
