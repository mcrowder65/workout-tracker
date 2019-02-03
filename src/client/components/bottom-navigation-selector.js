import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import useState from "use-local-storage-set-state";

const BnsContext = React.createContext();
function BottomNavigationSelectorProvider({ children }) {
  const [bottomTab, setBottomTab] = useState(0, "bottom-navigation-tab");

  return (
    <BnsContext.Provider value={{ bottomTab, setBottomTab }}>
      {typeof children === "function"
        ? children({ bottomTab, setBottomTab })
        : children}
    </BnsContext.Provider>
  );
}

BottomNavigationSelectorProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(BottomNavigationSelectorProvider);

export function useBottomNavigationSelector() {
  const { bottomTab, setBottomTab } = React.useContext(BnsContext);
  return [bottomTab, setBottomTab];
}
