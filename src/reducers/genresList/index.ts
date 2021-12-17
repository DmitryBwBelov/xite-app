// Modules
import produce from 'immer';
// States
import {genresListState} from '@states/genresList';
// Types
import {GenreType} from '@interfaces/Genre.type';
import {ActionType} from '@interfaces/Action.type';
import {StateType} from '@interfaces/State.type';
// Enums
import {StatusEnum} from '@enums/Status.enum';
import {GenresListEnum} from '@enums/actions/GenresList.enum';

export const genresListReducer = (
    state = genresListState,
    {payload, type}: ActionType<GenreType[]>,
) =>
    produce(state, (draft: StateType<GenreType[]>) => {
        switch (type) {
            case GenresListEnum.FETCH_GENRES_LIST_SUCCESS:
                draft.items = payload as GenreType[];
                draft.status = StatusEnum.SUCCESS;
                break;

            case GenresListEnum.FETCH_GENRES_LIST_ERROR:
                draft.status = StatusEnum.ERROR;
                break;

            case GenresListEnum.FETCH_GENRES_LIST_PENDING:
                draft.status = StatusEnum.PENDING;
                break;
        }
    });
