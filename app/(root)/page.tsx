import CtaSection from "@/components/landing/cta-section";
import FeatureSection from "@/components/landing/feature-section";
import FooterSection from "@/components/landing/footer-section";
import Hero from "@/components/landing/hero-section";
import HowItWorks from "@/components/landing/how-it-work";
import NavbarSection from "@/components/landing/navbar-section";
import ShowcaseSection from "@/components/landing/showcase-section";
import StatisticSection from "@/components/landing/statistic-section";
import { SanityLive } from "@/sanity/lib/live";

export default async function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] dark:bg-background">
      <NavbarSection />
      <Hero />
      <FeatureSection />
      <ShowcaseSection />
      <StatisticSection />
      <HowItWorks />
      <CtaSection />
      <FooterSection />
      <SanityLive />
    </div>
  );
}
