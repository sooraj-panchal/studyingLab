import { createSelector } from 'reselect';

const updateProfile = state => state.updateProfile;

export const updateProfileSelector = createSelector(
    updateProfile,
    updateProfile => updateProfile.user,
);

export const isLoadingUpdateProfileSelector = createSelector(
    updateProfile,
    updateProfile => updateProfile.isLoading,
);