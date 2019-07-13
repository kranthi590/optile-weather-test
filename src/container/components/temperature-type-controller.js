import React from 'react';
import { FormControlLabel, Grid, Radio } from '@material-ui/core';
import { TEMP_TYPES } from '../../constants';

export default (props) => {
  const { currentTempType } = props;
  const { onTempRadioButtonClick } = props;
  return (
    <Grid container spacing={3}>
      <Grid item sm={3} xs={6}/>
      <Grid item sm={3} xs={6}>
        <FormControlLabel
          checked={currentTempType === TEMP_TYPES.CELCIUS}
          control={<Radio color="primary"/>}
          label="Celsius"
          labelPlacement="start"
          onClick={onTempRadioButtonClick}
          value={TEMP_TYPES.CELCIUS}
        />
      </Grid>
      <Grid item sm={3} xs={6}>
        <FormControlLabel
          checked={currentTempType === TEMP_TYPES.FAHRENHEIT}
          control={<Radio color="primary"/>}
          label="Fahrenheit"
          labelPlacement="start"
          onClick={onTempRadioButtonClick}
          value={TEMP_TYPES.FAHRENHEIT}
        />
      </Grid>
      <Grid item sm={3} xs={6}/>
    </Grid>
  );
}
