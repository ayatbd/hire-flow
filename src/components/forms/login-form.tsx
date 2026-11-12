"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as z from "zod";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

type FormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading, error }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: FormData) {
    try {
      const response = await login(data).unwrap();

      if (response?.token) {
        dispatch(
          setUser({
            user: response.user,
            token: response.token,
          }),
        );

        toast.success("Welcome back!");
        router.push("/");
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  }

  const errorMessage =
    (error as any)?.data?.message || "Invalid email or password.";

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
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-semibold">
                Password
              </Label>

              {/* Add your forgot password route here when available */}
              <span className="text-xs text-muted-foreground">
                Secure sign in
              </span>
            </div>

            <div className="relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
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
                onClick={() => setShowPassword((visible) => !visible)}
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

            {errors.password && (
              <p className="text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 disabled:translate-y-0 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing you in...
              </>
            ) : (
              "Sign In to Your Account"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Welcome back! We're glad to have you here.
          </p>
        </div>
      </form>
    </div>
  );
}
