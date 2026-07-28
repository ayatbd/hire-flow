import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal } from "lucide-react";

const applications = [
  {
    company: "Vercel",
    role: "Frontend Engineer",
    date: "Jan 12, 2024",
    status: "Interviewing",
    color: "bg-blue-100 text-blue-700",
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    date: "Jan 10, 2024",
    status: "Applied",
    color: "bg-gray-100 text-gray-700",
  },
  {
    company: "Linear",
    role: "Product Designer",
    date: "Jan 05, 2024",
    status: "Rejected",
    color: "bg-red-100 text-red-700",
  },
  {
    company: "Airbnb",
    role: "Senior Dev",
    date: "Jan 02, 2024",
    status: "Offer",
    color: "bg-green-100 text-green-700",
  },
];

export function ApplicationTracker() {
  return (
    <div className="bg-background border rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-xl">Recent Applications</h3>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="bg-muted/50 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((app, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-2xl border hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center font-bold text-blue-600">
                  {app.company[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm group-hover:text-blue-600 transition-colors">
                    {app.role}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {app.company} • Applied on {app.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  className={`${app.color} border-none px-3 py-1 rounded-lg`}
                >
                  {app.status}
                </Badge>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
