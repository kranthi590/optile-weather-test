// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Material helpers
import {
  withStyles,
  Container as ThemeContainer,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  CircularProgress
} from '@material-ui/core';
import { WbSunny as WbSunnyIcon } from '@material-ui/icons';

// Internals
import { raiseAction, Actions } from '../actions';
import styles from './styles';
import Weather from './components/weather';
import ErrorComponent from './components/error-component';

export class Container extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT);
  }

  onWeatherCardSelect = (date) => {
    const { actions } = this.props;
    actions.raiseAction(Actions.SET_SELECTED_CARD, date);
  };

  onTempRadioButtonClick = (event) => {
    const { actions } = this.props;
    actions.raiseAction(Actions.CHANGE_TEMP_TYPE, event.target.value);
  };

  onRefreshClick = () => {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT);
  };

  onPaginationButtonClick = (event) => {
    const eventType = event.currentTarget.value;
    const { actions, currentIndex } = this.props;
    actions.raiseAction(Actions.SET_CURRENT_INDEX, eventType === 'previous' ? currentIndex - 1 : currentIndex + 1);
  };

  render() {

    const { isLoading, classes, weatherData, currentTempType, currentIndex } = this.props;

    let renderComponent;
    if (isLoading) {
      renderComponent = <div className={classes.loader}><CircularProgress/></div>;
    } else if (!weatherData || weatherData.size === 0) {
      renderComponent = <ErrorComponent classes={classes} onRefreshClick={this.onRefreshClick}/>;
    } else {
      const weatherCardsData = weatherData.slice(currentIndex, currentIndex + 3);
      const weatherProps = {
        classes,
        currentTempType,
        currentIndex,
        weatherData: weatherCardsData,
        onTempRadioButtonClick: this.onTempRadioButtonClick,
        onWeatherCardSelect: this.onWeatherCardSelect,
        onPaginationButtonClick: this.onPaginationButtonClick,
        hidePreviousButton: currentIndex === 0,
        hideNextButton: weatherCardsData.length < 3
      };
      renderComponent = <Weather {...weatherProps}/>;
    }

    return (
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="relative" color="primary">
          <Toolbar color="primary" variant="dense">
            <WbSunnyIcon className={classes.icon}/>
            <Typography variant="h6" color="inherit" noWrap>
              Weather Now
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <ThemeContainer maxWidth="lg">
            {renderComponent}
          </ThemeContainer>
        </main>
      </React.Fragment>
    );

  }
}

Container.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currentTempType: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.isLoading,
  weatherData: state.weatherData,
  currentTempType: state.currentTempType,
  currentIndex: state.currentIndex
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ raiseAction }, dispatch)
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Container));
