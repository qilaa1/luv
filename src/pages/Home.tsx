import HeroSection from "../components/HeroSection";
import StatsMarquee from "../components/StatsMarquee";
import FeatureGrid from "../components/FeatureGrid";
import IntegrationShowcase from "../components/IntegrationShowcase";
import CodePlayground from "../components/CodePlayground";
import PricingCalculator from "../components/PricingCalculator";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <HeroSection />
      <StatsMarquee />
      <FeatureGrid />
      <IntegrationShowcase />
      <CodePlayground />
      <PricingCalculator />
      <Testimonials />
      <FaqSection />
      <section className="border-t border-white/5 bg-[#0B0D12] py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#EF4444]">Launch with Confidence</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to orchestrate your API testing launch?</h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Schedule launch review
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/5 bg-[#0B0D12] py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/70">© {new Date().getFullYear()} Launch Suite. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em]">
            <span>Security First</span>
            <span>Global Coverage</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
