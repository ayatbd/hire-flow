import { baseApi } from "@/redux/api/baseApi";

const jobsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => "/jobs",
        }),
    }),
});

export const { useGetJobsQuery } = jobsApi;