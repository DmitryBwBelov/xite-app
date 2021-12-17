import {createSelector} from 'reselect';
import {StatusEnum} from '@enums/Status.enum';
// Types
import {VideoType} from '@interfaces/Video.type';
import {genresListSelector} from '@selectors/selectors/genresList';
import {GenreType} from '@interfaces/Genre.type';

export const videosListRootSelector = ({videosList}: any) => videosList;

export const videosListFullSelector = createSelector(
    videosListRootSelector,
    ({items}) => items,
);

export const videosListSelector = createSelector(
    [videosListRootSelector, genresListSelector],
    ({filteredItems}, genres) =>
        filteredItems.map((item: VideoType) => ({
            ...item,
            genre: genres.find(({id}: GenreType) => item.genre_id === id),
        })),
);

export const videosYearsListSelector = createSelector(
    videosListFullSelector,
    items =>
        items
            .filter(
                (value: VideoType, index: number, self: VideoType[]) =>
                    index ===
                    self.findIndex(
                        (t: VideoType) => t.release_year === value.release_year,
                    ),
            )
            .sort(
                (a: VideoType, b: VideoType) => b.release_year - a.release_year,
            ),
);

export const videosListIsPendingSelector = createSelector(
    videosListRootSelector,
    ({status}) => status === StatusEnum.PENDING,
);

export const videosListIsSuccessSelector = createSelector(
    videosListRootSelector,
    ({status}) => status === StatusEnum.SUCCESS,
);

export const videosListIsErrorSelector = createSelector(
    videosListRootSelector,
    ({status}) => status === StatusEnum.ERROR,
);
