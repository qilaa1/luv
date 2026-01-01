import { ArrowRight, PlayCircle } from "lucide-react";
import React from "react";

type HeroSectionProps = {
  onPrimaryClick?: () => void;
};

const HeroSection = ({ onPrimaryClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.12),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative z-10 max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
            Launch-ready API Testing Suite
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Ship reliable APIs with a DevOps launchpad built for speed.
          </h1>
          <p className="text-base text-white/70 sm:text-lg">
            Automate regression suites, orchestrate integration checks, and align release-ready APIs in one technical hub. Purpose-built for DevOps tool makers launching a premium API testing experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f25555] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4444]"
            >
              Start 14-day trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#code-playground"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
            >
              <PlayCircle className="h-5 w-5" />
              Watch workflow tour
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm text-white/60 sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Coverage</dt>
              <dd className="mt-1 text-lg font-semibold text-white">98.4%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Runtimes</dt>
              <dd className="mt-1 text-lg font-semibold text-white">Node, Deno, Rust</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Integrations</dt>
              <dd className="mt-1 text-lg font-semibold text-white">25+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Latency</dt>
              <dd className="mt-1 text-lg font-semibold text-white">&lt;120ms</dd>
            </div>
          </dl>
        </div>
        <div className="relative z-10 flex w-full max-w-lg flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-white">Launch check automation</h2>
            <p className="text-sm text-white/60">
              Trigger smoke suites against staging and production environments on every release branch merge.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-wide text-white/40">Parallel validations</p>
              <p className="mt-3 text-2xl font-semibold text-white">32</p>
              <p className="mt-2 text-xs text-white/50">Concurrent regions per suite.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-wide text-white/40">Rollback ready</p>
              <p className="mt-3 text-2xl font-semibold text-white">Yes</p>
              <p className="mt-2 text-xs text-white/50">Instant restore across pipelines.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-wide text-white/40">Observability</p>
              <p className="mt-3 text-2xl font-semibold text-white">Full</p>
              <p className="mt-2 text-xs text-white/50">Structured logs and traces.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-wide text-white/40">Guardrails</p>
              <p className="mt-3 text-2xl font-semibold text-white">Active</p>
              <p className="mt-2 text-xs text-white/50">Approval gates &amp; drift checks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
