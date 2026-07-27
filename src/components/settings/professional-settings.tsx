import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChartLine, FileText, FolderGit2, Globe } from "lucide-react";

export function ProfessionalSettings() {
  return (
    <Card className="rounded-3xl shadow-sm border-none">
      <CardHeader>
        <CardTitle>Professional Info</CardTitle>
        <CardDescription>
          Manage your resume and professional links.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Resume Section */}
        <div className="p-4 rounded-2xl border-2 border-dashed border-muted flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-sm">Resume_Final_2024.pdf</p>
              <p className="text-xs text-muted-foreground">
                Uploaded on Jan 12, 2024
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600">
            Update
          </Button>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <div className="relative">
            <ChartLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="linkedin.com/in/username" />
          </div>
          <div className="relative">
            <FolderGit2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="github.com/username" />
          </div>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="portfolio-website.com" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button className="bg-blue-600 ml-auto">Save Professional Info</Button>
      </CardFooter>
    </Card>
  );
}
