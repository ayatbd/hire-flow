"use client";

import { JobFilters } from "@/components/jobs/job-filters";
import { JobList } from "@/components/jobs/job-list";
import { MobileFilters } from "@/components/jobs/mobile-filters";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Loader2, Search } from "lucide-react";

import { useGetJobsQuery } from "@/redux/api/jobsApi";
import { Button } from "@base-ui/react";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function JobsPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  // 1. Centralized State for all API parameters
  const [params, setParams] = useState({
    page: 1,
    keyword: "",
    type: [] as string[],
    experience: [] as string[],
    minSalary: "",
  });

  // 2. RTK Query Hook - Fired automatically when 'params' changes
  const { data, isLoading, isFetching } = useGetJobsQuery({
    keyword: params.keyword,
    page: params.page,
    type: params.type, // Array from state
    experience: params.experience, // Array from state
    minSalary: params.minSalary,
    category: categoryFromUrl || "",
  });

  // Helper to update specific filters
  const updateFilter = (key: string, value: any) => {
    setParams((prev) => ({ ...prev, [key]: value, page: 1 })); // Reset to page 1 on filter change
  };

  const changePage = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setParams((prev) => ({ ...prev, page }));
  };

  return (
    <main className="min-h-screen bg-muted/20 pb-20">
      {/* --- Search Header --- */}
      <div className="bg-background border-b py-8 mb-8">
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Available Jobs
            </h1>
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by job title, company, or keywords..."
                className="pl-10 h-12 bg-muted/50 border-none ring-offset-background focus-visible:ring-2 focus-visible:ring-blue-600"
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  updateFilter("keyword", e.currentTarget.value)
                }
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Sidebar (Desktop) --- */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <JobFilters
                selectedTypes={params.type}
                selectedExp={params.experience}
                onTypeChange={(val: string[]) => updateFilter("type", val)}
                onExpChange={(val: string[]) => updateFilter("experience", val)}
              />
            </div>
          </aside>

          {/* --- Mobile Filter Trigger --- */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {data?.jobs.length || "..."} jobs
            </p>
            <MobileFilters />
          </div>

          {/* --- Job Feed --- */}
          <div className="flex-1 space-y-6">
            {isLoading || isFetching ? (
              <div className="flex flex-col items-center justify-center py-20 bg-background rounded-3xl border border-dashed">
                <Loader2 className="h-10 w-10 animate-spin text-blue-600 mb-4" />
                <p className="text-muted-foreground font-medium">
                  Updating job feed...
                </p>
              </div>
            ) : (
              <>
                <JobList jobs={data?.jobs || []} />

                {/* --- Awesome Pagination --- */}
                {data?.pagination?.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-10">
                    {/* Previous */}
                    <Button
                      className="h-10 w-10 rounded-lg border-gray-200 bg-white shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40"
                      disabled={params.page === 1}
                      onClick={() => changePage(params.page - 1)}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1.5">
                      {Array.from(
                        { length: data.pagination.totalPages },
                        (_, i) => i + 1,
                      )
                        .filter((page) => {
                          const current = params.page;
                          const total = data.pagination.totalPages;

                          return (
                            page === 1 ||
                            page === total ||
                            Math.abs(page - current) <= 1
                          );
                        })
                        .map((page, index, pages) => (
                          <React.Fragment key={page}>
                            {/* Ellipsis */}
                            {index > 0 && pages[index - 1] !== page - 1 && (
                              <span className="flex h-10 w-8 items-center justify-center text-gray-400">
                                ...
                              </span>
                            )}

                            <button
                              onClick={() => changePage(page)}
                              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 ${
                                params.page === page
                                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                                  : "border border-gray-200 bg-white text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                              }`}
                            >
                              {page}
                            </button>
                          </React.Fragment>
                        ))}
                    </div>

                    {/* Next */}
                    <Button
                      className="h-10 w-10 rounded-lg border-gray-200 bg-white shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40"
                      disabled={!data?.pagination?.hasNextPage}
                      onClick={() => changePage(params.page + 1)}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
