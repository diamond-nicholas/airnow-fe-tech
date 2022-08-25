import installedReducer from './installed';
import unInstalledReducer from './uninstalled';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  install: installedReducer,
  unInstall: unInstalledReducer,
});

export default allReducers;
