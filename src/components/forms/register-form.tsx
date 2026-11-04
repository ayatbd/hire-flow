"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  Building2,
  Check,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
  User,
  UserRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";
import * as z from "zod";

import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const registerSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["seeker", "recruiter"]),
});

type FormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "seeker",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (values: FormData) => {
    try {
      const response = await registerUser(values).unwrap();

      dispatch(
        setUser({
          user: response.user,
          token: response.token,
        }),
      );

      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      router.push("/onboarding");
    } catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const errorMessage =
    (error as any)?.data?.message || "An error occurred during registration";

  return (
    <div className="w-full">
      {/* API Error */}
      {error && (
        <Alert
          variant="destructive"
          className="mb-6 flex items-start gap-3 rounded-xl border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900 dark:bg-red-950/30"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

          <AlertDescription className="text-sm font-medium">
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {/* Role Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">I want to join as</Label>

            <div className="grid grid-cols-2 gap-3">
              {/* Candidate */}
              <button
                type="button"
                disabled={isLoading}
                onClick={() =>
                  setValue("role", "seeker", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                className={`group relative flex flex-col items-center gap-3 rounded-xl border-2 p-4 text-center transition-all duration-200 ${
                  selectedRole === "seeker"
                    ? "border-blue-600 bg-blue-50/70 shadow-sm shadow-blue-600/5 dark:bg-blue-950/30"
                    : "border-border bg-background hover:border-blue-300 hover:bg-muted/40"
                }`}
              >
                {selectedRole === "seeker" && (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                    selectedRole === "seeker"
                      ? "bg-blue-600 text-white"
                      : "bg-muted text-muted-foreground group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-950"
                  }`}
                >
                  <UserRound className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold">Candidate</p>

                  <p className="text-xs text-muted-foreground">
                    Find your next job
                  </p>
                </div>
              </button>

              {/* Employer */}
              <button
                type="button"
                disabled={isLoading}
                onClick={() =>
                  setValue("role", "recruiter", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                className={`group relative flex flex-col items-center gap-3 rounded-xl border-2 p-4 text-center transition-all duration-200 ${
                  selectedRole === "recruiter"
                    ? "border-blue-600 bg-blue-50/70 shadow-sm shadow-blue-600/5 dark:bg-blue-950/30"
                    : "border-border bg-background hover:border-blue-300 hover:bg-muted/40"
                }`}
              >
                {selectedRole === "recruiter" && (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                    selectedRole === "recruiter"
                      ? "bg-blue-600 text-white"
                      : "bg-muted text-muted-foreground group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-950"
                  }`}
                >
                  <Building2 className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold">Employer</p>

                  <p className="text-xs text-muted-foreground">
                    Hire talented people
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-semibold">
              Full name
            </Label>

            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="fullName"
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={isLoading}
                className={`h-12 rounded-xl border-border bg-background pl-10 text-sm transition-all placeholder:text-muted-foreground/60 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/15 ${
                  errors.fullName
                    ? "border-red-500 focus-visible:ring-red-500/15"
                    : ""
                }`}
                {...register("fullName")}
              />
            </div>

            {errors.fullName && (
              <p className="text-xs font-medium text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold">
              Email address
            </Label>

            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                disabled={isLoading}
                className={`h-12 rounded-xl border-border bg-background pl-10 text-sm transition-all placeholder:text-muted-foreground/60 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/15 ${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500/15"
                    : ""
                }`}
                {...register("email")}
              />
            </div>

            {errors.email && (
              <p className="text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-semibold">
              Password
            </Label>

            <div className="relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                autoComplete="new-password"
                disabled={isLoading}
                className={`h-12 rounded-xl border-border bg-background pl-10 pr-12 text-sm transition-all placeholder:text-muted-foreground/60 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/15 ${
                  errors.password
                    ? "border-red-500 focus-visible:ring-red-500/15"
                    : ""
                }`}
                {...register("password")}
              />

              <button
                type="button"
                disabled={isLoading}
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {errors.password ? (
              <p className="text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Use at least 8 characters for your password.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="group mt-2 h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 disabled:translate-y-0 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating your account...
              </>
            ) : (
              <>
                {selectedRole === "seeker"
                  ? "Create Candidate Account"
                  : "Create Employer Account"}
              </>
            )}
          </Button>

          {/* Bottom Note */}
          <p className="text-center text-xs text-muted-foreground">
            Your professional journey starts with one simple step.
          </p>
        </div>
      </form>
    </div>
  );
}
