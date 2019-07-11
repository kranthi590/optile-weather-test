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
import { TEMP_TYPES } from '../../constants';

const tiers = [
  {
    title: 'Pro',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined'
  },
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
  },

  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  }
];

const cardsSize = 3;

export default (props) => {

  const {
    classes,
    currentTempType,
    onTempRadioButtonClick,
    currentIndex,
    weatherData
  } = props;

  const cards = [];

  for (let dateKey in weatherData) {
    cards.push(
      <Grid item key={dateKey} xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <div className={classes.cardPricing}>
              <Typography component="h2" variant="h3" color="textPrimary">
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Temp: {weatherData[dateKey][currentTempType]}
              </Typography>
            </div>
            <ul>
              <li>
                Date: {weatherData[dateKey].displayDate}
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    );
  }

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
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
          </Grid>
          <Grid item xs={6} sm={4}>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={5} alignItems="flex-end">
          {cards}
        </Grid>
      </Container>
    </div>
  );
}
