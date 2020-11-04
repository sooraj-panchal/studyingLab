import * as actionTypes from '../actionTypes';
import updateProfile from './updateProfile';

const initialState = {
    user: null,
    error: null,
    isLoading: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROFILE_WATCHER:
            return {
                ...state,
                user: null,
                error: null,
                isLoading: true
            };
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                isLoading: false,

            };
        case actionTypes.GET_PROFILE_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
