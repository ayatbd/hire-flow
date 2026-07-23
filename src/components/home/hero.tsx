"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Search, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* --- Announcement Badge --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-1.5 py-1 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2 fill-blue-700" />
              AI-Powered Job Matching is here
            </Badge>
          </motion.div>

          {/* --- Main Headline --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 max-w-[800px]"
          >
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Next <span className="text-blue-600">Career Move</span>{" "}
              In Tech
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl dark:text-gray-400">
              Discover thousands of job opportunities from top-tier tech
              companies. Your dream role is just one click away.
            </p>
          </motion.div>

          {/* --- Modern Search Bar --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-2 p-2 bg-background border rounded-2xl shadow-xl shadow-blue-500/5 backdrop-blur-sm">
              {/* Job Title Input */}
              <div className="relative flex-1 w-full">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Job title or keywords"
                  className="w-full pl-10 border-none bg-transparent focus-visible:ring-0 text-base"
                />
              </div>

              <div className="hidden md:block w-[1px] h-8 bg-border" />

              {/* Location Input */}
              <div className="relative flex-1 w-full">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Location (Remote, NY, etc.)"
                  className="w-full pl-10 border-none bg-transparent focus-visible:ring-0 text-base"
                />
              </div>

              {/* Search Button */}
              <Button
                size="lg"
                className="w-full md:w-auto px-8 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Button>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <span>Popular:</span>
              {[
                "Frontend",
                "Backend",
                "Fullstack",
                "DevOps",
                "AI Engineer",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-muted/50 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* --- Stats / Social Proof --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 w-full max-w-3xl border-t border-muted"
          >
            {[
              { label: "Active Jobs", value: "12,000+" },
              { label: "Companies", value: "450+" },
              { label: "Candidates", value: "80,000+" },
              { label: "Hired Monthly", value: "2,500+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-blue-600">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
