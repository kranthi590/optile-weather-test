import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';

export default (props) => {
  const { selectedCard, classes, weatherData, currentTempType } = props;
  const { onWeatherCardSelect } = props;
  return (
    <Grid alignItems="flex-end" container spacing={5}>
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
            <WeatherCard {...weatherCardProps}/>
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
    <Grid item key={index} md={4} sm={6} xs={12}>
      <Card
        className={cardClasses}
        onClick={() => {
          onWeatherCardSelect(value);
        }}>
        <CardContent>
          <ul>
            <li>
              <Typography variant="h6">
                Temp: {value[currentTempType]}
              </Typography>
            </li>
            <li>Date: {value.displayDate}</li>
          </ul>
        </CardContent>
      </Card>
    </Grid>
  );
};
