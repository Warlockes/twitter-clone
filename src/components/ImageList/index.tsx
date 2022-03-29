import React from "react";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

import styles from "./ImageList.module.scss";

interface ImageListProps {
  images: string[];
  onRemove?: (blobUrl: string) => void;
}

export const ImageList: React.FC<ImageListProps> = ({ images, onRemove }) => {
  return (
    <>
      {images.length > 0 && (
        <div className={styles["imageList"]}>
          {images.map((blobUrl) => (
            <div key={blobUrl} className={styles["imageListItem"]}>
              <img src={blobUrl} alt="user" data-zoomable />
              {onRemove && (
                <IconButton
                  className={styles["removeBtn"]}
                  onClick={() => onRemove(blobUrl)}
                >
                  <ClearIcon style={{ fontSize: 15 }} />
                </IconButton>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
