import { baseApi } from "@/redux/api/baseApi";

const jobsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => "/jobs",
        }),

        getJobById: builder.query({
            query: (id) => `/jobs/${id}`,
        }),

        createJob: builder.mutation({
            query: (jobData) => ({
                url: "/jobs",
                method: "POST",
                body: jobData,
            }),
            invalidatesTags: ["Job"],
        }),
    }),
});

export const { useGetJobsQuery, useGetJobByIdQuery, useCreateJobMutation } = jobsApi;