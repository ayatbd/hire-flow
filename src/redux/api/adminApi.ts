import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllThings: builder.query({
            query: () => "/admin",
        })
    }),
});

export const { useGetAllThingsQuery } = adminApi;