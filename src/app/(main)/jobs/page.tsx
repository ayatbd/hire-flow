import { JobFilters } from "@/components/jobs/job-filters";
import { JobList } from "@/components/jobs/job-list";
import { MobileFilters } from "@/components/jobs/mobile-filters";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function JobsPage() {
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
              <JobFilters />
            </div>
          </aside>

          {/* --- Mobile Filter Trigger --- */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <p className="text-sm text-muted-foreground">Showing 124 jobs</p>
            <MobileFilters />
          </div>

          {/* --- Job Feed --- */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                We found <span className="font-bold text-foreground">124</span>{" "}
                jobs for you
              </p>
              <select className="bg-transparent text-sm font-medium outline-none cursor-pointer">
                <option>Most Recent</option>
                <option>Highest Salary</option>
              </select>
            </div>

            <JobList />
          </div>
        </div>
      </Container>
    </main>
  );
}
