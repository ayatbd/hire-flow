import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function JobFilters({
  selectedTypes,
  onTypeChange,
  selectedExp,
  onExpChange,
}: any) {
  const handleToggle = (list: string[], val: string, setter: Function) => {
    const updated = list.includes(val)
      ? list.filter((item) => item !== val)
      : [...list, val];
    setter(updated);
  };

  return (
    <div className="bg-background p-6 rounded-3xl border shadow-sm space-y-8">
      {/* Job Type Filter */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-muted-foreground">
          Employment Type
        </h3>
        <div className="space-y-3">
          {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() =>
                  handleToggle(selectedTypes, type, onTypeChange)
                }
              />
              <Label
                htmlFor={type}
                className="text-sm font-medium cursor-pointer"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-muted-foreground">
          Experience
        </h3>
        <div className="space-y-3">
          {["Entry Level", "Mid Level", "Senior", "Lead"].map((exp) => (
            <div key={exp} className="flex items-center space-x-2">
              <Checkbox
                id={exp}
                checked={selectedExp.includes(exp)}
                onCheckedChange={() =>
                  handleToggle(selectedExp, exp, onExpChange)
                }
              />
              <Label
                htmlFor={exp}
                className="text-sm font-medium cursor-pointer"
              >
                {exp}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
