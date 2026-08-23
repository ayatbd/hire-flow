import { baseApi } from "../api/baseApi";

export const applicationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        applyToJob: builder.mutation({
            query: (data) => ({
                url: "/applications",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Job", "Application"],
        }),
        getSeekerApplications: builder.query({
            query: () => "/seeker/applications",
            providesTags: ["Application"],
        }),
    }),
});

export const { useApplyToJobMutation, useGetSeekerApplicationsQuery } = applicationApi;