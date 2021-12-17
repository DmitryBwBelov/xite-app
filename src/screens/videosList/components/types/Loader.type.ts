import {VideoType} from '@interfaces/Video.type';

export interface LoaderMessageType {
    readonly isPending: boolean;
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly items: VideoType[] | [];
    readonly fetchVideosList: () => void;
}
