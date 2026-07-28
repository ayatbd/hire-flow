import { ApplicationTracker } from "@/components/dashboard/seeker/application-tracker";
import { RecommendedJobs } from "@/components/dashboard/seeker/recommended-jobs";
import { SeekerStats } from "@/components/dashboard/seeker/stats";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function SeekerDashboard() {
  return (
    <main className="min-h-screen bg-muted/20 py-10">
      <Container>
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Here&apos;s what&apos;s happening with your job search today.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20">
            <Link href="/jobs">
              <Plus className="mr-2 h-4 w-4" /> Find New Jobs
            </Link>
          </Button>
        </div>

        {/* --- Stats Grid --- */}
        <SeekerStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* --- Main Content: Application Tracker --- */}
          <div className="lg:col-span-2">
            <ApplicationTracker />
          </div>

          {/* --- Sidebar: Recommendations & Activity --- */}
          <div className="space-y-8">
            <RecommendedJobs />

            {/* Quick Profile Completion Card */}
            <div className="bg-background border rounded-3xl p-6">
              <h3 className="font-bold mb-2 text-sm">Profile Completion</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-blue-600">85%</span>
                <span className="text-xs text-muted-foreground font-medium">
                  Almost there!
                </span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[85%]" />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Add your portfolio link to increase your chances of getting
                noticed by 40%.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto mt-2 text-blue-600 text-xs"
              >
                Complete Profile
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
