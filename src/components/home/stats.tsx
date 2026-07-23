import { Briefcase, Building2, Globe, Users } from "lucide-react";

const stats = [
  {
    label: "Active Users",
    value: "50k+",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Companies",
    value: "1.2k+",
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Jobs Posted",
    value: "15k+",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Countries",
    value: "40+",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center p-6 text-center">
          <div className="mb-4 p-3 rounded-2xl bg-blue-50 dark:bg-blue-950">
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
          <p className="text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
