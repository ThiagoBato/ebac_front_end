import { configureStore } from '@reduxjs/toolkit';

import api from '../services/api';
import orderSlice from './reducers/order';

export const store = configureStore({
  reducer: {
    order: orderSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
