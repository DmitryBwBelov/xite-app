// Modules
import {applyMiddleware, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {createEpicMiddleware} from 'redux-observable';
// Redux devtools
import {composeWithDevTools} from 'redux-devtools-extension';
// Root reducer
import rootReducer from '@reducers/index';
// Epics
import {rootEpic} from '@epics/index';
// Initial State
import {initialState} from './state';

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware, thunk];

// Redux: Store
const store = createStore(
    persistedReducer,
    // @ts-ignore
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

epicMiddleware.run(rootEpic);

export {store};
