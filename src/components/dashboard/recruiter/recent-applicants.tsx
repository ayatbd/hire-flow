import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const applicants = [
  {
    name: "Emily Blunt",
    role: "Frontend Engineer",
    time: "2m ago",
    initial: "EB",
  },
  {
    name: "Marcus Aurelius",
    role: "Product Designer",
    time: "15m ago",
    initial: "MA",
  },
  {
    name: "Sarah Connor",
    role: "Backend Developer",
    time: "1h ago",
    initial: "SC",
  },
];

export function RecentApplicants() {
  return (
    <div className="bg-background border rounded-3xl p-6 shadow-sm">
      <h3 className="font-bold mb-6">Recent Applicants</h3>
      <div className="space-y-6">
        {applicants.map((person, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">
                  {person.initial}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold">{person.name}</p>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
              {person.time}
            </span>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-6 rounded-xl">
        View All Candidates
      </Button>
    </div>
  );
}
