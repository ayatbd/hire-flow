"use client";

import { Step1RoleDetails } from "@/components/forms/post-job/step-1";
import { Step2LocationSalary } from "@/components/forms/post-job/step-2";
import { Step3Description } from "@/components/forms/post-job/step-3";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const STEPS = ["Role Details", "Location & Salary", "Description"];

export default function PostJobPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen bg-muted/20 py-12">
      <Container className="max-w-3xl">
        {/* --- Progress Header --- */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
          <div className="flex items-center justify-between relative">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 -z-10" />

            {STEPS.map((step, i) => {
              const stepNum = i + 1;
              const isActive = currentStep >= stepNum;
              return (
                <div
                  key={step}
                  className="flex flex-col items-center gap-2 bg-muted/20 px-2"
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                      isActive
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-background border-muted text-muted-foreground",
                    )}
                  >
                    {currentStep > stepNum ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      stepNum
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Form Steps --- */}
        <div className="bg-background border rounded-3xl p-8 shadow-sm">
          {currentStep === 1 && <Step1RoleDetails />}
          {currentStep === 2 && <Step2LocationSalary />}
          {currentStep === 3 && <Step3Description />}

          {/* --- Navigation Buttons --- */}
          <div className="flex justify-between mt-10 pt-6 border-t">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Back
            </Button>

            {currentStep === STEPS.length ? (
              <Button className="bg-green-600 hover:bg-green-700 px-8">
                Publish Job
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 px-8"
              >
                Next Step
              </Button>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
