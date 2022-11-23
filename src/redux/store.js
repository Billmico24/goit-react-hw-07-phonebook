import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import contactsSlice from 'redux/contactsSlice';
import filterSlice from './filterSlice';

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
};

const persistedCotactsReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: {
        contacts: persistedCotactsReducer,
        filter: filterSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);