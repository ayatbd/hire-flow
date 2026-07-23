import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <BriefcaseBusiness className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">HireFlow</span>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              The modern job board for the next generation of tech talent. Find
              your place, build your future.
            </p>
            <div className="flex gap-4">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-blue-400 cursor-pointer" />
              <LuGithub className="h-5 w-5 text-muted-foreground hover:text-white cursor-pointer" />
              <LuLinkedin className="h-5 w-5 text-muted-foreground hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-4">For Candidates</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/jobs" className="hover:text-blue-600">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-600">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-blue-600">
                  Companies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/register?role=EMPLOYER"
                  className="hover:text-blue-600"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/hiring-guide" className="hover:text-blue-600">
                  Hiring Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HireFlow Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
