import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  CircularProgress,
  Paper,
} from "@material-ui/core";

import { fetchTags } from "../../store/ducks/tags/actionCreators";
import {
  selectTagsItems,
  selectIsTagsLoading,
} from "../../store/ducks/tags/selectors";
import styles from "./Tags.module.scss";

export const Tags: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const items = useSelector(selectTagsItems);
  const isLoadingTags = useSelector(selectIsTagsLoading);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <Paper className={styles["rightSideBlockHeader"]} variant="outlined">
        <Typography component="b">Актуальные темы</Typography>
      </Paper>
      {isLoadingTags ? (
        <div className={styles["rightSideTagsLoader"]}>
          <CircularProgress />
        </div>
      ) : (
        <List>
          {items.map(({ label, count, _id }) => (
            <React.Fragment key={_id}>
              <ListItem className={styles["rightSideBlockItem"]}>
                <Link to={`/home/search?q=${label}`}>
                  <ListItemText
                    primary={label}
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        Твитов: {count}
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>

              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
    </>
  );
};
