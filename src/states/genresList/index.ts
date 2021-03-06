import {StateType} from '@interfaces/State.type';
import {StatusEnum} from '@enums/Status.enum';
import {GenreType} from '@interfaces/Genre.type';

export const genresListState: StateType<GenreType[], any> = {
    items: [],
    status: StatusEnum.IDLE,
};
