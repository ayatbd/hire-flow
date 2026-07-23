"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Loader2, User } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Validation Schema
const registerSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  role: z.enum(["CANDIDATE", "EMPLOYER"]),
});

type FormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  // const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "CANDIDATE",
    },
  });

  const selectedRole = watch("role");

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      console.log("Registering user:", data);

      // Simulate API Call to your separate backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Toaster({
      //   title: "Account created!",
      //   description: `Welcome to HireFlow, ${data.fullName}!`,
      // });
    } catch (error) {
      // Toaster({
      //   variant: "destructive",
      //   title: "Registration failed",
      //   description: "Something went wrong. Please try again.",
      // });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {/* Role Selector */}
          <div className="grid gap-2">
            <Label>I am a...</Label>
            <Tabs
              defaultValue="CANDIDATE"
              className="w-full"
              onValueChange={(value) =>
                setValue("role", value as "CANDIDATE" | "EMPLOYER")
              }
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="CANDIDATE"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" /> Candidate
                </TabsTrigger>
                <TabsTrigger
                  value="EMPLOYER"
                  className="flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4" /> Employer
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              disabled={isLoading}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              disabled={isLoading}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              disabled={isLoading}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button disabled={isLoading} className="mt-2">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {selectedRole === "CANDIDATE"
              ? "Join as Candidate"
              : "Join as Employer"}
          </Button>
        </div>
      </form>
    </div>
  );
}
