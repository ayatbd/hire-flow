import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Step2LocationSalary({ form }: { form: any }) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const currentWorkMode = watch("workMode");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Workplace Policy - Custom Cards */}
      <div className="grid gap-3">
        <Label className="text-base font-bold">Workplace Policy</Label>
        <RadioGroup
          defaultValue={currentWorkMode}
          onValueChange={(v) => setValue("workMode", v)}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {["On-site", "Hybrid", "Remote"].map((mode) => (
            <Label
              key={mode}
              className={`flex flex-col items-center justify-between rounded-2xl border-2 p-4 hover:bg-muted/50 cursor-pointer transition-all ${
                currentWorkMode === mode
                  ? "border-blue-600 bg-blue-50/50"
                  : "border-muted"
              }`}
            >
              <RadioGroupItem value={mode} className="sr-only" />
              <span className="font-bold">{mode}</span>
            </Label>
          ))}
        </RadioGroup>
        {errors.workMode && (
          <p className="text-xs text-red-500">{errors.workMode.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Location */}
        <div className="grid gap-2">
          <Label htmlFor="location" className="font-bold">
            Location
          </Label>
          <Input
            id="location"
            placeholder="e.g. San Francisco or Worldwide"
            className="h-12 rounded-xl"
            {...register("location")}
          />
          {errors.location && (
            <p className="text-xs text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Experience Level */}
        <div className="grid gap-2">
          <Label className="font-bold">Experience Level</Label>
          <Select onValueChange={(v) => setValue("experienceLevel", v)}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {["Entry Level", "Mid Level", "Senior", "Lead", "Executive"].map(
                (level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
          {errors.experienceLevel && (
            <p className="text-xs text-red-500">
              {errors.experienceLevel.message}
            </p>
          )}
        </div>
      </div>

      {/* Salary Range */}
      <div className="grid gap-4 p-6 rounded-3xl bg-muted/30 border border-dashed">
        <Label className="font-bold text-base">Annual Salary Range (USD)</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label
              htmlFor="minSalary"
              className="text-xs text-muted-foreground uppercase tracking-wider"
            >
              Minimum
            </Label>
            <Input
              id="minSalary"
              type="number"
              placeholder="80000"
              className="h-12 rounded-xl bg-background"
              {...register("salary.min")}
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="maxSalary"
              className="text-xs text-muted-foreground uppercase tracking-wider"
            >
              Maximum
            </Label>
            <Input
              id="maxSalary"
              type="number"
              placeholder="120000"
              className="h-12 rounded-xl bg-background"
              {...register("salary.max")}
            />
          </div>
        </div>
        {(errors.salary?.min || errors.salary?.max) && (
          <p className="text-xs text-red-500">
            Please enter a valid salary range.
          </p>
        )}
      </div>
    </div>
  );
}
