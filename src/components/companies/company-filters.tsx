"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const industries = [
  "Fintech",
  "SaaS",
  "Healthtech",
  "Healthcare", // Added to match your DB sample
  "E-commerce",
  "AI/ML",
];

export function CompanyFilters({
  selectedIndustries = [],
  onIndustryChange,
}: any) {
  const handleToggle = (industry: string) => {
    // Safety check: ensure selectedIndustries is treated as an array
    const currentList = selectedIndustries || [];

    const updated = currentList.includes(industry)
      ? currentList.filter((i: string) => i !== industry)
      : [...currentList, industry];

    onIndustryChange(updated);
  };

  return (
    <div className="space-y-8 bg-background p-6 rounded-2xl border shadow-sm">
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Industry
        </h3>
        <div className="space-y-3">
          {industries.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={item}
                // ✅ FIX: Add fallback to prevent 'undefined' crash
                checked={selectedIndustries?.includes(item) || false}
                onCheckedChange={() => handleToggle(item)}
              />
              <Label
                htmlFor={item}
                className="text-sm font-medium cursor-pointer"
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>
      {/* ... Clear button ... */}
    </div>
  );
}
