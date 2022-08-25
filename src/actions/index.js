import * as actions from './actionTypes';

export const data = (sdks) => ({
  type: actions.INSTALLED_SDK,
  payload: sdks,
});

export const undata = (sdks) => ({
  type: actions.UNINSTALLED_SDK,
  payload: sdks,
});
