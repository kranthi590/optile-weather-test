import React from 'react';
import { Button, Container, Typography, Grid } from '@material-ui/core';

export default (classes) => {
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
          Album layout
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}