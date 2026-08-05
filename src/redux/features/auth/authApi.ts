import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/users",
                method: "POST",
                body: userData,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login", // Changed from /jwt to /login
                method: "POST",
                body: credentials,
            }),
        }),
        getMe: builder.query({
            query: () => "/user-info",
        }),
    }),
});

export const { useRegisterUserMutation, useLoginMutation, useGetMeQuery } = authApi;