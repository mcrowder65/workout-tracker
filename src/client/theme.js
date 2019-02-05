import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  fab: {
    position: "absolute",
    bottom: 70,
    right: 10,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
