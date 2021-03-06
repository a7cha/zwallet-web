import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import promiseMidleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(promiseMidleware)
);

let persistor = persistStore(store);

export default {store, persistor};