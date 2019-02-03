import React from "react";
import PropTypes from "prop-types";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";

import { useBottomNavigationSelector } from "./bottom-navigation-selector";
import { bottomNavigationRoutes } from "../navigation";

function BottomNavigation({ classes }) {
  const [bottomTab, setBottomTab] = useBottomNavigationSelector();

  return (
    <MuiBottomNavigation
      value={bottomTab}
      className={classes.root}
      onChange={(e, value) => {
        setBottomTab(value);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        value={bottomNavigationRoutes.home.name}
        icon={<bottomNavigationRoutes.home.icon />}
      />
      <BottomNavigationAction
        label="Workouts"
        value={bottomNavigationRoutes.workouts.name}
        icon={<bottomNavigationRoutes.workouts.icon />}
      />
      <BottomNavigationAction
        label="Exercises"
        value={bottomNavigationRoutes.exercises.name}
        icon={<bottomNavigationRoutes.exercises.icon />}
      />
      <BottomNavigationAction
        label="Progress"
        value={bottomNavigationRoutes.progress.name}
        icon={<bottomNavigationRoutes.progress.icon />}
      />
      <BottomNavigationAction
        label="Profile"
        value={bottomNavigationRoutes.profile.name}
        icon={<bottomNavigationRoutes.profile.icon />}
      />
    </MuiBottomNavigation>
  );
}

BottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => {
  return {
    root: { backgroundColor: theme.palette.secondary.light },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(BottomNavigation);
