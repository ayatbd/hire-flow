import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PersonalStep({ onNext, onBack }: { onNext: any; onBack: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold">About You</h1>
        <p className="text-muted-foreground">
          Let&apos;s start with the basics.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" className="h-12 rounded-xl" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="e.g. New York, Remote"
            className="h-12 rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          onClick={onNext}
          className="h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold"
        >
          Continue
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Go back
        </Button>
      </div>
    </div>
  );
}
