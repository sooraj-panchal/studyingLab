import { combineReducers } from 'redux';
import getProfile from './getProfile';

import Loader from './loader';
import updateProfile from './updateProfile';

export default combineReducers({
  Loader,
  getProfile,
  updateProfile
});
