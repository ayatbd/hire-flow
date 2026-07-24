import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

interface CompanyCardProps {
  company: any;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="group bg-background border rounded-2xl p-6 transition-all hover:shadow-lg hover:border-blue-500/40">
      <div className="flex justify-between items-start mb-6">
        <div
          className={cn(
            "h-16 w-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-inner",
            company.color,
          )}
        >
          {company.logo}
        </div>
        <Badge
          variant="secondary"
          className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-none font-semibold"
        >
          {company.openRoles} Open Roles
        </Badge>
      </div>

      <div className="space-y-2 mb-4">
        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
          {company.name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" /> {company.industry}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {company.location}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
        {company.bio}
      </p>

      <Button
        variant="outline"
        className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all"
      >
        <Link href={`/companies/${company.id}`}>View Profile</Link>
      </Button>
    </div>
  );
}
