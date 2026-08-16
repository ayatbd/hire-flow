import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export function Step3Description({ form }: { form: any }) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const [skillInput, setSkillInput] = useState("");

  const currentSkills = watch("skills") || [];

  // Add Skill logic
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!currentSkills.includes(skillInput.trim())) {
        setValue("skills", [...currentSkills, skillInput.trim()], {
          shouldValidate: true,
        });
      }
      setSkillInput("");
    }
  };

  // Remove Skill logic
  const removeSkill = (skillToRemove: string) => {
    setValue(
      "skills",
      currentSkills.filter((s: string) => s !== skillToRemove),
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Job Description */}
      <div className="grid gap-2">
        <Label htmlFor="description" className="text-base font-bold">
          Job Description
        </Label>
        <p className="text-xs text-muted-foreground mb-2">
          Describe the role, responsibilities, and why someone should join.
        </p>
        <Textarea
          id="description"
          placeholder="We are looking for..."
          className="min-h-62.5 rounded-2xl p-4 focus-visible:ring-blue-600 resize-none"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-xs text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Skills Tagging */}
      <div className="grid gap-2">
        <Label className="text-base font-bold flex items-center gap-2">
          Required Skills <Sparkles className="h-4 w-4 text-blue-600" />
        </Label>
        <p className="text-xs text-muted-foreground mb-2">
          Press enter to add a skill (e.g., React, Node.js).
        </p>

        <Input
          placeholder="Type skill and press enter..."
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-12 rounded-xl focus-visible:ring-blue-600"
        />

        <div className="flex flex-wrap gap-2 mt-3">
          {currentSkills.map((skill: string) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border-none flex items-center gap-1 group"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="hover:text-red-600"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
        {errors.skills && (
          <p className="text-xs text-red-500">{errors.skills.message}</p>
        )}
      </div>

      {/* Helpful Tip */}
      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl text-amber-800 dark:text-amber-200 text-sm italic">
        Tip: Jobs with at least 5 clear skills get 3x more relevant applicants.
      </div>
    </div>
  );
}
