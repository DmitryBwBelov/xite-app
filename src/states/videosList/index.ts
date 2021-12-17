import {StateType} from '@interfaces/State.type';
import {StatusEnum} from '@enums/Status.enum';
import {VideoType} from '@interfaces/Video.type';
import {PayloadSearchInterface} from '@interfaces/videosList/PayloadSearch.type';

export const videosListState: StateType<VideoType[], PayloadSearchInterface> = {
    items: [],
    filteredItems: [],
    filterParams: [],
    status: StatusEnum.IDLE,
};
