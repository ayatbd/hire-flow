import { RegisterForm } from "@/components/forms/register-form";
import { BriefcaseBusiness } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <BriefcaseBusiness className="mr-2 h-6 w-6 text-blue-600" /> HireFlow
        </div>
        <div className="relative z-20 mt-auto">
          <p className="text-lg">
            "The best platform to manage your tech career."
          </p>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Choose your role and get started
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
