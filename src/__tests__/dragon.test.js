/* eslint-disable jsx-quotes */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import '@testing-library/jest-dom';
import Dragon from '../components/dragon/dragon';

describe('Test profile page', () => {
  it('should print dragons very well', () => {
    const dragon = {
      id: 'dragon1',
      name: 'Dragon 1',
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
      type: 'Rocket',
      reserved: false,
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Dragon key={dragon.id} dragon={dragon} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
