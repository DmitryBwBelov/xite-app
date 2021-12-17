// States
import {videosListState} from '@states/videosList';
import {genresListState} from '@states/genresList';
// Interfaces
import {InitialStateType} from './types/state.type';

export const initialState: InitialStateType = {
    videosList: videosListState,
    genresList: genresListState,
};
