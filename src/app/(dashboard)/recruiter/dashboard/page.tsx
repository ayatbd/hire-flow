import { MyJobsTable } from "@/components/dashboard/recruiter/my-jobs-table";
import { RecentApplicants } from "@/components/dashboard/recruiter/recent-applicants";
import { RecruiterStats } from "@/components/dashboard/recruiter/stats";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { BarChart3, Plus } from "lucide-react";
import Link from "next/link";

export default function RecruiterDashboard() {
  return (
    <main className="min-h-screen bg-muted/20 py-10">
      <Container>
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Hiring Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your active listings and review new candidates.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:flex">
              <BarChart3 className="mr-2 h-4 w-4" /> Reports
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20">
              <Link href="/recruiter/post-job">
                <Plus className="mr-2 h-4 w-4" /> Post a New Job
              </Link>
            </Button>
          </div>
        </div>

        {/* --- Stats Cards --- */}
        <RecruiterStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* --- Main Content: My Active Jobs --- */}
          <div className="lg:col-span-2 space-y-8">
            <MyJobsTable />
          </div>

          {/* --- Sidebar: Recent Applicants across all jobs --- */}
          <div className="space-y-8">
            <RecentApplicants />

            {/* Hiring Tip Card */}
            <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-bold mb-2">Pro Hiring Tip 💡</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Candidates who receive a response within 48 hours are 70% more
                likely to accept an offer. Try to clear your New queue today!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
