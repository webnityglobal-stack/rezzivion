import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Legal Process Management",
    description:
      "Operational support for law firms and businesses managing documentation-heavy legal processes",
    image: "/LPM.jpeg",
    path: "/services/legal-process-management",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 11h6M9 15h6M9 19h3" />
      </svg>
    ),
  },

  {
    title: "Finance & Accounting",
    description:
      "Reliable accounting support to maintain accurate financial records and improve day-to-day financial operations",
    image: "/Finance.jpeg",
    path: "/services/finance-accounting",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 13h3M15 13h1M8 16h2M13 16h3" />
      </svg>
    ),
  },

  {
    title: "Data & AI Enablement",
    description:
      "Trained operations teams, structured workflows and selected AI capabilities for accurate, organized and accessible data",
    image: "/Data-AI.jpeg",
    path: "/services/data-ai-enablement",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        <path d="M10 10h4v4h-4z" />
      </svg>
    ),
  },

  {
    title: "Banking, Financial Services & Insurance",
    description:
      "Structured back-office execution designed for high-volume financial operations",
    image: "/BFSI.jpeg",
    path: "/services/bfsi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M3 10h18" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
        <path d="M2 18h20M4 7l8-4 8 4v3H4z" />
      </svg>
    ),
  },
];

const pillars = [
  {
    title: "Efficiency",
    text: "Streamlined workflows",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M4 19V9M10 19V5M16 19v-8M22 19V3" />
        <path d="m4 9 6-4 6 6 6-8" />
      </svg>
    ),
  },

  {
    title: "Intelligence",
    text: "AI-assisted execution",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },

  {
    title: "Value",
    text: "Cost-conscious delivery",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M15.5 9H10a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8.5" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Accuracy",
    text: "Quality-focused execution with defined checks",
    icon: "✓",
  },
  {
    title: "Efficiency",
    text: "Streamlined workflows and faster turnaround",
    icon: "↗",
  },
  {
    title: "Scalability",
    text: "Flexible capacity that can expand with demand",
    icon: "⌁",
  },
  {
    title: "Confidentiality",
    text: "Responsible handling of sensitive information",
    icon: "◈",
  },
  {
    title: "Cost Optimization",
    text: "Reduced operational overhead with process discipline",
    icon: "₹",
  },
  {
    title: "AI-Enabled Operations",
    text: "AI-assisted execution with human review",
    icon: "✦",
  },
];

