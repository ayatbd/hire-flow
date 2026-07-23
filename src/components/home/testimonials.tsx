import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Found my Senior React role at a top startup within 2 weeks of joining HireFlow.",
    author: "Sarah Chen",
    role: "Frontend Engineer",
    avatar: "S",
  },
  {
    quote:
      "The hiring process was incredibly smooth. We found three great developers in record time.",
    author: "James Wilson",
    role: "Tech Lead @ Stripe",
    avatar: "J",
  },
  {
    quote:
      "Best UI of any job board I've ever used. The tracking system is a game changer.",
    author: "Elena Rodriguez",
    role: "Fullstack Developer",
    avatar: "E",
  },
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl bg-background border shadow-sm hover:shadow-md transition-shadow"
        >
          <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
          <p className="text-lg mb-6 leading-relaxed italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-bold text-blue-600">
              {t.avatar}
            </div>
            <div>
              <p className="font-bold text-sm">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
