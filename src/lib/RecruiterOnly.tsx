"use client";

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RecruiterOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "recruiter") {
      router.replace("/");
    }
  }, [user, router]);

  if (!user || user.role !== "recruiter") {
    return null;
  }

  return children;
}
