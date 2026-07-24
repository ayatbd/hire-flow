import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

export function SalaryHero() {
  return (
    <div className="bg-slate-900 pt-20 pb-32 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Know your worth
        </h1>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Explore real salary data from thousands of developers. Filter by role,
          location, and experience level.
        </p>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-2 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Job Title (e.g. React Developer)"
              className="bg-transparent border-none text-white placeholder:text-slate-400 focus-visible:ring-0 h-12 text-lg"
            />
          </div>
          <div className="hidden md:block w-px h-8 self-center bg-white/20" />
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Location"
              className="bg-transparent border-none text-white placeholder:text-slate-400 focus-visible:ring-0 h-12 text-lg"
            />
          </div>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl font-bold"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
