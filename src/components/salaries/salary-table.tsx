import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, Search } from "lucide-react";

const SALARY_DATA = [
  {
    company: "Vercel",
    role: "Senior Frontend",
    level: "L4",
    location: "Remote",
    base: "$170k",
    tc: "$210k",
    date: "2 days ago",
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    level: "L3",
    location: "San Francisco",
    base: "$155k",
    tc: "$195k",
    date: "3 days ago",
  },
  {
    company: "Google",
    role: "L5 Software Engineer",
    level: "Senior",
    location: "New York",
    base: "$190k",
    tc: "$320k",
    date: "1 week ago",
  },
  {
    company: "Meta",
    role: "Product Designer",
    level: "IC5",
    location: "Remote",
    base: "$185k",
    tc: "$280k",
    date: "1 week ago",
  },
  {
    company: "Netflix",
    role: "Senior Backend",
    level: "Senior",
    location: "Los Gatos",
    base: "$250k",
    tc: "$250k",
    date: "2 weeks ago",
  },
  {
    company: "Amazon",
    role: "SDE II",
    level: "L5",
    location: "Seattle",
    base: "$160k",
    tc: "$230k",
    date: "2 weeks ago",
  },
];

export function SalaryTable() {
  return (
    <div className="space-y-4">
      {/* Table Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-bold">Recent Submissions</h3>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Filter by company..."
              className="pl-9 bg-background"
            />
          </div>
          <button className="p-2 border rounded-md hover:bg-muted transition-colors">
            <Filter className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Actual Table */}
      <div className="bg-background border rounded-2xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="font-bold text-foreground">
                Company
              </TableHead>
              <TableHead className="font-bold text-foreground">
                Role & Level
              </TableHead>
              <TableHead className="font-bold text-foreground">
                Location
              </TableHead>
              <TableHead className="font-bold text-foreground">Base</TableHead>
              <TableHead className="font-bold text-foreground text-right">
                Total Comp (TC)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SALARY_DATA.map((item, i) => (
              <TableRow
                key={i}
                className="hover:bg-muted/30 transition-colors cursor-pointer group"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-xs">
                      {item.company[0]}
                    </div>
                    <span className="font-semibold">{item.company}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.role}</span>
                    <span className="text-xs text-muted-foreground">
                      Level: {item.level}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {item.location}
                </TableCell>
                <TableCell className="font-medium text-sm">
                  {item.base}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-none font-bold"
                  >
                    {item.tc}
                  </Badge>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {item.date}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-center pt-4">
        <button className="text-sm font-semibold text-blue-600 hover:underline">
          Load more submissions
        </button>
      </div>
    </div>
  );
}
