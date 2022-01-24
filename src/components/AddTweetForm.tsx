import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import Alert from "@material-ui/lab/Alert";
import { Collapse } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { useHomeStyles } from "../pages/Home/theme";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreators";
import { selectAddFormState } from "../store/ducks/tweets/selectors";
import { AddFormState } from "../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
  maxRows?: number;
}

const MAX_LENGTH = 280;

// TOFIX:
// 1) Разобраться с ошибкой в консоли (elevation is not implemented). Проблема где-то в alert

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = React.useState<string>("");
  const [visibleError, setVisibleError] = React.useState<boolean>(false);
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

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
    setText("");
  };

  return (
    <>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          maxRows={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
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
