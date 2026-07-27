import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Bookmark, Building2, ChevronLeft, MapPin, Share2 } from "lucide-react";
import Link from "next/link";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // Mock Data (In a real app, fetch this based on params.id)
  const job = {
    title: "Senior Full Stack Developer",
    company: "Vercel",
    location: "Remote (Global)",
    salary: "$140,000 - $190,000",
    type: "Full-time",
    postedAt: "2 days ago",
    applicants: 45,
    description: `
      <h3>About the Role</h3>
      <p>We are looking for a Senior Full Stack Engineer to join our core team. You will be responsible for building high-performance web applications using Next.js and Node.js.</p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Develop and maintain scalable web applications.</li>
        <li>Collaborate with cross-functional teams to define and ship new features.</li>
        <li>Optimize applications for maximum speed and scalability.</li>
        <li>Write clean, maintainable, and well-documented code.</li>
      </ul>
      <h3>Requirements</h3>
      <ul>
        <li>5+ years of experience with React and Node.js.</li>
        <li>Strong understanding of TypeScript and modern CSS.</li>
        <li>Experience with AWS or similar cloud providers.</li>
        <li>Excellent communication and problem-solving skills.</li>
      </ul>
    `,
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* --- Breadcrumb & Actions --- */}
      <div className="border-b bg-muted/20 py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/jobs"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Jobs
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="flex-1">
            <div className="flex items-start gap-6 mb-8">
              <div className="h-20 w-20 rounded-2xl bg-black flex items-center justify-center text-white text-3xl font-bold">
                V
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <Link
                    href="/companies/1"
                    className="font-bold text-foreground hover:text-blue-600 transition-colors"
                  >
                    {job.company}
                  </Link>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {job.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y mb-10">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                  Salary
                </p>
                <p className="font-semibold text-sm">{job.salary}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                  Job Type
                </p>
                <p className="font-semibold text-sm">{job.type}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                  Date Posted
                </p>
                <p className="font-semibold text-sm">{job.postedAt}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                  Applicants
                </p>
                <p className="font-semibold text-sm">
                  {job.applicants} applied
                </p>
              </div>
            </div>

            {/* Job Description (Using Tailwind Typography) */}
            <div
              className="prose prose-blue dark:prose-invert max-w-none mb-10"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />

            <div className="flex gap-4 border-t pt-10">
              <Button
                size="lg"
                className="px-10 bg-blue-600 hover:bg-blue-700 h-14 text-lg"
              >
                Apply for this job
              </Button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR --- */}
          <aside className="lg:w-80 space-y-8">
            {/* Company Card */}
            <div className="bg-muted/30 border rounded-3xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5" /> About the company
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Vercel is the platform for frontend developers, providing the
                speed and reliability needed to create at the speed of
                inspiration.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Industry</span>
                  <span className="font-medium">Technology</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">500-1000</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Link href="/companies/1">View Company Profile</Link>
              </Button>
            </div>

            {/* Similar Jobs Placeholder */}
            <div className="space-y-4">
              <h3 className="font-bold">Similar Roles</h3>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="p-4 border rounded-2xl hover:border-blue-500 transition-colors cursor-pointer group"
                >
                  <p className="font-bold group-hover:text-blue-600 transition-colors">
                    Product Engineer
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Linear • Remote
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>

      {/* --- STICKY MOBILE APPLY BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t bg-background/80 backdrop-blur-md lg:hidden z-50">
        <Button className="w-full h-12 bg-blue-600">Apply Now</Button>
      </div>
    </div>
  );
}
