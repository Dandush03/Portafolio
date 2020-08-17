import { combineReducers } from 'redux';

import LoadingReducer from './loadingReducer';

export default combineReducers({
  loadingItems: LoadingReducer,
});
