import { DualCTA } from "@/components/home/dual-cta";
import { FeaturedJobs } from "@/components/home/featured-jobs";
import { Hero } from "@/components/home/hero";
import { JobCategories } from "@/components/home/job-categories";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { Section } from "@/components/shared/container";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoMarquee />

      <Section id="categories">
        <JobCategories />
      </Section>

      <Section id="stats" background="muted">
        <Stats />
      </Section>

      <Section id="featured-jobs">
        <FeaturedJobs />
      </Section>

      <Section id="cta">
        <DualCTA />
      </Section>

      <Section id="testimonials" background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by developers & recruiters
          </h2>
          <p className="text-muted-foreground mt-2">
            See what our community has to say.
          </p>
        </div>
        <Testimonials />
      </Section>
    </main>
  );
}
