import React from 'react';
import { Button, Container, Typography, Grid } from '@material-ui/core';
import { NotificationImportant as NotificationIcon } from '@material-ui/icons';

export default (props) => {
  const {
    classes,
    onRefreshClick
  } = props;
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
          Oops! <NotificationIcon fontSize="large"/>
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Weather data is not available right now, please click refresh button
        </Typography>
        <Button variant="outlined" color="primary" onClick={onRefreshClick}>
          Refresh
        </Button>
      </Container>
    </div>
  );
}
