import { LoginForm } from "@/components/forms/login-form";
import { ArrowLeft, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | HireFlow",
  description: "Login to your account to manage your job search.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Branding Section */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#101828] p-12 text-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-500/20" />

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2.5 text-xl font-bold tracking-tight"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <BriefcaseBusiness className="h-5 w-5 text-white" />
          </div>
          HireFlow<span className="text-blue-400">.</span>
        </Link>

        {/* Main Content */}
        <div className="relative z-10 max-w-xl space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Welcome back to HireFlow
          </div>

          <h1 className="text-5xl font-bold leading-[1.15] tracking-tight xl:text-6xl">
            Your next
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              opportunity
            </span>
            is waiting.
          </h1>

          <p className="max-w-md text-lg leading-8 text-slate-300">
            Sign in to continue your journey. Manage your applications, explore
            opportunities, and connect with the right people.
          </p>

          {/* Benefits */}
          <div className="space-y-4 pt-4">
            {[
              "Track and manage your applications",
              "Discover opportunities that match your skills",
              "Stay connected with your professional network",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-sm text-slate-400">
          <span>
            © {new Date().getFullYear()} HireFlow. All rights reserved.
          </span>
          <span>Built for your future.</span>
        </div>
      </div>

      {/* Right Login Section */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        {/* Mobile Logo */}
        <Link
          href="/"
          className="mb-10 flex items-center gap-2 text-xl font-bold tracking-tight lg:hidden"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <BriefcaseBusiness className="h-5 w-5 text-white" />
          </div>
          HireFlow<span className="text-blue-600">.</span>
        </Link>

        <div className="w-full max-w-[440px]">
          {/* Back to Home */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Heading */}
          <div className="mb-8 space-y-3">
            <div className="inline-flex rounded-lg bg-blue-600/10 px-3 py-1.5 text-xs font-semibold text-blue-600">
              WELCOME BACK
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sign in to HireFlow
            </h2>

            <p className="text-sm leading-6 text-muted-foreground">
              Enter your credentials to access your account and continue where
              you left off.
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Register Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
