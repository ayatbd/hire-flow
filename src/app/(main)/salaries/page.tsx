import { SalaryHero } from "@/components/salaries/salary-hero";
import { SalaryStatsCard } from "@/components/salaries/salary-stats-card";
// import { SalaryTable } from "@/components/salaries/salary-table";
import { TopPayingRoles } from "@/components/salaries/top-paying-roles";
import { Container } from "@/components/shared/container";

export default function SalariesPage() {
  return (
    <main className="min-h-screen bg-muted/20 pb-20">
      <SalaryHero />

      <Container className="-mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Stats & Comparisons */}
          <div className="lg:col-span-2 space-y-8">
            <SalaryStatsCard
              role="Senior Frontend Engineer"
              location="United States"
            />
            {/* <SalaryTable /> */}
          </div>

          {/* Sidebar: Top Paying & Trends */}
          <div className="space-y-8">
            <TopPayingRoles />

            {/* CTA Card */}
            <div className="bg-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Contribute Data</h3>
              <p className="text-blue-100 text-sm mb-6">
                Help the community by sharing your salary anonymously.
              </p>
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Share My Salary
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
