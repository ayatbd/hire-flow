import { RegisterForm } from "@/components/forms/register-form";
import { BriefcaseBusiness } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Account | HireFlow",
  description:
    "Join HireFlow to find your next career move or hire top talent.",
};

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* --- Left Side: Branding (Same as Login for consistency) --- */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <BriefcaseBusiness className="mr-2 h-6 w-6 text-blue-500" />
          HireFlow
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Joining this platform was the best career move I made this
              year. I found a remote role in less than two weeks.&rdquo;
            </p>
            <footer className="text-sm">
              Sarah Jenkins — Frontend Engineer
            </footer>
          </blockquote>
        </div>
      </div>

      {/* --- Right Side: Register Form --- */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to get started
            </p>
          </div>

          <RegisterForm />

          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary text-blue-500 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
