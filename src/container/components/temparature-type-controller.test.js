// Externals
import React from 'react';

// Internals
import TemperatureTypeController from './temperature-type-controller';
import ReactDOM from 'react-dom';
import { TEMP_TYPES } from '../../constants';
import { shallow } from 'enzyme';

describe('Test Suite for temperature type controller component', () => {

  const props = {
    currentTempType: TEMP_TYPES.CELCIUS
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TemperatureTypeController {...props}/>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should return empty div if selectedCard is empty', () => {
    const mockOnTempRadioButtonClick = jest.fn();
    props.onTempRadioButtonClick = mockOnTempRadioButtonClick;
    const wrapper = shallow(<TemperatureTypeController {...props} />);
    wrapper.find('#celcius-radio').at(0).simulate('click');
    wrapper.find('#fr-radio').at(0).simulate('click');
    expect(mockOnTempRadioButtonClick).toHaveBeenCalled();
  });

});
