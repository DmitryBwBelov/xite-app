// Lib
import {request} from '@libs/request';

export const fetchVideosList = () => {
    const url =
        'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json';

    return request({
        url,
        method: 'GET',
    });
};
