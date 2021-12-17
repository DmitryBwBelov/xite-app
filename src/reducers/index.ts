// Modules
import {combineReducers} from 'redux';
// Reducers
import {videosListReducer} from '@reducers/videosList';
import {genresListReducer} from '@reducers/genresList';

export default combineReducers({
    videosList: videosListReducer,
    genresList: genresListReducer,
});
