import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Grid, Card } from "@material-ui/core";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import EditExercise from "./edit-exercise";
import useState from "use-local-storage-set-state";

function Exercise({ title, removeExercise, id, classes, editExercise }) {
  const [isEditExerciseModalOpen, setEditExerciseModalOpen] = useState(
    false,
    "edit-exercise-modal",
  );
  return (
    <Card className={classes.card}>
      <EditExercise
        isEditEditExerciseOpen={isEditExerciseModalOpen}
        setEditExerciseModalOpen={setEditExerciseModalOpen}
        editExercise={editExercise}
        id={id}
        title={title}
      />
      <Grid
        className={classes.content}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <div>
            <Typography
              variant="h6"
              style={{ fontSize: "5vw" }}
              noWrap
              paragraph
              inline
            >
              {title}
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          className={classes.buttons}
          direction="row"
          justify="space-around"
        >
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => setEditExerciseModalOpen(true)}
            >
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => removeExercise(id)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

Exercise.propTypes = {
  title: PropTypes.string.isRequired,
  removeExercise: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  editExercise: PropTypes.func.isRequired,
};

Exercise.defaultProps = {
  editExercise: () => ({}),
};
const styles = {
  card: {
    padding: 5,
    width: 150,
    height: 80,
  },
  content: {
    height: "100%",
    width: "100%",
  },
  buttons: {
    width: "100%",
  },
};

const enhance = compose(withStyles(styles));
export default enhance(Exercise);
