import { baseApi } from "@/redux/api/baseApi";

const jobsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: (params) => {
                // Generate an object of URL search params
                const queryParams = new URLSearchParams();

                if (params.keyword) queryParams.append("keyword", params.keyword);
                if (params.page) queryParams.append("page", params.page.toString());

                // Convert arrays ['Full-time', 'Contract'] -> "Full-time,Contract"
                if (params.type?.length) queryParams.append("type", params.type.join(","));
                if (params.experience?.length) queryParams.append("experienceLevel", params.experience.join(","));

                return {
                    url: `/jobs?${queryParams.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Job"],
        }),

        getJobById: builder.query({
            query: (id) => `/jobs/${id}`,
            providesTags: ["Job"],
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