import {GenreType} from '@interfaces/Genre.type';
import {VideoType} from '@interfaces/Video.type';
import {PayloadSearchInterface} from '@interfaces/videosList/PayloadSearch.type';

export interface FilterType {
    readonly genres: GenreType[];
    readonly items: VideoType[];
    readonly filterVideosList: (payload: null | PayloadSearchInterface) => void;
}
