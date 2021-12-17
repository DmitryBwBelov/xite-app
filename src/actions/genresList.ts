// Enums
import {GenresListEnum} from '@enums/actions/GenresList.enum';
// Types
import {GenreType} from '@interfaces/Genre.type';

export const successGenresList = (payload: GenreType[]) => ({
    type: GenresListEnum.FETCH_GENRES_LIST_SUCCESS,
    payload,
});

export const errorGenresList = (error: any) => ({
    type: GenresListEnum.FETCH_GENRES_LIST_ERROR,
    error,
});
