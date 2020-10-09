import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootSaga from "./sagas";
import rootReducers from "./reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'Auth',
    ],
};

export const configureStore = (initialStore = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [logger, sagaMiddleware];
    const persistedReducer = persistReducer(persistConfig, rootReducers);
    const store = createStore(
        persistedReducer,
        initialStore,
        applyMiddleware(...middlewares)
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
};