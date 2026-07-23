import { cn } from "@/lib/utils";
import { Code2, Cpu, Database, Globe, Layout, Palette } from "lucide-react";

const categories = [
  {
    name: "Development",
    icon: <Code2 />,
    count: "1.2k+",
    className: "md:col-span-2 md:row-span-2 bg-blue-50 dark:bg-blue-950/30",
  },
  {
    name: "Design",
    icon: <Palette />,
    count: "800+",
    className: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    name: "Marketing",
    icon: <Globe />,
    count: "450+",
    className: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    name: "Data Science",
    icon: <Database />,
    count: "600+",
    className: "md:col-span-2 bg-green-50 dark:bg-green-950/30",
  },
  {
    name: "DevOps",
    icon: <Cpu />,
    count: "300+",
    className: "bg-red-50 dark:bg-red-950/30",
  },
  {
    name: "Product",
    icon: <Layout />,
    count: "500+",
    className: "bg-cyan-50 dark:bg-cyan-950/30",
  },
];

export function JobCategories() {
  return (
    <section className="container py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Browse by Category
        </h2>
        <p className="text-muted-foreground mt-2">
          Explore opportunities across popular tech niches.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={cn(
              "group relative overflow-hidden rounded-3xl p-8 border transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer",
              cat.className,
            )}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="p-3 w-fit rounded-2xl bg-background shadow-sm group-hover:scale-110 transition-transform">
                {/* {React.cloneElement(cat.icon as React.ReactElement, {
                  className: "w-6 h-6 text-blue-600",
                })} */}
              </div>
              <div>
                <h3 className="font-bold text-xl">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cat.count} Open Roles
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
