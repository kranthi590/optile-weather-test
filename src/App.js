import React, { Component } from 'react';
import { Provider } from 'react-redux';
import WeatherContainer from './container';
import createStore from './store';
import {
  AppBar,
  Container as ThemeContainer,
  CssBaseline,
  Toolbar,
  Typography
} from '@material-ui/core';
import { WbSunny as WbSunnyIcon } from '@material-ui/icons';

const store = createStore();

export default class Dashboard extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <AppBar
            color="primary"
            position="relative"
          >
            <Toolbar
              color="primary"
              variant="dense"
            >
              <WbSunnyIcon />
              <Typography
                color="inherit"
                noWrap
                variant="h6"
              >
                Weather Now
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <ThemeContainer maxWidth="lg">
              <WeatherContainer />
            </ThemeContainer>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}
