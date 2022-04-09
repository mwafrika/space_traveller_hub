import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './redux/store';
import RocketList from './components/rockets/RocketList';
import MyProfile from './components/MyProfile';

describe('Main page snapshot tests', () => {
  it('RocketList Page renders correctly', () => {
    const rocketsPage = renderer
      .create(
        <Provider store={store}>
          <RocketList />
        </Provider>,
      )
      .toJSON();
    expect(rocketsPage).toMatchSnapshot();
  });

  it('Dragons Page renders correctly', () => {
    const dragonsPage = renderer
      .create(
        <Provider store={store}>
          <dragons />
        </Provider>,
      )
      .toJSON();
    expect(dragonsPage).toMatchSnapshot();
  });

  it('Missions Page renders correctly', () => {
    const missionsPage = renderer
      .create(
        <Provider store={store}>
          <missions />
        </Provider>,
      )
      .toJSON();
    expect(missionsPage).toMatchSnapshot();
  });

  it('MyProfile Page renders correctly', () => {
    const MyProfilePage = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(MyProfilePage).toMatchSnapshot();
  });
});
