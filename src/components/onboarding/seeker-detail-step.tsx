import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUp } from "lucide-react";

export function SeekerDetailStep({ onBack }: { onBack: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold">Professional Info</h1>
        <p className="text-muted-foreground">
          Help us find the right jobs for you.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-2">
          <Label>Resume / CV</Label>
          <div className="border-2 border-dashed border-muted rounded-2xl p-8 text-center hover:bg-muted/30 transition-colors cursor-pointer group">
            <FileUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-blue-600 transition-colors" />
            <p className="text-sm font-medium">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">PDF, DOCX (Max 5MB)</p>
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Primary Skillset</Label>
          <Input
            placeholder="e.g. React, Node.js, Design"
            className="h-12 rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button className="h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold">
          Complete Setup
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Go back
        </Button>
      </div>
    </div>
  );
}
