import {ScreenType} from '@interfaces/Screen.type';
import {VideoType} from '@interfaces/Video.type';

export interface VideosListType extends ScreenType {
    readonly isPending: boolean;
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly items: VideoType[] | [];
    readonly fetchVideosList: () => void;
}
