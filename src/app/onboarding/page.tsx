"use client";

import { PersonalStep } from "@/components/onboarding/personal-step";
import { RecruiterDetailStep } from "@/components/onboarding/recruiter-detail-step";
import { RoleStep } from "@/components/onboarding/role-step";
import { SeekerDetailStep } from "@/components/onboarding/seeker-detail-step";
import { Container } from "@/components/shared/container";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"seeker" | "recruiter" | null>(null);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <Container className="max-w-2xl">
        {/* --- Progress Indicator --- */}
        <div className="flex gap-2 mb-12 justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 w-16 rounded-full transition-all duration-500 ${
                step >= i ? "bg-blue-600" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* --- Step Container with Animation --- */}
        <div className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <RoleStep setRole={setRole} onNext={nextStep} />}

              {step === 2 && (
                <PersonalStep onNext={nextStep} onBack={prevStep} />
              )}

              {step === 3 &&
                (role === "seeker" ? (
                  <SeekerDetailStep onBack={prevStep} />
                ) : (
                  <RecruiterDetailStep onBack={prevStep} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </main>
  );
}
