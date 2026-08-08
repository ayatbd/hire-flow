"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Building2, Loader2, User } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Redux Hooks (Assuming you have these typed hooks set up)
import { clearError, registerUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Bounce, toast } from "react-toastify";

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
  // const { toast } = useToast();

  // Redux State
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

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

  // Clear Redux error when user changes inputs
  React.useEffect(() => {
    if (error) dispatch(clearError());
  }, [watch("email"), watch("password")]);

  const onSubmit = async (data: FormData) => {
    // Dispatch the Redux Async Thunk
    const resultAction = await dispatch(registerUser(data));

    if (registerUser.fulfilled.match(resultAction)) {
      toast.success("Account Created successfully!", {
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
    } else {
      toast.error("Something went wrong", {
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
    }
  };

  return (
    <div className="grid gap-6">
      {/* Show Error from Redux Backend */}
      {error && (
        <Alert
          variant="destructive"
          className="rounded-xl bg-red-50 dark:bg-red-900/20"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>I am a...</Label>
            <Tabs
              defaultValue="seeker"
              className="w-full"
              onValueChange={(v) =>
                setValue("role", v as "seeker" | "recruiter")
              }
            >
              <TabsList className="grid w-full grid-cols-2 h-12 rounded-xl p-1">
                <TabsTrigger value="seeker" className="rounded-lg gap-2">
                  <User className="h-4 w-4" /> Candidate
                </TabsTrigger>
                <TabsTrigger value="recruiter" className="rounded-lg gap-2">
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
              className="rounded-xl h-11"
              disabled={isLoading}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="rounded-xl h-11"
              disabled={isLoading}
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
              className="rounded-xl h-11"
              disabled={isLoading}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            disabled={isLoading}
            className="mt-2 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold"
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
