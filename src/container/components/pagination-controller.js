import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

export default (props) => {
  const { hideNextButton, classes } = props;
  const { onPaginationButtonClick, hidePreviousButton } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="flex-start" className={classes.pullLeft}>
        <Button
          id="previousPageButton"
          className={classes.button}
          color="primary"
          disabled={hidePreviousButton}
          onClick={onPaginationButtonClick}
          value={'previous'}
          variant="contained">
          <ArrowBack fontSize="large"/>
        </Button>
      </Grid>
      <Grid item xs={8}/>
      <Grid item xs={2} className={classes.pullRight}>
        <Button
          id="nextPageButton"
          className={classes.button}
          color="primary"
          disabled={hideNextButton}
          onClick={onPaginationButtonClick}
          value={'next'}
          variant="contained">
          <ArrowForward fontSize="large"/>
        </Button>
      </Grid>
    </Grid>
  );
}
