import {createStructuredSelector} from 'reselect';
import {
    videosListIsErrorSelector,
    videosListIsPendingSelector,
    videosListIsSuccessSelector,
    videosListSelector,
} from '@selectors/selectors/videosList';

export const videosListStructuredSelector = createStructuredSelector({
    items: videosListSelector,
    isPending: videosListIsPendingSelector,
    isSuccess: videosListIsSuccessSelector,
    isError: videosListIsErrorSelector,
});
