import React from "react";
import PropTypes from "prop-types";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
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
        value={bottomNavigationRoutes.home}
        icon={<Home />}
      />
      <BottomNavigationAction
        label="Workouts"
        value={bottomNavigationRoutes.workouts}
        icon={<FitnessCenter />}
      />
      <BottomNavigationAction
        label="Profile"
        value={bottomNavigationRoutes.profile}
        icon={<Person />}
      />
    </MuiBottomNavigation>
  );
}

BottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => {
  return {
    root: { backgroundColor: theme.palette.secondary.light },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(BottomNavigation);
