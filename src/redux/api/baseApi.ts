import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
        prepareHeaders: (headers) => {
            // Automatically grab token from localStorage for EVERY request
            const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["User", "Job", "Application"], // Used for automatic re-fetching
    endpoints: () => ({}), // Empty, we will inject endpoints later
});