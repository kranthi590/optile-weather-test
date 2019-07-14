// Externals
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// Internals
import WeatherCards, { WeatherCard } from './weather-cards';
import { TEMP_TYPES } from '../../constants';
import weatherData from '../../mock-data/weather-data.json';

describe('Test Suite for Weather cards', () => {

  const props = {
    currentTempType: TEMP_TYPES.CELCIUS,
    selectedCard: weatherData[0],
    classes: {},
    weatherData,
    value: weatherData[0],
    index: 0
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WeatherCards {...props}/>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should call onWeatherCardSelect function on card click', () => {
    const mockOnWeatherCardSelect = jest.fn();
    props.onWeatherCardSelect = mockOnWeatherCardSelect;
    const wrapper = shallow(<WeatherCard {...props} />);
    wrapper.find('#weather-card-' + 0).simulate('click');
    expect(mockOnWeatherCardSelect).toHaveBeenCalled();
  });

});
