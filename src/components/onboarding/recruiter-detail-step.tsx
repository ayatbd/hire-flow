import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Globe, ImagePlus } from "lucide-react";

export function RecruiterDetailStep({ onBack }: { onBack: any }) {
  return (
    <div className="space-y-8">
      {/* --- Header --- */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold">Company Details</h1>
        <p className="text-muted-foreground">
          Tell us about the company you&apos;re hiring for.
        </p>
      </div>

      <div className="space-y-6">
        {/* Company Name & Website */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="companyName">Company Name</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="companyName"
                placeholder="e.g. Acme Corp"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="website">Website</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="website"
                placeholder="https://company.com"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Industry Selection */}
        <div className="grid gap-2">
          <Label>Industry</Label>
          <Select>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">Software / SaaS</SelectItem>
              <SelectItem value="fintech">Fintech</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="ai">AI / Machine Learning</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Short Bio */}
        <div className="grid gap-2">
          <Label htmlFor="bio">Company Bio</Label>
          <Textarea
            id="bio"
            placeholder="A short description of your company culture and mission..."
            className="min-h-[100px] rounded-xl resize-none"
          />
        </div>

        {/* Logo Upload */}
        <div className="grid gap-2">
          <Label>Company Logo</Label>
          <div className="border-2 border-dashed border-muted rounded-2xl p-6 text-center hover:bg-muted/30 transition-colors cursor-pointer group">
            <ImagePlus className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-purple-600 transition-colors" />
            <p className="text-sm font-medium">Upload company logo</p>
            <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
          </div>
        </div>
      </div>

      {/* --- Action Buttons --- */}
      <div className="flex flex-col gap-3">
        <Button className="h-12 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold shadow-lg shadow-purple-500/20">
          Complete Employer Setup
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Go back
        </Button>
      </div>
    </div>
  );
}
