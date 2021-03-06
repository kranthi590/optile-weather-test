// Externals
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Material helpers
import {
  withStyles,
  Container as ThemeContainer,
  CircularProgress
} from '@material-ui/core';

// Internals
import { raiseAction, Actions } from '../actions';
import styles from './styles';
import {
  Chart,
  ErrorComponent,
  PaginationController,
  TemperatureTypeController,
  WeatherCards
} from './components';
import { DISPLAY_CARDS } from '../constants';

export class Container extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT);
  }

  onWeatherCardSelect = (data) => {
    const { actions } = this.props;
    actions.raiseAction(Actions.SET_SELECTED_CARD, data);
  };

  onTempRadioButtonClick = (tempType) => {
    const { actions } = this.props;
    actions.raiseAction(Actions.CHANGE_TEMP_TYPE, tempType);
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

    const { isLoading, classes, weatherData, currentTempType, currentIndex, selectedCard } = this.props;

    if (isLoading) {
      return (<div className={classes.loader}><CircularProgress/></div>);
    }

    if (!weatherData || weatherData.size === 0) {
      return (<ErrorComponent classes={classes} onRefreshClick={this.onRefreshClick}/>);
    }

    const weatherCardsData = weatherData.slice(currentIndex, currentIndex + DISPLAY_CARDS);
    const chartProps = {
      currentTempType,
      selectedCard,
      classes
    };
    const paginationControllerProps = {
      hideNextButton: weatherCardsData.length < DISPLAY_CARDS,
      classes,
      onPaginationButtonClick: this.onPaginationButtonClick,
      hidePreviousButton: currentIndex === 0
    };
    const tempControllerProps = {
      currentTempType,
      onTempRadioButtonClick: this.onTempRadioButtonClick
    };
    const weatherCardsProps = {
      selectedCard,
      classes,
      weatherData: weatherCardsData,
      currentTempType,
      onWeatherCardSelect: this.onWeatherCardSelect
    };
    return (
      <div className={classes.content}>
        <ThemeContainer component="main" maxWidth="md">
          <TemperatureTypeController {...tempControllerProps}/>
          <PaginationController {...paginationControllerProps}/>
          <WeatherCards {...weatherCardsProps}/>
          <Chart {...chartProps}/>
        </ThemeContainer>
      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  weatherData: state.weatherData,
  currentTempType: state.currentTempType,
  currentIndex: state.currentIndex,
  selectedCard: state.selectedCard
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ raiseAction }, dispatch)
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Container));
