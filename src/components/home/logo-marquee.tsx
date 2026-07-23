const companies = [
  "Google",
  "Amazon",
  "Meta",
  "Netflix",
  "Microsoft",
  "Stripe",
  "Airbnb",
];

export function LogoMarquee() {
  return (
    <div className="w-full py-10 border-y bg-muted/30 overflow-hidden">
      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {[...companies, ...companies].map((company, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default px-8"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}
