import { LoginForm } from "@/components/forms/login-form";
import { BriefcaseBusiness } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | HireFlow",
  description: "Login to your account to manage your job search.",
};

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* --- Left Side: Branding/Visual --- */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />{" "}
        {/* Replace with an image background if desired */}
        <div className="relative z-20 flex items-center text-lg font-medium">
          <BriefcaseBusiness className="mr-2 h-6 w-6 text-blue-500" />
          HireFlow
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform has completely transformed how I track my
              applications. The UI is incredibly intuitive and fast.&rdquo;
            </p>
            <footer className="text-sm">
              Alex Rivera — Full Stack Developer
            </footer>
          </blockquote>
        </div>
      </div>

      {/* --- Right Side: Login Form --- */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>

          <LoginForm />

          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary text-blue-500 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
