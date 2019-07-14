import createStore, { middleWares } from './index';

describe('Test Suite for store', () => {

  let store;

  beforeEach(() => {
    store = createStore({}, process.env.NODE_ENV);
  });

  it('Should create store', () => {
    expect(store).toBeDefined();
  });

  it('Should include reduxLogger middleware when env = development', () => {
    store = createStore({}, 'development');
    expect(middleWares.length).toEqual(2);
  });

});
