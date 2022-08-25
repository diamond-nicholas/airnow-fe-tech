import * as actions from '../actions/actionTypes';
const initalState = {
  Data: [],
  isLoading: false,
  isError: false,
};

const unInstalledReducer = (state = initalState, { type, payload }) => {
  if (type === actions.UNINSTALLED_SDK) {
    return {
      ...state,
      Data: payload,
      isLoading: false,
    };
  } else return state;
};

export default unInstalledReducer;
