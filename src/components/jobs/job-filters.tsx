"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const filterGroups = [
  {
    id: "type",
    label: "Job Type",
    options: ["Full-time", "Part-time", "Contract", "Internship"],
  },
  {
    id: "experience",
    label: "Experience Level",
    options: ["Entry Level", "Mid Level", "Senior Level", "Director"],
  },
];

export function JobFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-4">Filters</h3>
        <Accordion
          type="multiple"
          defaultValue={["type", "experience", "salary"]}
          className="w-full"
        >
          {/* Job Type & Experience */}
          {filterGroups.map((group) => (
            <AccordionItem
              value={group.id}
              key={group.id}
              className="border-none"
            >
              <AccordionTrigger className="py-2 hover:no-underline font-semibold text-sm">
                {group.label}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 space-y-3">
                {group.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox id={option} />
                    <Label
                      htmlFor={option}
                      className="text-sm font-normal leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Salary Range Slider */}
          <AccordionItem value="salary" className="border-none">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold text-sm">
              Salary Range (k)
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-4 px-2">
              <Slider defaultValue={[50, 150]} max={200} step={10} />
              <div className="flex justify-between mt-4 text-xs font-medium">
                <span>$50k</span>
                <span>$200k+</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
