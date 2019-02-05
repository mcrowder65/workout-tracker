import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Modal as MuiModal, Card, Grid, Button } from "@material-ui/core";

function Modal({
  classes,
  onSubmit,
  children,
  cancelText,
  submitText,
  onCancelClick,
  open,
}) {
  return (
    <MuiModal className={classes.modal} open={open}>
      <Card className={classes.card}>
        <form onSubmit={onSubmit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {children}
            <Grid
              item
              container
              direction="row"
              justify="space-around"
              className={classes.buttons}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onCancelClick}
                >
                  {cancelText}
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  {submitText}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Card>
    </MuiModal>
  );
}

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  cancelText: PropTypes.string,
  submitText: PropTypes.string,
};

Modal.defaultProps = {
  cancelText: "cancel",
  submitText: "submit",
};
const styles = (theme) => ({
  modal: theme.modal,
  buttons: { margin: 10 },
  card: {
    width: "100%",
  },
});

const enhance = compose(withStyles(styles));
export default enhance(Modal);
