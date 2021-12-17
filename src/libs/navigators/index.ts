import {Route} from '@interfaces/Route.type';
// Screens
import {VideosList} from '@screens/videosList';
import {VideoItem} from '@screens/videoItem';

export const navigators: Route[] = [
    {
        id: 'videos_list',
        name: 'VideosList',
        options: {
            title: 'Videos',
        },
        component: VideosList,
    },
    {
        id: 'video_item',
        name: 'VideoItem',
        options: {
            title: 'Video',
        },
        component: VideoItem,
    },
];
