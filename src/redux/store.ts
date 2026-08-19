import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";
import filterReducer from "./features/filterSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer, // API Reducer
        auth: authReducer,                     // Normal Auth Reducer
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;