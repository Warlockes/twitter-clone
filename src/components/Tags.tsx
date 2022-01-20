import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  CircularProgress,
  Paper,
} from "@material-ui/core";

import { useHomeStyles } from "../pages/Home/theme";
import { fetchTags } from "../store/ducks/tags/actionCreators";
import {
  selectTagsItems,
  selectIsTagsLoading,
} from "../store/ducks/tags/selectors";

export const Tags: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const items = useSelector(selectTagsItems);
  const isLoadingTags = useSelector(selectIsTagsLoading);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      {isLoadingTags ? (
        <div className={classes.rideSideTagsLoader}>
          <CircularProgress />
        </div>
      ) : (
        <List>
          {items.map(({ label, count, _id }) => (
            <React.Fragment key={_id}>
              <ListItem className={classes.rightSideBlockItem}>
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
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
    </>
  );
};
