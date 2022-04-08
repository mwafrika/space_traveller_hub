/* eslint-disable jsx-quotes */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Button from '../codeToTest';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    createRoot(div).render(<Button />);
  });
  it('it should print the correct button with data', () => {
    render(<Button type='button'>Click me!</Button>);
  });

  it('should match the snapshot', () => {
    const snap = renderer
      .create(<Button type='button'>Welcome</Button>)
      .toJSON();

    expect(snap).toMatchSnapshot();
  });
});
