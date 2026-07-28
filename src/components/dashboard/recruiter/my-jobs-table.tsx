import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Users } from "lucide-react";

const myJobs = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    status: "Active",
    applicants: 42,
    views: "1.2k",
    date: "Jan 10, 2024",
  },
  {
    id: "2",
    title: "Product Designer",
    status: "Active",
    applicants: 18,
    views: "850",
    date: "Jan 12, 2024",
  },
  {
    id: "3",
    title: "Backend Developer",
    status: "Draft",
    applicants: 0,
    views: "0",
    date: "Jan 14, 2024",
  },
  {
    id: "4",
    title: "UX Researcher",
    status: "Closed",
    applicants: 89,
    views: "2.4k",
    date: "Dec 15, 2023",
  },
];

export function MyJobsTable() {
  return (
    <div className="bg-background border rounded-3xl p-6 shadow-sm">
      <h3 className="font-bold text-xl mb-6">My Job Listings</h3>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-bold">Job Title</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="font-bold">Applicants</TableHead>
            <TableHead className="font-bold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myJobs.map((job) => (
            <TableRow key={job.id} className="group cursor-pointer">
              <TableCell>
                <div className="font-bold group-hover:text-blue-600 transition-colors">
                  {job.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  Posted on {job.date}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    job.status === "Active"
                      ? "bg-green-100 text-green-700 border-none"
                      : job.status === "Draft"
                        ? "bg-gray-100 text-gray-700 border-none"
                        : "bg-red-100 text-red-700 border-none"
                  }
                >
                  {job.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{job.applicants}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem>Edit Job</DropdownMenuItem>
                    <DropdownMenuItem>View Applicants</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Close Listing
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
