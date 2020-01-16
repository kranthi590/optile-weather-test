import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { isMobile } from '../../utils';
import { TEMP_TYPES } from '../../constants';

export default (props) => {
  const { selectedCard, classes, weatherData, currentTempType } = props;
  const { onWeatherCardSelect } = props;
  return (
    <Grid direction={isMobile() ? 'column' : 'row'} container spacing={2} alignContent="center">
      {
        weatherData.map((value, index) => {
          const weatherCardProps = {
            classes,
            selectedCard,
            onWeatherCardSelect,
            currentTempType,
            value,
            index
          };
          return (
            <WeatherCard {...weatherCardProps} key={index}/>
          );
        })
      }
    </Grid>
  );
}

export const WeatherCard = (props) => {
  const {
    classes,
    selectedCard,
    onWeatherCardSelect,
    currentTempType,
    value,
    index
  } = props;
  const cardClasses = classNames(
    classes.weatherCard,
    value.date === selectedCard.date ? classes.selectedCard : undefined
  );
  return (
    <Grid item key={index} xs={isMobile() ? 12 : 4}>
      <Card
        id={'weather-card-' + index}
        className={cardClasses}
        onClick={() => {
          onWeatherCardSelect(value);
        }}>
        <CardContent>
          <ul>
            <li>
              <Typography variant="h6">
                Temp: {value[currentTempType]} {currentTempType === TEMP_TYPES.CELCIUS ? "° C" : "° F"}
              </Typography>
            </li>
            <li>Date: {value.displayDate}</li>
          </ul>
        </CardContent>
      </Card>
    </Grid>
  );
};
