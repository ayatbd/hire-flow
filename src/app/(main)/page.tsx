import { FeaturedJobs } from "@/components/home/featured-jobs";
import { Hero } from "@/components/home/hero";
import { JobCategories } from "@/components/home/job-categories";
import { LogoMarquee } from "@/components/home/logo-marquee";

const page = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <JobCategories />
      <FeaturedJobs />
    </div>
  );
};

export default page;
