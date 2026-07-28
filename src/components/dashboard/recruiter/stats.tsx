import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Clock, UserCheck, Users } from "lucide-react";

const stats = [
  {
    label: "Active Jobs",
    value: "12",
    icon: <Briefcase className="text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    label: "Total Applicants",
    value: "284",
    icon: <Users className="text-purple-600" />,
    color: "bg-purple-50",
  },
  {
    label: "Interviews",
    value: "48",
    icon: <UserCheck className="text-green-600" />,
    color: "bg-green-50",
  },
  {
    label: "Avg. Time to Hire",
    value: "18d",
    icon: <Clock className="text-orange-600" />,
    color: "bg-orange-50",
  },
];

export function RecruiterStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-none shadow-sm rounded-3xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
