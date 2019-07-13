// Externals
import React from 'react';
import { shallow } from 'enzyme';
import { CircularProgress } from '@material-ui/core';

// Internals
import { Container } from './index';

describe('Test Suite for container', () => {
  let wrapper;
  const containerProps = {
    isLoading: true,
    actions: {
      raiseAction: () => {}
    },
    classes: {}
  };

  beforeEach(() => {
    wrapper = shallow(<Container {...containerProps} />);
  });

  it('Should return loading DOM when isLoading is true', () => {
    expect(wrapper.contains(<CircularProgress />)).toEqual(true);
  });
});
