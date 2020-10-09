import * as actionTypes from '../actionTypes';

export const getProfileWatcher = (payload) => ({
    type: actionTypes.GET_PROFILE_WATCHER,
    payload
});

export const getProfileSuccess = (payload) => ({
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload
});

export const getProfileError = (payload) => ({
    type: actionTypes.GET_PROFILE_ERROR,
    payload
});
