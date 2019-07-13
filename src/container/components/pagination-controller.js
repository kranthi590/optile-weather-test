import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

export default (props) => {
  const { hideNextButton, classes } = props;
  const { onPaginationButtonClick, hidePreviousButton } = props;
  return (
    <Grid container spacing={3}>
      <Grid item sm={1} xs={6}>
        <Button
          className={classes.button}
          color="primary"
          disabled={hidePreviousButton}
          onClick={onPaginationButtonClick}
          value={'previous'}
          variant="contained">
          <ArrowBack fontSize="large"/>
        </Button>
      </Grid>
      <Grid item sm={5} xs={6}/>
      <Grid item sm={5} xs={6}/>
      <Grid item sm={1} xs={6}>
        <Button
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
