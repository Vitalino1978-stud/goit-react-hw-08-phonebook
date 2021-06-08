import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts-reduser';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authReducer from './auth/auth-reducers';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});
// const store = createStore(rootReducers, composeWithDevTools());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devtools: process.env.NODE_ENV === 'development',
});
// export default store;
const persistor = persistStore(store);

export default { store, persistor };

// const store = configureStore({
//   reducer: { contacts: contactsReducer },
//   middleware,
// });
// export default store;
