import { CompanyJobCard } from "@/components/companies/company-job-card";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bird,
  Building2,
  Coffee,
  Globe,
  Heart,
  Laptop,
  Link,
  MapPin,
  Zap,
} from "lucide-react";

export default function CompanyDetailPage() {
  // Mock Data
  const company = {
    name: "Linear",
    description:
      "Linear is a purpose-built tool for modern software teams to streamline projects, sprints, and bug tracking. It's designed to be high-performance, beautiful, and easy to use.",
    industry: "Software / SaaS",
    size: "50-200 employees",
    location: "Remote / San Francisco",
    website: "https://linear.app",
    logo: "L",
    color: "bg-purple-600",
    stats: [
      { label: "Open Roles", value: "12" },
      { label: "Series", value: "B" },
      { label: "Remote", value: "Yes" },
    ],
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* --- 1. Hero Banner --- */}
      <div className="h-48 md:h-64 bg-linear-to-r from-purple-900 to-indigo-900 w-full" />

      <Container className="-mt-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-end justify-between mb-8">
          <div className="flex items-end gap-6">
            {/* Logo */}
            <div
              className={`h-32 w-32 rounded-3xl ${company.color} border-4 border-background shadow-xl flex items-center justify-center text-white text-5xl font-bold`}
            >
              {company.logo}
            </div>
            {/* Title Info */}
            <div className="pb-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-extrabold tracking-tight">
                  {company.name}
                </h1>
                <Badge
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 border-none"
                >
                  Verified
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {company.location}
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" /> {company.industry}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pb-2">
            <Button variant="outline" size="icon" className="rounded-xl">
              <Bird className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Link className="h-4 w-4" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl">
              Follow
            </Button>
          </div>
        </div>

        {/* --- 2. Content Tabs --- */}
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
            <TabsTrigger
              value="about"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent pb-4 px-0 font-bold"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="jobs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent pb-4 px-0 font-bold"
            >
              Open Jobs ({company.stats[0].value})
            </TabsTrigger>
            <TabsTrigger
              value="culture"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent pb-4 px-0 font-bold"
            >
              Culture
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-2">
              <TabsContent value="about" className="mt-0 space-y-12">
                <section>
                  <h3 className="text-xl font-bold mb-4">
                    About {company.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {company.description}
                  </p>
                </section>

                {/* Benefits Bento Grid */}
                <section>
                  <h3 className="text-xl font-bold mb-6">Perks & Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BenefitCard
                      icon={<Laptop className="text-blue-600" />}
                      title="Remote First"
                      desc="Work from anywhere in the world."
                    />
                    <BenefitCard
                      icon={<Heart className="text-red-500" />}
                      title="Health & Wellness"
                      desc="Premium health, dental, and vision."
                    />
                    <BenefitCard
                      icon={<Coffee className="text-amber-600" />}
                      title="Work-Life Balance"
                      desc="Unlimited PTO and flexible hours."
                    />
                    <BenefitCard
                      icon={<Zap className="text-yellow-500" />}
                      title="Learning Budget"
                      desc="$2,000 yearly for growth."
                    />
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="jobs" className="mt-0 space-y-4">
                <CompanyJobCard
                  title="Senior Backend Engineer"
                  type="Remote"
                  salary="$160k - $220k"
                />
                <CompanyJobCard
                  title="Staff Product Designer"
                  type="Remote"
                  salary="$180k - $240k"
                />
                <CompanyJobCard
                  title="Frontend Engineer"
                  type="Hybrid"
                  salary="$140k - $190k"
                />
              </TabsContent>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              <div className="bg-muted/30 border rounded-3xl p-6">
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-muted-foreground">
                  At a Glance
                </h4>
                <div className="space-y-6">
                  {company.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 flex items-center gap-2"
                    >
                      <a href={company.website} target="_blank">
                        <Globe className="h-4 w-4" /> Visit Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Tabs>
      </Container>
    </main>
  );
}

// Sub-components for cleaner code
function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-muted/20 border flex gap-4">
      <div className="h-10 w-10 rounded-xl bg-background border flex items-center justify-center shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}
