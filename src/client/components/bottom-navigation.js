import React from "react";
import PropTypes from "prop-types";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Restore from "@material-ui/icons/Restore";

import LocationOn from "@material-ui/icons/LocationOn";

import Favorite from "@material-ui/icons/Favorite";
import compose from "lodash.compose";

function BottomNavigation(props) {
  return (
    <MuiBottomNavigation>
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
    </MuiBottomNavigation>
  );
}

BottomNavigation.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(BottomNavigation);
