import {createStructuredSelector} from 'reselect';
import {
    videosListIsSuccessSelector,
    videosYearsListSelector,
} from '@selectors/selectors/videosList';
import {genresListSelector} from '@selectors/selectors/genresList';

export const videosGenresListStructuredSelector = createStructuredSelector({
    items: videosYearsListSelector,
    genres: genresListSelector,
    isSuccess: videosListIsSuccessSelector,
});
