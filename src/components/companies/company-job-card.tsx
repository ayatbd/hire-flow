import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CompanyJobCard({
  title,
  type,
  salary,
}: {
  title: string;
  type: string;
  salary: string;
}) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl border bg-background hover:border-blue-500/50 hover:shadow-md transition-all group">
      <div>
        <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {type} • {salary}
        </p>
      </div>
      <Button
        variant="ghost"
        className="rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600"
      >
        <Link href="/jobs/1">
          Details <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
