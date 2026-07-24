import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

const industries = [
  "Fintech",
  "SaaS",
  "Healthtech",
  "E-commerce",
  "AI/ML",
  "Cloud",
];
const sizes = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

export function CompanyFilters() {
  return (
    <div className="space-y-8 bg-background p-6 rounded-2xl border">
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Industry
        </h3>
        <div className="space-y-3">
          {industries.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item} />
              <Label
                htmlFor={item}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Company Size
        </h3>
        <div className="space-y-3">
          {sizes.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item} />
              <Label
                htmlFor={item}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
        Clear all filters
      </Button>
    </div>
  );
}
