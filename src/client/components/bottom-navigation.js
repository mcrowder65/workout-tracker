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
import { useBottomNavigationSelector } from "./bottom-navigation-selector";

function BottomNavigation({ classes }) {
  const [bottomTab, setBottomTab] = useBottomNavigationSelector();

  console.log("bottomTab", bottomTab);
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
        label="Recents"
        icon={<Restore />}
        onClick={setBottomTab}
      />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
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
