import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

it('renders the component without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
