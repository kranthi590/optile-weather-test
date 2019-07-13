import React from 'react';
import { FormControlLabel, Grid, Radio } from '@material-ui/core';
import { TEMP_TYPES } from '../../constants';

export default (props) => {
  const { currentTempType } = props;
  const { onTempRadioButtonClick } = props;
  return (
    <Grid container>
      <Grid item xs={3}/>
      <Grid item xs={3}>
        <FormControlLabel
          checked={currentTempType === TEMP_TYPES.CELCIUS}
          control={<Radio color="primary"/>}
          label="Celsius"
          labelPlacement="end"
          onClick={onTempRadioButtonClick}
          value={TEMP_TYPES.CELCIUS}
        />
      </Grid>
      <Grid item xs={2}/>
      <Grid item xs={3}>
        <FormControlLabel
          checked={currentTempType === TEMP_TYPES.FAHRENHEIT}
          control={<Radio color="primary"/>}
          label="Fahrenheit"
          labelPlacement="end"
          onClick={onTempRadioButtonClick}
          value={TEMP_TYPES.FAHRENHEIT}
        />
      </Grid>

    </Grid>
  );
}
