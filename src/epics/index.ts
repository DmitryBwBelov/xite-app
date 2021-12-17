// Modules
import {combineEpics} from 'redux-observable';
// Epics
import {fetchVideosListEpic} from './videosList';

export const rootEpic = combineEpics(fetchVideosListEpic);
