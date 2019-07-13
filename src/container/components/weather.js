import React from 'react';
import {
  Typography,
  Grid,
  Paper,
  FormControlLabel,
  TextField,
  Checkbox,
  CardActions,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import { TEMP_TYPES } from '../../constants';
import Chart from 'react-apexcharts';


const state = {
  options: {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [16, 17, 18, 19, 20, 21, 22, 23]
    }
  },
  series: [{
    name: 'series-1',
    data: [30, 40, 45, 20, 49, 60, 70, 91]
  }]
};

export default (props) => {

  const {
    classes,
    currentTempType,
    onTempRadioButtonClick,
    currentIndex,
    weatherData,
    onWeatherCardSelect,
    onPaginationButtonClick,
    hidePreviousButton,
    hideNextButton
  } = props;

  let selectedCard = null;

  const cards = [];
  weatherData.forEach((value, index) => {
    if (value.isSelected) {
      selectedCard = value;
    }
    cards.push(
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card className={value.isSelected ? classes.selectedCard : undefined}>
          <CardContent onClick={() => {
            onWeatherCardSelect(value.date);
          }}>
            <ul>
              <li>
                <Typography variant="h6">
                  Temp: {value[currentTempType]}
                </Typography>
              </li>
              <li>
                Date: {value.displayDate}
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.content}>
      <Container maxWidth="md" component="main">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControlLabel
              value={TEMP_TYPES.CELCIUS}
              control={<Radio color="primary"/>}
              label="Celsius"
              labelPlacement="start"
              checked={currentTempType === TEMP_TYPES.CELCIUS}
              onClick={onTempRadioButtonClick}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControlLabel
              value={TEMP_TYPES.FAHRENHEIT}
              control={<Radio color="primary"/>}
              label="Fahrenheit"
              labelPlacement="start"
              checked={currentTempType === TEMP_TYPES.FAHRENHEIT}
              onClick={onTempRadioButtonClick}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={1}>
            <Button variant="contained" color="primary" className={classes.button} value={'previous'}
                    disabled={hidePreviousButton} onClick={onPaginationButtonClick}>
              <ArrowBack fontSize="large"/>
            </Button>
          </Grid>
          <Grid item xs={6} sm={5}>
          </Grid>
          <Grid item xs={6} sm={5}>
          </Grid>
          <Grid item xs={6} sm={1}>
            <Button variant="contained" color="primary" className={classes.button} value={'next'}
                    disabled={hideNextButton} onClick={onPaginationButtonClick}>
              <ArrowForward fontSize="large"/>
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={5} alignItems="flex-end">
          {cards}
        </Grid>
        <Chart options={state.options} series={state.series} type="bar" width={500} height={320}/>
        {selectedCard && selectedCard.displayDate}
      </Container>
    </div>
  );
}
