import { configureStore } from '@reduxjs/toolkit';
import {
//   persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



import catsReducer from './cats/cats-slice';





export const store = configureStore({
  reducer: {
    cats: catsReducer,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
