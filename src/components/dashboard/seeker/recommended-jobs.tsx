import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const jobs = [
  {
    title: "React Developer",
    company: "Figma",
    salary: "$140k",
    type: "Remote",
  },
  {
    title: "Full Stack Engineer",
    company: "Notion",
    salary: "$155k",
    type: "Hybrid",
  },
];

export function RecommendedJobs() {
  return (
    <div className="bg-background border rounded-3xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-blue-600 fill-blue-600" />
        <h3 className="font-bold">Jobs for you</h3>
      </div>
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-blue-200 transition-all cursor-pointer"
          >
            <h4 className="font-bold text-sm mb-1">{job.title}</h4>
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>
                {job.company} • {job.type}
              </span>
              <span className="font-bold text-foreground">{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-6 rounded-xl">
        Explore All
      </Button>
    </div>
  );
}
