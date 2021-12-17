// States
import {videoListState} from '@states/videosList';
// Interfaces
import {InitialStateType} from './types/state.type';

export const initialState: InitialStateType = {
    videosList: videoListState,
};
