import { Building2, User } from "lucide-react";

export function RoleStep({ setRole, onNext }: { setRole: any; onNext: any }) {
  const handleRoleSelection = (role: "seeker" | "recruiter") => {
    setRole(role);
    onNext();
  };

  return (
    <div className="text-center space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold">
          How do you want to use HireFlow?
        </h1>
        <p className="text-muted-foreground">
          Choose the role that fits your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => handleRoleSelection("seeker")}
          className="p-8 rounded-3xl border-2 border-muted bg-background hover:border-blue-600 hover:bg-blue-50/50 transition-all text-left group"
        >
          <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">I&apos;m a Job Seeker</h3>
          <p className="text-sm text-muted-foreground italic">
            I want to find my next dream role and track my applications.
          </p>
        </button>

        <button
          onClick={() => handleRoleSelection("recruiter")}
          className="p-8 rounded-3xl border-2 border-muted bg-background hover:border-blue-600 hover:bg-blue-50/50 transition-all text-left group"
        >
          <div className="h-12 w-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Building2 className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">I&apos;m a Recruiter</h3>
          <p className="text-sm text-muted-foreground italic">
            I want to post jobs and find top tech talent for my team.
          </p>
        </button>
      </div>
    </div>
  );
}
