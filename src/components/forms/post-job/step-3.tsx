import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

export function Step3Description() {
  return (
    <div className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="desc">Job Description</Label>
        <Textarea
          id="desc"
          placeholder="Describe the role, responsibilities, and perks..."
          className="min-h-50 resize-none"
        />
      </div>

      <div className="grid gap-2">
        <Label>Required Skills</Label>
        <Input placeholder="Type a skill and press Enter..." className="h-12" />
        <div className="flex flex-wrap gap-2 mt-2">
          {["React", "TypeScript", "Tailwind"].map((skill) => (
            <Badge key={skill} variant="secondary" className="px-3 py-1 gap-1">
              {skill} <X className="h-3 w-3 cursor-pointer" />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
