import {ofType} from 'redux-observable';
import {concat, of} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AjaxResponse} from 'rxjs/ajax';
// Types
import {GenreType} from '@interfaces/Genre.type';
import {VideoType} from '@interfaces/Video.type';
// constants
import {VideosListEnum} from '@enums/actions/VideosList.enum';
// actions
import {
    successVideosList,
    errorVideosList,
    pendingVideosList,
} from '@actions/videosList';
import {errorGenresList, successGenresList} from '@actions/genresList';
// api
import {fetchVideosList} from '@api/videosList';

export const fetchVideosListEpic = (action$: any) =>
    action$.pipe(
        ofType(VideosListEnum.FETCH_VIDEOS_LIST),
        switchMap(() =>
            concat(
                of(pendingVideosList()),
                fetchVideosList().pipe(
                    switchMap(
                        (
                            response: AjaxResponse<{
                                genres: GenreType[];
                                videos: VideoType[];
                            }>,
                        ) => {
                            const data = response.response;
                            if (!data) {
                                return [
                                    errorVideosList(response),
                                    errorGenresList(response),
                                ];
                            }

                            return [
                                successVideosList(data?.videos),
                                successGenresList(data?.genres),
                            ];
                        },
                    ),
                    catchError(err => {
                        return [errorVideosList(err)];
                    }),
                ),
            ),
        ),
    );
