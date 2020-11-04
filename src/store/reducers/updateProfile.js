import * as actionTypes from '../actionTypes';

const initialState = {
    user: null,
    error: null,
    isLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROFILE_WATCHER:
            return {
                ...state,
                user: null,
                error: null,
                isLoading: true
            };
        case actionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                isLoading: false
            };
        case actionTypes.UPDATE_PROFILE_ERROR:
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
