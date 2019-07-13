import React from 'react';
import { Button, Container, Typography, Grid } from '@material-ui/core';
import { NotificationImportant as NotificationIcon } from '@material-ui/icons';

export default props => {
  const { classes, onRefreshClick } = props;
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          color="textPrimary"
          component="h1"
          gutterBottom
          variant="h2"
        >
          Oops! <NotificationIcon fontSize="large" />
        </Typography>
        <Typography
          color="textSecondary"
          paragraph
          variant="h5"
        >
          Weather data is not available right now, please click refresh button
        </Typography>
        <Button
          color="primary"
          onClick={onRefreshClick}
          variant="outlined"
        >
          Refresh
        </Button>
      </Container>
    </div>
  );
};
