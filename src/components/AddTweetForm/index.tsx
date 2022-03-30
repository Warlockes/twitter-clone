import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import Alert from "@material-ui/lab/Alert";
import { Collapse } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import {
  fetchAddTweet,
  setAddFormState,
} from "../../store/ducks/tweets/actionCreators";
import { selectAddFormState } from "../../store/ducks/tweets/selectors";
import { AddFormState } from "../../store/ducks/tweets/contracts/state";
import { selectUserData } from "../../store/ducks/user/selectors";
import { UploadImagesButton } from "../UploadImagesButton";
import { uploadImage } from "../../utils/uploadImage";
import { ImageList } from "../ImageList";
import styles from "./AddTweetForm.module.scss";

interface AddTweetFormProps {
  maxRows?: number;
  onClose?: () => void;
}

interface ImageObj {
  blobUrl: string;
  file: File;
}

const MAX_LENGTH = 280;

// TOFIX:
// 1) Разобраться с ошибкой в консоли (elevation is not implemented). Проблема где-то в alert

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
  onClose,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [visibleError, setVisibleError] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<ImageObj[]>([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const addFormState = useSelector(selectAddFormState);
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  React.useEffect(() => {
    if (addFormState === AddFormState.ERROR) {
      setVisibleError(true);
    }
  }, [addFormState]);

  const handleChangeTextArea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = async (): Promise<void> => {
    const result = [];
    dispatch(setAddFormState(AddFormState.LOADING));

    for (let i = 0; i < images.length; i++) {
      const file = images[i].file;
      const { url } = await uploadImage(file);
      result.push(url);
    }

    dispatch(fetchAddTweet({ text, images: result }));
    setText("");
    setImages([]);
    onClose?.();
  };

  const handleAddImage = React.useCallback((blobUrl: string, file: File) => {
    setImages((prev) => [
      ...prev,
      {
        blobUrl,
        file,
      },
    ]);
  }, []);

  const handleRemoveImage = (blobUrl: string) => {
    setImages((prev) => prev.filter((obj) => obj.blobUrl !== blobUrl));
  };

  return (
    <>
      <div className={styles.addFormBody}>
        <Avatar
          className={styles.tweetAvatar}
          alt={user?.fullname}
          src={"Ссылка на аватар"}
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={styles.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          maxRows={maxRows}
        />
      </div>
      <div className={styles.addFormBottom}>
        <div
          className={classNames(
            styles.tweetFooter,
            styles.addFormBottomActions
          )}
        >
          <UploadImagesButton onAdd={handleAddImage} />
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={styles.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={styles.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: "red" } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={
              !text ||
              text.length >= MAX_LENGTH ||
              addFormState === AddFormState.LOADING
            }
            color="primary"
            variant="contained"
          >
            Твитнуть
            {addFormState === AddFormState.LOADING && (
              <CircularProgress
                style={{ marginLeft: 10 }}
                color="inherit"
                size={18}
              />
            )}
          </Button>
        </div>
      </div>
      <ImageList
        images={images.map((image) => image.blobUrl)}
        onRemove={handleRemoveImage}
      />
      <Collapse in={visibleError}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setVisibleError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Ошибка при добавлении твита!
        </Alert>
      </Collapse>
    </>
  );
};
