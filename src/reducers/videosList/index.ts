// Modules
import produce from 'immer';
// States
import {videosListState} from '@states/videosList';
// Types
import {VideoType} from '@interfaces/Video.type';
import {PayloadSearchInterface} from '@interfaces/videosList/PayloadSearch.type';
import {ActionType} from '@interfaces/Action.type';
import {StateType} from '@interfaces/State.type';
// Enums
import {VideosListEnum} from '@enums/actions/VideosList.enum';
import {StatusEnum} from '@enums/Status.enum';

export const videosListReducer = (
    state = videosListState,
    {payload, type}: ActionType<VideoType[] | PayloadSearchInterface>,
) =>
    produce(state, (draft: StateType<VideoType[], PayloadSearchInterface>) => {
        switch (type) {
            case VideosListEnum.FETCH_VIDEOS_LIST_SUCCESS:
                draft.items = payload as VideoType[];
                draft.filteredItems = payload as VideoType[];
                draft.status = StatusEnum.SUCCESS;
                break;

            case VideosListEnum.FETCH_VIDEOS_LIST_ERROR:
                draft.status = StatusEnum.ERROR;
                break;

            case VideosListEnum.FETCH_VIDEOS_LIST_PENDING:
                draft.status = StatusEnum.PENDING;
                break;

            case VideosListEnum.FETCH_VIDEOS_LIST_SEARCH:
                let filters = {
                    ...state.filterParams,
                    ...payload,
                } as PayloadSearchInterface;
                const {query, year, tags} = filters;
                let items = [...state.items];

                console.log(filters);

                if (query) {
                    items = items.filter(
                        ({artist, title}) =>
                            `${artist}`
                                .toLowerCase()
                                .includes(query.toLowerCase()) ||
                            `${title}`
                                .toLowerCase()
                                .includes(query.toLowerCase()),
                    );
                }

                if (year) {
                    items = items.filter(
                        ({release_year}) => release_year === year,
                    );
                }

                if (tags) {
                    items = items.filter(
                        // @ts-ignore
                        ({genre_id}) => genre_id && tags.includes(genre_id),
                    );
                }

                draft.filteredItems = [...items];
                draft.filterParams = filters;
                break;
        }
    });
