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

import { useHomeStyles } from "../pages/Home/theme";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreators";
import { selectAddFormState } from "../store/ducks/tweets/selectors";

interface AddTweetFormProps {
  maxRows?: number;
}

const MAX_LENGTH = 280;

//TODO:
// 1) Сделать Snackbar для оповещения о состоянии твитта

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = React.useState<string>("");
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  React.useEffect(() => {}, [addFormState]);

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
    <div>
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
            disabled={!text || text.length >= MAX_LENGTH}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
