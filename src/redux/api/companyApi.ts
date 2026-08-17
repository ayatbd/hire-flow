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
        getCompanyDetails: builder.query({
            query: (id) => `/companies/${id}`,
        }),
        getCompanyByUserId: builder.query({
            query: (userId) => `/companies/user/${userId}`,
        }),
    }),
});

export const { useCreateCompanyMutation, useGetCompanyDetailsQuery, useGetCompanyByUserIdQuery } = companyApi;