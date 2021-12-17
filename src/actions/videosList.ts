// Enums
import {VideosListEnum} from '@enums/actions/VideosList.enum';
// Types
import {VideoType} from '@interfaces/Video.type';
import {PayloadSearchInterface} from '@interfaces/VideosList/PayloadSearch.type';

export const fetchVideosList = () => ({
    type: VideosListEnum.FETCH_VIDEOS_LIST,
});

export const filterVideosList = (payload: null | PayloadSearchInterface) => ({
    type: VideosListEnum.FETCH_VIDEOS_LIST_SEARCH,
    payload,
});

export const pendingVideosList = () => ({
    type: VideosListEnum.FETCH_VIDEOS_LIST_PENDING,
});

export const successVideosList = (payload: VideoType[]) => ({
    type: VideosListEnum.FETCH_VIDEOS_LIST_SUCCESS,
    payload,
});

export const errorVideosList = (error: any) => ({
    type: VideosListEnum.FETCH_VIDEOS_LIST_ERROR,
    error,
});
