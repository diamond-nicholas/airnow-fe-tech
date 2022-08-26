import React from 'react';
import Install from '../Components/Install/Install';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

it('renders the component without crashing', () => {
  render(
    <Provider store={store}>
      <Install />
    </Provider>
  );
});
