import { Button } from "@/components/ui/button";
import { FilePlus, UserPlus } from "lucide-react";
import Link from "next/link";

export function DualCTA() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* For Job Seekers */}
      <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-8 md:p-12 text-white group">
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl font-bold">Find your dream job</h3>
          <p className="text-blue-100 max-w-[300px]">
            Join thousands of developers and get discovered by top companies
            worldwide.
          </p>
          <Button size="lg" variant="secondary" className="group/btn">
            <Link href="/register">
              Get Started{" "}
              <UserPlus className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
        <UserPlus className="absolute -bottom-4 -right-4 h-40 w-40 text-blue-500 opacity-20" />
      </div>

      {/* For Employers */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-12 text-white dark:bg-zinc-900 group border border-zinc-800">
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl font-bold">Hire top talent</h3>
          <p className="text-zinc-400 max-w-[300px]">
            Post your job and reach the best candidates in the tech industry
            today.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-zinc-200 group/btn"
          >
            <Link href="/register?role=EMPLOYER">
              Post a Job{" "}
              <FilePlus className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
        <FilePlus className="absolute -bottom-4 -right-4 h-40 w-40 text-zinc-700 opacity-20" />
      </div>
    </div>
  );
}
