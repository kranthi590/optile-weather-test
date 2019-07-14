import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { NotificationImportant as NotificationIcon } from '@material-ui/icons';

export default props => {
  const { onRefreshClick } = props;
  return (
    <Container maxWidth="sm">
      <Typography
        color="textPrimary"
        component="h1"
        gutterBottom
        variant="h2"
      >
        Oops! <NotificationIcon fontSize="large"/>
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
        id="refresh"
      >
        Refresh
      </Button>
    </Container>
  );
};