const approach = [
  {
    title: "Understand",
    text: "Map the process, requirements, risks and success measures",
  },
  {
    title: "Process",
    text: "Build a clear workflow with ownership, documentation and controls",
  },
  {
    title: "Verify",
    text: "Apply quality checks, exception handling and review mechanisms",
  },
  {
    title: "Deliver",
    text: "Execute consistently with agreed SLAs, reporting and communication",
  },
  {
    title: "Improve",
    text: "Use insights, feedback and technology to refine performance",
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-[#172033]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#0D2342] sm:min-h-[650px] lg:min-h-[720px]">

        <img
          src="/Home.png"
          alt="Rezzivion business process management"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/80 via-[#0D2342]/40 to-transparent" />

        <div className="relative z-10 flex min-h-[620px] items-center px-5 py-10 sm:min-h-[650px] sm:px-8 sm:py-12 lg:min-h-[720px] lg:px-12">

          <div className="mx-auto w-full max-w-[1440px]">

            <div className="w-full max-w-4xl rounded-[24px] border border-white/15 bg-[#07182F]/30 px-6 py-8 backdrop-blur-md sm:px-10 sm:py-10 lg:px-14 lg:py-11">

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8B36A] sm:text-sm sm:tracking-[0.22em]">
                Business Process Management
              </p>

              <h1 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Smarter operations
                <span className="block text-[#D8B36A]">
                  Stronger outcomes
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-lg">
                AI-enabled support. Human-led quality.
                <span className="block">
                  Built to improve efficiency and optimize cost.
                </span>
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <Link
                  to="/services"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#B8924A] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#c9a663] sm:px-7"
                >
                  Explore Services
                  <span>→</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/20 sm:px-7"
                >
                  Let's Talk
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8924A] sm:text-sm">
                A Dependable Extension Of Your Business
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl lg:text-5xl">
                Structured delivery with clear ownership
              </h2>

            </div>

            <div>

              <p className="text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                Rezzivion is a Business Process Management services company
                supporting essential back-office functions through structured
                delivery, trained professionals, quality controls and practical
                technology adoptio.
              </p>

              <p className="mt-5 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                We take ownership of defined operational processes and provide
                flexible capacity, so your team can focus on customers, growth
                and strategic priorities.
              </p>

            </div>

          </div>


          {/* PILLARS */}

<div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">

  {pillars.map((item) => (
    <div
      key={item.title}
      className="group border border-[#E1E5EB] bg-[#F7F8FA] p-6 text-center transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(13,35,66,0.08)] sm:p-8 md:text-left"
    >

      {/* ICON */}

      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] transition duration-500 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20 md:mx-0">

        <div className="h-8 w-8 sm:h-9 sm:w-9">
          {item.icon}
        </div>

      </div>


      {/* TITLE */}

      <h3 className="mt-5 text-xl font-semibold text-[#0D2342] sm:mt-7 sm:text-2xl">
        {item.title}
      </h3>


      {/* DESCRIPTION */}

      <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#667085] sm:mt-3 sm:text-base sm:leading-7 md:mx-0">
        {item.text}
      </p>

    </div>
  ))}

</div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-[#F7F8FA]">

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A] sm:text-sm">
              Where We Operate
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl lg:text-5xl">
              Essential operations, structured for better outcomes
            </h2>

          </div>


          {/* SERVICE CARDS */}

          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">

            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group overflow-hidden border border-[#E1E5EB] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:shadow-[0_20px_50px_rgba(13,35,66,0.08)]"
              >

                {/* IMAGE */}

                <div className="relative h-[220px] overflow-hidden bg-[#EEF1F5] sm:h-[260px]">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-[1.03] sm:p-5"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D2342]/95 text-[#D8B36A] shadow-xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:h-16 sm:w-16">

                    <div className="h-7 w-7 sm:h-8 sm:w-8">
                      {service.icon}
                    </div>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-6 sm:p-7 lg:p-8">

                  <h3 className="text-xl font-semibold leading-snug text-[#0D2342] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667085] sm:mt-4 sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B8924A] sm:mt-6">
                    Explore Service
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY REZZIVION
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A] sm:text-sm">
              Why Rezzivion
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl lg:text-5xl">
              A practical extension of your operations
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Structured workflows, AI-assisted quality controls and flexible
              capacity with clear ownership
            </p>

          </div>


          {/* BENEFITS */}

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="group border border-[#E1E5EB] bg-white p-6 transition duration-300 hover:bg-[#F7F8FA] sm:p-8"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D2342] text-xl font-semibold text-[#D8B36A] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white sm:mx-0 sm:h-16 sm:w-16">

                  {item.icon}

                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0D2342] sm:mt-7 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085] sm:mt-3 sm:leading-7">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          OPERATING APPROACH
      ===================================================== */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A] sm:text-sm">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl lg:text-5xl">
              Our Operating Approach
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base">
              A structured approach designed around clear processes,
              measurable outcomes and continuous improvement
            </p>

          </div>


          {/* Approach Flow */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20">

            {/* Connecting line - desktop */}
            <div className="absolute left-[10%] right-[10%] top-[48px] hidden h-px bg-[#B8924A]/30 lg:block" />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5 lg:gap-5">

              {/* Understand */}
              <div className="group relative rounded-2xl border border-[#E1E5EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_45px_rgba(13,35,66,0.10)] sm:p-7 lg:p-6">

                <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4 4" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>

                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Map the process, requirements, risks and success measures
                </p>

              </div>


              {/* Process */}
              <div className="group relative rounded-2xl border border-[#E1E5EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_45px_rgba(13,35,66,0.10)] sm:p-7 lg:p-6">

                <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect x="3.5" y="4" width="6" height="6" rx="1" />
                    <rect x="14.5" y="4" width="6" height="6" rx="1" />
                    <rect x="9" y="14" width="6" height="6" rx="1" />

                    <path d="M9.5 7h5" />
                    <path d="M17.5 10v2.5" />
                    <path d="M12 10v4" />
                  </svg>

                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                  Process
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Build a clear workflow with ownership, documentation and controls
                </p>

              </div>


              {/* Verify */}
              <div className="group relative rounded-2xl border border-[#E1E5EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_45px_rgba(13,35,66,0.10)] sm:p-7 lg:p-6">

                <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3.5 19 6v5.5c0 4.3-2.8 7.5-7 9-4.2-1.5-7-4.7-7-9V6l7-2.5Z" />
                    <path d="m8.5 12 2.3 2.3 4.7-5" />
                  </svg>

                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                  Verify
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Apply quality checks, exception handling and review mechanisms
                </p>

              </div>


              {/* Deliver */}
              <div className="group relative rounded-2xl border border-[#E1E5EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_45px_rgba(13,35,66,0.10)] sm:p-7 lg:p-6">

                <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 12h13" />
                    <path d="m13 7 5 5-5 5" />
                    <path d="M4 5h5M4 19h5" />
                  </svg>

                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                  Deliver
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Execute consistently with agreed SLAs, reporting and communication
                </p>

              </div>


              {/* Improve */}
              <div className="group relative col-span-2 rounded-2xl border border-[#E1E5EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_45px_rgba(13,35,66,0.10)] sm:p-7 lg:col-span-1 lg:p-6">

                <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 17 9 12l3 3 7-8" />
                    <path d="M15 7h4v4" />
                    <path d="M4 20h16" />
                  </svg>

                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                  Improve
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Use insights, feedback and technology to refine performance
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
    CTA
===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A] sm:text-sm">
            Let's Explore The Right Fit
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#0D2342] sm:mt-5 sm:text-4xl lg:text-5xl">
            Start with one process, validate the value, and scale with confidence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#667085] sm:mt-6 sm:text-lg sm:leading-8">
            We would welcome the opportunity to discuss a focused pilot or
            defined process scope
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#0D2342] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#17365f] sm:mt-8 sm:px-8"
          >
            Start a Conversation
            <span>→</span>
          </Link>

        </div>

      </section>
    </div>
  );
}
