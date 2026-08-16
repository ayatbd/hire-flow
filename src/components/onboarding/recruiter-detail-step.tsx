"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Globe, ImagePlus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

import { Alert, AlertDescription } from "@/components/ui/alert";
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
import { useCreateCompanyMutation } from "@/redux/api/companyApi";

// 1. Validation Schema
const recruiterSchema = z.object({
  name: z.string().min(2, "Company name is required"),
  website: z.string().url("Please enter a valid URL (e.g., https://acme.com)"),
  industry: z.string().min(1, "Please select an industry"),
  location: z.string().min(2, "Location is required"),
  description: z.string().min(10, "Bio should be at least 10 characters"),
  logo: z.string().optional(),
});

type FormData = z.infer<typeof recruiterSchema>;

export function RecruiterDetailStep({ onBack }: { onBack: () => void }) {
  const router = useRouter();

  // 2. RTK Query Mutation
  const [createCompany, { isLoading, error }] = useCreateCompanyMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(recruiterSchema),
  });

  // 3. Submit Handler
  const onSubmit = async (data: FormData) => {
    try {
      // Add a placeholder logo if none provided
      const finalData = {
        ...data,
        logo:
          data.logo ||
          `https://ui-avatars.com/api/?name=${data.name}&background=6366f1&color=fff`,
      };

      await createCompany(finalData).unwrap();

      toast.success("Welcome aboard! Company profile created.");
      router.push("/recruiter/dashboard");
    } catch (err) {
      console.error("Onboarding Error:", err);
      toast.error("Something went wrong while setting up your company.");
    }
  };

  const errorMessage =
    (error as any)?.data?.message || "Failed to create company";

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Company Details
        </h1>
        <p className="text-muted-foreground">
          Tell us about the company you&apos;re hiring for.
        </p>
      </div>

      {error && (
        <Alert
          variant="destructive"
          className="rounded-xl bg-red-50 dark:bg-red-900/20"
        >
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Company Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Company Name</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="e.g. Acme Corp"
                className="pl-10 h-12 rounded-xl focus-visible:ring-purple-600"
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Website */}
          <div className="grid gap-2">
            <Label htmlFor="website">Website</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="website"
                placeholder="https://company.com"
                className="pl-10 h-12 rounded-xl focus-visible:ring-purple-600"
                {...register("website")}
              />
            </div>
            {errors.website && (
              <p className="text-xs text-red-500">{errors.website.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Industry - Shadcn Select integration */}
          <div className="grid gap-2">
            <Label>Industry</Label>
            <Select onValueChange={(v) => setValue("industry", v)}>
              <SelectTrigger className="h-12 rounded-xl focus:ring-purple-600">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Software / SaaS">Software / SaaS</SelectItem>
                <SelectItem value="Fintech">Fintech</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="AI / Machine Learning">
                  AI / Machine Learning
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-xs text-red-500">{errors.industry.message}</p>
            )}
          </div>

          {/* Location */}
          <div className="grid gap-2">
            <Label htmlFor="location">Headquarters</Label>
            <Input
              id="location"
              placeholder="e.g. San Francisco, Remote"
              className="h-12 rounded-xl focus-visible:ring-purple-600"
              {...register("location")}
            />
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location.message}</p>
            )}
          </div>
        </div>

        {/* Bio */}
        <div className="grid gap-2">
          <Label htmlFor="description">Company Bio</Label>
          <Textarea
            id="description"
            placeholder="A short description of your mission..."
            className="min-h-[100px] rounded-xl resize-none focus-visible:ring-purple-600"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-xs text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Logo Dropzone Placeholder */}
        <div className="grid gap-2">
          <Label>Company Logo</Label>
          <div className="border-2 border-dashed border-muted rounded-2xl p-6 text-center hover:bg-muted/30 transition-colors cursor-pointer group">
            <ImagePlus className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-purple-600 transition-colors" />
            <p className="text-sm font-medium">Click to upload logo</p>
            <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold shadow-lg shadow-purple-500/20 transition-all"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Complete Employer Setup"
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            disabled={isLoading}
          >
            Go back
          </Button>
        </div>
      </form>
    </div>
  );
}
