"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

import { Step1RoleDetails } from "@/components/forms/post-job/step-1";
import { Step2LocationSalary } from "@/components/forms/post-job/step-2";
import { Step3Description } from "@/components/forms/post-job/step-3";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useCreateJobMutation } from "@/redux/api/jobsApi";

// 1. Validation Schema
const jobSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  type: z.string().min(1, "Please select job type"),
  workMode: z.string().min(1, "Please select work mode"),
  location: z.string().min(2, "Location is required"),
  salary: z.object({
    min: z.string().transform((v) => Number(v)),
    max: z.string().transform((v) => Number(v)),
    currency: z.string().default("USD"),
  }),
  experienceLevel: z.string().min(1, "Please select experience level"),
  description: z.string().min(20, "Description is too short"),
  skills: z.array(z.string()).min(1, "Add at least one skill"),
});

type JobFormData = z.infer<typeof jobSchema>;

const STEPS = ["Role Details", "Location & Salary", "Description"];

export default function PostJobPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [createJob, { isLoading }] = useCreateJobMutation();

  // 2. Initialize Form
  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      type: "Full-time",
      workMode: "Remote",
      salary: { currency: "USD" },
      skills: [],
    },
  });

  // 3. Navigation Logic
  const nextStep = async () => {
    // Validate only fields in the current step before proceeding
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields as any);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // 4. Final Submit
  const onSubmit = async (data: JobFormData) => {
    try {
      await createJob(data).unwrap();
      toast.success("Job published successfully!");
      router.push("/recruiter/dashboard");
    } catch (err) {
      toast.error("Failed to publish job. Please check your details.");
    }
  };

  const {
    formState: { errors },
  } = form;

  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("❌ Validation Errors:", errors);
    }
  }, [errors]);

  return (
    <main className="min-h-screen bg-muted/20 py-12">
      <Container className="max-w-3xl">
        {/* Progress Tracker */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 -z-10" />
            {STEPS.map((step, i) => (
              <div
                key={step}
                className="flex flex-col items-center gap-2 bg-muted/20 px-2"
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                    currentStep >= i + 1
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-background border-muted text-muted-foreground",
                  )}
                >
                  {currentStep > i + 1 ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="text-xs font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-background border rounded-3xl p-8 shadow-sm">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 1 && <Step1RoleDetails form={form} />}
            {currentStep === 2 && <Step2LocationSalary form={form} />}
            {currentStep === 3 && <Step3Description form={form} />}

            <div className="flex justify-between mt-10 pt-6 border-t">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 1 || isLoading}
              >
                Back
              </Button>

              {currentStep === STEPS.length ? (
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 px-8"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Publish Job"
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                >
                  Next Step
                </Button>
              )}
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}

// Helper to determine which fields to validate per step
function getFieldsForStep(step: number) {
  if (step === 1) return ["title", "category", "type"];
  if (step === 2) return ["workMode", "location", "salary.min", "salary.max"];
  return [];
}
