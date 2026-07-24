import { CompanyCard } from "@/components/companies/company-card";
import { CompanyFilters } from "@/components/companies/company-filters";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-muted/20 pb-20">
      {/* --- Header Section --- */}
      <div className="bg-background border-b py-12 mb-8">
        <Container>
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Browse Companies
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover the best places to work. Learn about company culture,
              perks, and open roles.
            </p>
            <div className="relative pt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 mt-2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search companies by name or industry..."
                className="pl-10 h-14 bg-muted/50 border-none text-base shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Sidebar Filters --- */}
          <aside className="w-full lg:w-64 shrink-0">
            <CompanyFilters />
          </aside>

          {/* --- Company Grid --- */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground font-medium">
                Showing 48 companies
              </p>
              <select className="bg-transparent text-sm font-semibold outline-none border rounded-md px-2 py-1">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Company Size</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {MOCK_COMPANIES.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

const MOCK_COMPANIES = [
  {
    id: "1",
    name: "Vercel",
    industry: "Cloud Computing",
    location: "San Francisco, CA",
    openRoles: 12,
    logo: "V",
    color: "bg-black",
    bio: "The platform for frontend developers, providing the speed and reliability needed to create at the speed of inspiration.",
  },
  {
    id: "2",
    name: "Stripe",
    industry: "Fintech",
    location: "Dublin, IE",
    openRoles: 24,
    logo: "S",
    color: "bg-indigo-600",
    bio: "Financial infrastructure for the internet. Millions of companies use Stripe’s software and APIs to accept payments.",
  },
  {
    id: "3",
    name: "Airbnb",
    industry: "Travel & Hospitality",
    location: "San Francisco, CA",
    openRoles: 8,
    logo: "A",
    color: "bg-rose-500",
    bio: "Airbnb is a mission-driven company focused on enabling anyone to feel at home anywhere.",
  },
  {
    id: "4",
    name: "Linear",
    industry: "Software",
    location: "Remote",
    openRoles: 5,
    logo: "L",
    color: "bg-purple-600",
    bio: "The tool for modern software teams. Streamline software projects, sprints, and bug tracking.",
  },
];
