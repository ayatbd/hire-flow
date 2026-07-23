import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Vercel",
    location: "Remote",
    salary: "$140k - $190k",
    type: "Full-time",
    tags: ["React", "Next.js", "TS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Stripe",
    location: "New York",
    salary: "$150k - $210k",
    type: "Hybrid",
    tags: ["Node.js", "Go", "Postgres"],
  },
  {
    id: 3,
    title: "Product Designer",
    company: "Airbnb",
    location: "San Francisco",
    salary: "$130k - $180k",
    type: "Full-time",
    tags: ["Figma", "UI/UX", "Research"],
  },
];

export function FeaturedJobs() {
  return (
    <section className="container py-24 bg-muted/20 rounded-[3rem] my-10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Jobs
          </h2>
          <p className="text-muted-foreground mt-2">
            Hand-picked opportunities for you.
          </p>
        </div>
        <Button variant="outline" className="hidden sm:flex">
          <Link href="/jobs">View All Jobs</Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {featuredJobs.map((job) => (
          <div
            key={job.id}
            className="group bg-background border p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-blue-500/50 hover:shadow-md"
          >
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center font-bold text-blue-600">
                {job.company[0]}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {job.type}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {job.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 border-none"
                >
                  {tag}
                </Badge>
              ))}
              <Button size="sm" className="ml-2">
                Apply
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-8 sm:hidden">
        View All Jobs
      </Button>
    </section>
  );
}
