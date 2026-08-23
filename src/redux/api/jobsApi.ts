import { baseApi } from "@/redux/api/baseApi";

const jobsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: (params) => {
                const queryParams = new URLSearchParams();

                if (params.keyword) queryParams.append("keyword", params.keyword);
                if (params.page) queryParams.append("page", params.page.toString());

                // Match the key names to the backend exactly
                if (params.type?.length) {
                    queryParams.append("type", params.type.join(","));
                }

                if (params.experience?.length) {
                    // Send as 'experienceLevel' to match backend destructuring
                    queryParams.append("experienceLevel", params.experience.join(","));
                }

                if (params.minSalary) queryParams.append("minSalary", params.minSalary);
                if (params.maxSalary) queryParams.append("maxSalary", params.maxSalary);

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
        browsByCategory: builder.query({
            query: (category) => `/jobs/category/${category}`,
            providesTags: ["Job"],
        })
    }),
});

export const { useGetJobsQuery, useGetJobByIdQuery, useCreateJobMutation, useBrowsByCategoryQuery } = jobsApi;