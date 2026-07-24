import { TrendingUp } from "lucide-react";

const roles = [
  { name: "Engineering Manager", avg: "$180k", trend: "+12%" },
  { name: "Cloud Architect", avg: "$172k", trend: "+8%" },
  { name: "DevOps Engineer", avg: "$155k", trend: "+5%" },
  { name: "Data Scientist", avg: "$150k", trend: "+10%" },
];

export function TopPayingRoles() {
  return (
    <div className="bg-background rounded-3xl p-6 border shadow-sm">
      <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-green-500" /> Top Paying Roles
      </h3>
      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className="flex justify-between items-center p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-default"
          >
            <div>
              <p className="font-bold text-sm">{role.name}</p>
              <p className="text-xs text-green-600 font-medium">
                {role.trend} vs last year
              </p>
            </div>
            <span className="font-bold">{role.avg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
