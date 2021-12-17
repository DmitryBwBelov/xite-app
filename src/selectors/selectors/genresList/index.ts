import {createSelector} from 'reselect';

export const genresListRootSelector = ({genresList}: any) => genresList;

export const genresListSelector = createSelector(
    genresListRootSelector,
    ({items}) => items,
);
