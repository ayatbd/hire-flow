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
        getApplicationById: builder.query({
            query: (id) => `/applications/${id}`,
        })
    }),
});

export const { useApplyToJobMutation, useGetSeekerApplicationsQuery, useGetApplicationByIdQuery } = applicationApi;