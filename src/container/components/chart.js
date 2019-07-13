import React from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';
import Chart from 'react-apexcharts';

export default props => {

  const {
    currentTempType,
    selectedCard,
    classes
  } = props;

  if (Object.keys(selectedCard).length === 0) {
    return (<div/>);
  }

  const state = {
    options: {
      chart: {
        id: 'apexchart-example',
        toolbar: {
          show: false
        }
      }, xaxis: {
        categories: [] // hours
      }
    }, series: [{
      name: 'series-1',
      data: [] // temperatures
    }]
  };

  selectedCard.weatherByHours.forEach((weatherByHour) => {
    state.options.xaxis.categories.push(weatherByHour.hour);
    state.series[0].data.push(weatherByHour[currentTempType]);
  });

  return (
    <div className={classes.chart}>
      <Chart height={320} options={state.options} series={state.series} type="bar"/>
      <Grid alignItems="flex-end" container spacing={5}>
        <Grid item sm={5} xs={4}/>
        <Grid item sm={5} xs={4}>
          <Typography variant="h6" component="h6">
            {selectedCard && selectedCard.displayDate}
          </Typography>
        </Grid>
        <Grid item sm={1} xs={4}/>
      </Grid>
    </div>
  );
};
