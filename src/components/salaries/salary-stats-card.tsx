export function SalaryStatsCard({
  role,
  location,
}: {
  role: string;
  location: string;
}) {
  return (
    <div className="bg-background rounded-3xl p-8 border shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">{role}</h2>
        <p className="text-muted-foreground">
          {location} • Average Base Salary
        </p>
      </div>

      <div className="flex items-end gap-2 mb-2">
        <span className="text-5xl font-extrabold text-blue-600">$145,000</span>
        <span className="text-muted-foreground font-medium pb-1">/ year</span>
      </div>

      <div className="mt-12 space-y-6">
        <div className="relative h-4 w-full bg-muted rounded-full overflow-hidden">
          {/* Visualizing the "Common Range" with a colored middle section */}
          <div className="absolute left-[20%] right-[20%] h-full bg-blue-600/20 border-x-2 border-blue-600" />
          <div className="absolute left-[48%] top-[-4px] h-6 w-1 bg-blue-600 rounded-full" />
        </div>

        <div className="flex justify-between text-sm font-bold">
          <div className="text-left">
            <p className="text-muted-foreground font-normal">Low</p>
            <p>$95k</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground font-normal">Median</p>
            <p>$145k</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground font-normal">High</p>
            <p>$210k</p>
          </div>
        </div>
      </div>
    </div>
  );
}
