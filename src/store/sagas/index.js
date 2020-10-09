import {all} from 'redux-saga/effects';
import { getProfileWatcher } from './getProfile';
import { updateProfileWatcher } from './updateProfile';


export default function* rootSaga() {
  yield all([
      getProfileWatcher(),
      updateProfileWatcher()
  ]);
}
