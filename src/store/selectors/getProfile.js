import { createSelector } from 'reselect';

const getProfile = state => state.getProfile;

export const getProfileSelector = createSelector(
    getProfile,
    userDetails => userDetails.user,
);

