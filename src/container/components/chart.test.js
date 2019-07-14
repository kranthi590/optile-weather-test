// Externals
import React from 'react';
import { shallow } from 'enzyme';

// Internals
import Chart from './chart';
import { TEMP_TYPES } from '../../constants';
import weatherData from '../../mock-data/weather-data.json';

describe('Test Suite for chart component', () => {

  let wrapper;

  const props = {
    isLoading: true,
    actions: {
      raiseAction: () => {
      }
    },
    classes: {},
    currentTempType: TEMP_TYPES.CELCIUS,
    selectedCard: {}
  };

  beforeEach(() => {
    wrapper = shallow(<Chart {...props} />);
  });

  it('Should return empty div if selectedCard is empty', () => {
    expect(wrapper.contains(<div/>)).toEqual(true);
  });

  it('Should return Chart tag if data is valid', () => {
    props.selectedCard = weatherData[0];
    wrapper = shallow(<Chart {...props} />);
    expect(wrapper.find('#weather-chart').length).toEqual(1);
  });

});
