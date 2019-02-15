import React from "react";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import Fab from "../../reusable/fab";
import useState from "use-local-storage-set-state";
import AddWorkout from "./add-workout";

function Workouts() {
  const [open, setOpen] = useState(false, "add-workout-modal");
  return (
    <div>
      workouts
      <AddWorkout setOpen={setOpen} open={open} />
      <Fab />
    </div>
  );
}

Workouts.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Workouts);
