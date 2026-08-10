"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
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
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched", // This will show errors as soon as you leave an input
  });

  // --- DEBUGGING SUBMISSION ---
  async function onSubmit(data: FormData) {
    console.log("SUBMIT TRIGGERED! Data:", data); // Check if this appears in browser console

    try {
      const response = await login(data).unwrap();
      console.log("API RESPONSE:", response);

      if (response?.token) {
        dispatch(setUser({ user: response.user, token: response.token }));
        toast.success("Welcome back!");
        router.push("/");
      }
    } catch (err) {
      console.error("API ERROR:", err);
    }
  }

  // This function runs IF validation fails
  const onInvalid = (errors: any) => {
    console.error("VALIDATION FAILED:", errors);
  };

  const errorMessage =
    (error as any)?.data?.message || "Invalid email or password.";

  return (
    <div className="grid gap-6">
      {error && (
        <Alert variant="destructive" className="rounded-xl bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      {/* Note: I added onInvalid here to catch errors */}
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="rounded-xl"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="rounded-xl"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* IMPORTANT: Ensure type="submit" is present */}
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 w-full"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
