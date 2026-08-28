"use client";
import { useGetAllThingsQuery } from "@/redux/api/adminApi";
import { Briefcase, Building2, Globe, Users } from "lucide-react";

export function Stats() {
  const { data: adminThings } = useGetAllThingsQuery("");
  console.log(adminThings);

  const stats = [
    {
      label: "Active Users",
      value: adminThings?.users?.length ?? 0,
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Companies",
      value: adminThings?.companies?.length ?? 0,
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Jobs Posted",
      value: adminThings?.jobs?.length ?? 0,
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Countries",
      value: "0+",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat: any, i: number) => (
        <div key={i} className="flex flex-col items-center p-6 text-center">
          <div className="mb-4 p-3 rounded-2xl bg-blue-50 dark:bg-blue-950">
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold tracking-tight">
            {stat.value > 0 ? String(stat.value).padStart(2, "0") : "0"} +
          </h3>
          <p className="text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
