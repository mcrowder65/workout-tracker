import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  fab: {
    position: "fixed",
    bottom: 70,
    right: 10,
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
    alignItems: "center",
  },
});
