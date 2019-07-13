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
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 20, 49, 60, 70, 91]
    }
  ]
};

export default props => {
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
      <Grid
        item
        key={index}
        md={4}
        sm={6}
        xs={12}
      >
        <Card className={value.isSelected ? classes.selectedCard : undefined}>
          <CardContent
            onClick={() => {
              onWeatherCardSelect(value.date);
            }}
          >
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
  });

  return (
    <div className={classes.content}>
      <Container
        component="main"
        maxWidth="md"
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            sm={3}
            xs={6}
          />
          <Grid
            item
            sm={3}
            xs={6}
          >
            <FormControlLabel
              checked={currentTempType === TEMP_TYPES.CELCIUS}
              control={<Radio color="primary" />}
              label="Celsius"
              labelPlacement="start"
              onClick={onTempRadioButtonClick}
              value={TEMP_TYPES.CELCIUS}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
          >
            <FormControlLabel
              checked={currentTempType === TEMP_TYPES.FAHRENHEIT}
              control={<Radio color="primary" />}
              label="Fahrenheit"
              labelPlacement="start"
              onClick={onTempRadioButtonClick}
              value={TEMP_TYPES.FAHRENHEIT}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
          />
        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            sm={1}
            xs={6}
          >
            <Button
              className={classes.button}
              color="primary"
              disabled={hidePreviousButton}
              onClick={onPaginationButtonClick}
              value={'previous'}
              variant="contained"
            >
              <ArrowBack fontSize="large" />
            </Button>
          </Grid>
          <Grid
            item
            sm={5}
            xs={6}
          />
          <Grid
            item
            sm={5}
            xs={6}
          />
          <Grid
            item
            sm={1}
            xs={6}
          >
            <Button
              className={classes.button}
              color="primary"
              disabled={hideNextButton}
              onClick={onPaginationButtonClick}
              value={'next'}
              variant="contained"
            >
              <ArrowForward fontSize="large" />
            </Button>
          </Grid>
        </Grid>
        <Grid
          alignItems="flex-end"
          container
          spacing={5}
        >
          {cards}
        </Grid>
        <Chart
          height={320}
          options={state.options}
          series={state.series}
          type="bar"
          width={500}
        />
        {selectedCard && selectedCard.displayDate}
      </Container>
    </div>
  );
};
