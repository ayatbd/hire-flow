import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, Building2, Clock, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

const MOCK_JOBS = Array(6).fill({
  id: "1",
  title: "Senior Full Stack Engineer",
  company: "TechFlow Systems",
  location: "Austin, TX (Remote)",
  salary: "$120k - $160k",
  type: "Full-time",
  postedAt: "2 hours ago",
  tags: ["React", "Node.js", "AWS"],
});

export function JobList() {
  return (
    <div className="grid gap-4">
      {MOCK_JOBS.map((job, i) => (
        <div
          key={i}
          className="group relative bg-background border rounded-2xl p-5 hover:border-blue-500/50 hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                  <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="h-3.5 w-3.5" /> {job.salary}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {job.type}
            </span>
            <span className="text-blue-600">{job.postedAt}</span>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex gap-2">
              {job.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-muted text-muted-foreground hover:bg-blue-50 hover:text-blue-600 border-none transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Button>
              <Link href={`/jobs/${job.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
