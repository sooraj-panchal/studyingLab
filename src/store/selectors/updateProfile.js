import { createSelector } from 'reselect';

const updateProfile = state => state.updateProfile;

export const updateProfileSelector = createSelector(
    updateProfile,
    userDetails => userDetails.user,
);

