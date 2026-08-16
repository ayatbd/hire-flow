// src/components/forms/post-job/step-1.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Step1RoleDetails({ form }: { form: any }) {
  const {
    register,
    formState: { errors },
    setValue,
  } = form;

  return (
    <div className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          placeholder="e.g. Senior React Developer"
          className="h-12 rounded-xl"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-xs text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label>Category</Label>
          <Select onValueChange={(v) => setValue("category", v)}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Product">Product</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-xs text-red-500">{errors.category.message}</p>
          )}
        </div>
        {/* ... Add Job Type Select similarly ... */}
        <div className="grid gap-2">
          <Label>Job Type</Label>
          <Select onValueChange={(v) => setValue("type", v)}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
            </SelectContent>
          </Select>
          {errors.type && (
            <p className="text-xs text-red-500">{errors.type.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
