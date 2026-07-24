import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Step2LocationSalary() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4">
        <Label>Workplace Policy</Label>
        <RadioGroup defaultValue="remote" className="grid grid-cols-3 gap-4">
          {["On-site", "Hybrid", "Remote"].map((mode) => (
            <Label
              key={mode}
              className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-blue-600"
            >
              <RadioGroupItem value={mode.toLowerCase()} className="sr-only" />
              <span className="font-semibold">{mode}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label>Min Salary (USD)</Label>
          <Input type="number" placeholder="e.g. 80000" className="h-12" />
        </div>
        <div className="grid gap-2">
          <Label>Max Salary (USD)</Label>
          <Input type="number" placeholder="e.g. 120000" className="h-12" />
        </div>
      </div>
    </div>
  );
}
