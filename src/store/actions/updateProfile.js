import * as actionTypes from '../actionTypes';

export const updateProfileWatcher = (payload) => ({
    type: actionTypes.UPDATE_PROFILE_WATCHER,
    payload
});

export const updateProfileSuccess = (payload) => ({
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
    payload
});

export const updateProfileError = (payload) => ({
    type: actionTypes.UPDATE_PROFILE_ERROR,
    payload
});
