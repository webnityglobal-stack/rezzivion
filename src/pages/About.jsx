import React from "react";
import { Link } from "react-router-dom";

/* ================= ICONS ================= */

const Icons = {
  structured: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),

  controlled: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <path d="M12 3l7 3v5c0 4.7-2.8 8.1-7 10-4.2-1.9-7-5.3-7-10V6l7-3z" />
      <path d="M8.5 12l2.2 2.2 4.8-5" />
    </svg>
  ),

  practical: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <path d="M14.7 6.3l3-3 3 3-3 3" />
      <path d="M17.7 3.3l-7.8 7.8" />
      <path d="M5 21h14" />
      <path d="M6 18l3-3 3 3 3-3 3 3" />
    </svg>
  ),

  efficiency: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <path d="M4 17l6-6 4 4 6-8" />
      <path d="M16 7h4v4" />
    </svg>
  ),

  ai: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      <circle cx="10" cy="11" r="1" />
      <circle cx="14" cy="11" r="1" />
      <path d="M9.5 14c1.5 1 3.5 1 5 0" />
    </svg>
  ),

  value: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V3" />
      <path d="M3 19h20" />
    </svg>
  ),

  vision: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <path d="M12 1v2M12 21v2M1 12h2M21 12h2" />
    </svg>
  ),

  mission: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <path d="M5 21V4" />
      <path d="M5 5h13l-3 4 3 4H5" />
      <path d="M9 18h6" />
    </svg>
  ),

  arrow: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  ),
};


/* ================= PAGE ================= */

export default function About() {
  return (
    <div className="overflow-hidden bg-white text-[#172033]">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#0D2342] px-6 py-24 text-white lg:px-10 lg:py-32">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#B8924A]/20" />

        <div className="absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#B8924A]/15" />

        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#B8924A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px]">

          <p className="text-xs font-bold tracking-[0.25em] text-[#DCC28B]">
            ABOUT REZZIVION
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            A dependable extension
            <span className="block text-[#DCC28B]">
              of your business.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Rezzivion is a Business Process Management services company
            supporting essential back-office functions through structured
            delivery, trained professionals, quality controls, and practical
            technology adoption.
          </p>

        </div>
      </section>


      {/* ================= COMPANY OVERVIEW ================= */}

      <section className="px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#B8924A]">
              COMPANY OVERVIEW
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0D2342] sm:text-5xl">
              Built around essential operations.
            </h2>
          </div>

          <div>

            <p className="text-lg leading-8 text-[#667085]">
              We take ownership of defined operational processes and provide
              flexible capacity, so your team can focus on customers, growth
              and strategic priorities.
            </p>


            {/* Supporting cards */}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">

              <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:shadow-[0_15px_40px_rgba(13,35,66,.07)]">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                  {Icons.structured}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342]">
                  Structured
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Structured delivery built around defined operational
                  processes.
                </p>

              </div>


              <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:shadow-[0_15px_40px_rgba(13,35,66,.07)]">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                  {Icons.controlled}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342]">
                  Controlled
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Quality controls and clear ownership across essential
                  operations.
                </p>

              </div>


              <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:shadow-[0_15px_40px_rgba(13,35,66,.07)]">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                  {Icons.practical}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342]">
                  Practical
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Practical technology adoption where it improves operations.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= REZZIVION DIFFERENCE ================= */}

      <section className="bg-[#F7F8FA] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1280px]">

          <div className="max-w-3xl">

            <p className="text-xs font-bold tracking-[0.22em] text-[#B8924A]">
              THE REZZIVION DIFFERENCE
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#0D2342] sm:text-5xl">
              Lean delivery. Clear ownership. Consistent quality.
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* Efficient */}

            <div className="group rounded-3xl border border-[#E6E9EF] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_50px_rgba(13,35,66,.08)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2342] text-[#DCC28B] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.efficiency}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0D2342]">
                Efficient by design
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                We simplify workflows, remove avoidable steps, and use
                practical automation where it improves speed, consistency,
                or visibility.
              </p>

            </div>


            {/* AI */}

            <div className="group rounded-3xl border border-[#E6E9EF] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_50px_rgba(13,35,66,.08)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2342] text-[#DCC28B] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.ai}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0D2342]">
                AI-assisted, human-led
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                We explore AI for repetitive work, document handling, data
                support, and workflow assistance, while retaining human
                review and accountability.
              </p>

            </div>


            {/* Value */}

            <div className="group rounded-3xl border border-[#E6E9EF] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_50px_rgba(13,35,66,.08)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2342] text-[#DCC28B] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.value}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0D2342]">
                Cost-conscious value
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Our delivery model helps clients optimize operational spend
                without compromising process discipline, confidentiality,
                or service quality.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= VISION & MISSION ================= */}

      <section className="px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Vision */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#0D2342] p-8 text-white sm:p-12">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#B8924A]/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#B8924A] text-white">
                {Icons.vision}
              </div>

              <p className="relative mt-7 text-xs font-bold tracking-[0.22em] text-[#DCC28B]">
                OUR VISION
              </p>

              <h2 className="relative mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                Intelligent automation.
                <span className="block text-[#DCC28B]">
                  Human quality control.
                </span>
              </h2>

              <p className="relative mt-7 leading-8 text-white/65">
                To absorb the complexity of routine operations through
                intelligent automation and rigorous human quality control,
                empowering corporates and law firms to focus entirely on
                high-stakes strategy.
              </p>

            </div>


            {/* Mission */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#B8924A] p-8 text-white sm:p-12">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#B8924A]">
                {Icons.mission}
              </div>

              <p className="relative mt-7 text-xs font-bold tracking-[0.22em] text-white/70">
                OUR MISSION
              </p>

              <h2 className="relative mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                Real-time controls.
                <span className="block">
                  Audit-ready tracking.
                </span>
              </h2>

              <p className="relative mt-7 leading-8 text-white/80">
                To safeguard enterprise operations, by embedding real-time
                controls and audit-ready tracking into core processes, so
                that regulatory compliance is continuous rather than
                reactive.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= GUIDING PRINCIPLES ================= */}

      <section className="bg-[#F7F8FA] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1280px]">

          <div className="max-w-3xl">

            <p className="text-xs font-bold tracking-[0.22em] text-[#B8924A]">
              WHAT GUIDES US
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#0D2342] sm:text-5xl">
              Principles behind the way we operate.
            </h2>

          </div>


          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.ai}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#0D2342]">
                Intelligent automation
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.controlled}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#0D2342]">
                Human quality control
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.vision}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#0D2342]">
                High-stakes strategy
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.controlled}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#0D2342]">
                Real-time controls
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.mission}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#0D2342]">
                Audit-ready tracking
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D2342] text-[#DCC28B] group-hover:bg-[#B8924A] group-hover:text-white">
                {Icons.efficiency}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#0D2342]">
                Continuous compliance
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1280px] rounded-[2rem] bg-[#0D2342] px-8 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

          <p className="text-xs font-bold tracking-[0.22em] text-[#DCC28B]">
            YOUR VISION | OUR RESILIENCE | LASTING EXCELLENCE
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Let's build better operations together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Start with a defined process, validate the value, and explore the
            right fit for your business.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8924A] px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-[#c7a45e]"
          >
            Let's Talk
            {Icons.arrow}
          </Link>

        </div>
      </section>

    </div>
  );
}