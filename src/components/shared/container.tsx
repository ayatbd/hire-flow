import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// 1. Container: Logic for horizontal alignment and max-width
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

interface SectionProps extends ContainerProps {
  id?: string;
  background?: "default" | "muted" | "primary" | "none";
}

// 2. Section: Logic for vertical spacing and background colors
export function Section({
  children,
  className,
  id,
  background = "default",
}: SectionProps) {
  const backgrounds = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-blue-600 text-white",
    none: "",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-10 md:py-16 lg:py-24", // Standardized vertical padding
        backgrounds[background],
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
