import {createSelector} from 'reselect';

const loaderSelector = state => state.Loader;

export const isLoadingSelector = createSelector(
  loaderSelector,
  loader => (loader ? loader.isLoading : false),
);
