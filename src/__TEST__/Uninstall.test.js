import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Uninstall from '../Components/Uninstall/Uninstall';

it('renders the component without crashing', () => {
  render(
    <Provider store={store}>
      <Uninstall />
    </Provider>
  );
});
