"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Building2, Loader2, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";

import { Bounce, toast } from "react-toastify";

import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // 1. Properly destructure 'error' from the mutation hook
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "seeker" },
  });

  const selectedRole = watch("role");

  const onSubmit = async (values: FormData) => {
    try {
      // 2. Use .unwrap() to catch errors in the 'catch' block
      const response = await registerUser(values).unwrap();

      // response structure: { user: {...}, token: "..." }
      dispatch(setUser({ user: response.user, token: response.token }));

      // toast.success("Registration successful!");
      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      router.push("/onboarding");
    } catch (err) {
      // Error is handled by the hook's 'error' state
      console.error("Registration Error:", err);
    }
  };

  // 3. Extract the error message from the RTK Query error object
  const errorMessage =
    (error as any)?.data?.message || "An error occurred during registration";

  return (
    <div className="grid gap-6">
      {/* 4. Show Error if the mutation fails */}
      {error && (
        <Alert
          variant="destructive"
          className="rounded-xl bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="text-sm font-semibold">I am a...</Label>
            <Tabs
              defaultValue="seeker"
              className="w-full"
              onValueChange={(v) =>
                setValue("role", v as "seeker" | "recruiter")
              }
            >
              <TabsList className="grid w-full grid-cols-2 h-12 rounded-xl p-1 bg-muted/50">
                <TabsTrigger
                  value="seeker"
                  className="rounded-lg gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <User className="h-4 w-4" /> Candidate
                </TabsTrigger>
                <TabsTrigger
                  value="recruiter"
                  className="rounded-lg gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Building2 className="h-4 w-4" /> Employer
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              className="rounded-xl h-11 focus-visible:ring-blue-600"
              disabled={isLoading}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-[12px] font-medium text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="rounded-xl h-11 focus-visible:ring-blue-600"
              disabled={isLoading}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[12px] font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="rounded-xl h-11 focus-visible:ring-blue-600"
              disabled={isLoading}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-[12px] font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold transition-all shadow-lg shadow-blue-500/20"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : selectedRole === "seeker" ? (
              "Join as Candidate"
            ) : (
              "Join as Employer"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
