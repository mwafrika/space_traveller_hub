/* eslint-disable jsx-quotes */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createRoot } from 'react-dom/client';
import store from '../redux/store';
import '@testing-library/jest-dom';
import Dragon from '../components/dragon/dragon';

describe('Test dragons list', () => {
  it('should return the dragons to passto the childelements', () => {
    const dragon = {
      id: 'dragon1',
      name: 'Dragon 1',
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
      type: 'Rocket',
      reserved: false,
    };
    const reservedItems = [
      {
        id: dragon.id,
        name: dragon.name,
        reserved: dragon.reserved,
      },
    ];
    const div = document.createElement('div');
    createRoot(div).render(
      <Dragon title='My Dragons' reservedItems={reservedItems} />,
    );
    const tree = renderer.create(
      <Provider store={store}>
        <Dragon key={dragon.id} dragon={dragon} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
