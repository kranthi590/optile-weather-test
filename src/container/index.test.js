// Externals
import React from 'react';
import { shallow, mount } from 'enzyme';
import { CircularProgress } from '@material-ui/core';
import { Provider } from 'react-redux';

// Internals
import WeatherContainer, { Container } from './index';
import weatherData from '../mock-data/weather-data.json';
import { TEMP_TYPES } from '../constants';
import createStore from '../store';

describe('Test Suite for container', () => {

  let wrapper, mountedComponent;

  const containerProps = {
    isLoading: false,
    weatherData: weatherData,
    currentTempType: TEMP_TYPES.CELCIUS,
    currentIndex: 0,
    selectedCard: weatherData[0],
    actions: {
      raiseAction: () => {
      }
    },
    classes: {},
    onWeatherCardSelect: jest.fn()
  };

  it('Should return CircularProgress DOM when isLoading is true', () => {
    containerProps.isLoading = true;
    wrapper = shallow(<Container {...containerProps} />);
    expect(wrapper.contains(<CircularProgress/>)).toEqual(true);
  });

  it('Should call onRefreshClick when refresh button is clicked', () => {
    containerProps.isLoading = false;
    containerProps.weatherData = null;
    const mockOnRefreshClick = jest.fn();
    mountedComponent = mount(<Container {...containerProps} />);
    mountedComponent.setProps('onRefreshClick', mockOnRefreshClick);
    mountedComponent.find('#refresh').at(0).simulate('click');
    expect(mockOnRefreshClick).toHaveBeenCalled();
  });

  it('Should call functions when the buttons or radio are clicked', (done) => {
    mountedComponent = mount(<Provider store={createStore()}><WeatherContainer/></Provider>);
    const mockOnWeatherCardSelect = jest.fn();
    const mockOnTempRadioButtonClick = jest.fn();
    const mockOnPaginationButtonClick = jest.fn();

    mountedComponent.setProps('onWeatherCardSelect', mockOnWeatherCardSelect);
    mountedComponent.setProps('onTempRadioButtonClick', mockOnTempRadioButtonClick);
    mountedComponent.setProps('onPaginationButtonClick', mockOnPaginationButtonClick);

    setTimeout(() => {
      mountedComponent.update();
      mountedComponent.find('#weather-card-' + 0).at(0).simulate('click');
      mountedComponent.find('#celcius-radio').at(0).simulate('click');
      mountedComponent.find('#pageButton').at(0).find('button').simulate('click');
      expect(mockOnWeatherCardSelect).toHaveBeenCalled();
      expect(mockOnTempRadioButtonClick).toHaveBeenCalled();
      expect(mockOnPaginationButtonClick).toHaveBeenCalled();
      done();
    }, 2000);
  });

});
