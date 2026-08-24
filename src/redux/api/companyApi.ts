import { baseApi } from "./baseApi";

const companyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCompany: builder.mutation({
            query: (companyData) => ({
                url: "/companies",
                method: "POST",
                body: companyData,
            }),
            invalidatesTags: ["User"], // Refresh user data to show they now have a company
        }),
        getCompanies: builder.query({
            query: (params) => {
                const queryParams = new URLSearchParams();
                if (params.industry?.length) queryParams.append("industry", params.industry.join(","));
                if (params.location) queryParams.append("location", params.location);
                if (params.keyword) queryParams.append("keyword", params.keyword);
                if (params.page) queryParams.append("page", params.page.toString());

                return {
                    url: `/companies?${queryParams.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Company"],
        }),
        getCompanyDetails: builder.query({
            query: (id) => `/companies/${id}`,
        }),
        getCompanyByUserId: builder.query({
            query: (userId) => `/companies/user/${userId}`,
        }),
    }),
});

export const { useCreateCompanyMutation, useGetCompaniesQuery, useGetCompanyDetailsQuery, useGetCompanyByUserIdQuery } = companyApi;