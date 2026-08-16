import { baseApi } from "@/redux/api/baseApi";

const jobsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => "/jobs",
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

export const { useGetJobsQuery, useCreateJobMutation } = jobsApi;