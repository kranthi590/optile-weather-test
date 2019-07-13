import React from 'react';
import { Provider } from 'react-redux';
import WeatherContainer from './container';
import createStore from './store';
import { AppBar, Container as ThemeContainer, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { WbSunny as WbSunnyIcon } from '@material-ui/icons';

export default () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="relative" color="primary">
          <Toolbar color="primary" variant="dense">
            <WbSunnyIcon/>
            <Typography variant="h6" color="inherit" noWrap>
              Weather Now
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <ThemeContainer maxWidth="lg">
            <WeatherContainer/>
          </ThemeContainer>
        </main>
      </React.Fragment>
    </Provider>
  );
}
