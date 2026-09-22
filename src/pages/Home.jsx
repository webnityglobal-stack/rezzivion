import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Legal Process Management",
    shortTitle: "Legal Process Management",
    description:
      "Operational support for law firms and businesses managing documentation-heavy legal processes",
    image: "/LPM.jpeg",
    path: "/services/legal-process-management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 11h6M9 15h6M9 19h3" />
      </svg>
    ),
  },
  {
    title: "Finance & Accounting",
    shortTitle: "Finance & Accounting",
    description:
      "Reliable accounting support covering transaction processing, reconciliations and reporting",
    image: "/Finance.jpeg",
    path: "/services/finance-accounting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 13h3M15 13h1M8 16h2M13 16h3" />
      </svg>
    ),
  },
  {
    title: "Data & AI Enablement",
    shortTitle: "Data & AI Enablement",
    description:
      "Structured data operations with focused AI capabilities and trained human validation",
    image: "/Data-AI.jpeg",
    path: "/services/data-ai-enablement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        <path d="M10 10h4v4h-4z" />
      </svg>
    ),
  },
  {
    title: "Banking, Financial Services & Insurance",
    shortTitle: "BFSI",
    description:
      "Structured back-office execution designed for high-volume financial operations",
    image: "/BFSI.jpeg",
    path: "/services/bfsi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
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
    text: "Streamlined workflows designed to improve operational efficiency",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 19V9M10 19V5M16 19v-8M22 19V3" />
        <path d="m4 9 6-4 6 6 6-8" />
      </svg>
    ),
  },
  {
    title: "Intelligence",
    text: "AI-assisted execution supported by trained human teams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Value",
    text: "Cost-conscious delivery focused on practical business outcomes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M15.5 9H10a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-[#172033]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#0D2342] lg:min-h-[720px]">

        {/* Background Image */}
        <img
          src="/Home.png"
          alt="Rezzivion business process management"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark professional overlay */}
        <div className="absolute inset-0 bg-[#07182F]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/75 via-[#0D2342]/35 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[650px] items-center px-5 py-16 sm:px-8 lg:min-h-[720px] lg:px-12">

          <div className="mx-auto w-full max-w-[1440px]">

            <div className="max-w-4xl rounded-[30px] border border-white/20 bg-[#0D2342]/65 px-7 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-12 sm:py-12 lg:px-16 lg:py-14">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#D8B36A]" />

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B36A] sm:text-sm">
                  Business Process Management
                </p>

              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Smarter operations
                <span className="block text-[#D8B36A]">
                  Stronger outcomes
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                AI-enabled support and human-led quality built to improve
                efficiency and optimize cost
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#B8924A] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c9a663]"
                >
                  Explore Services

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h13" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
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

        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-9 bg-[#B8924A]" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
                  A Dependable Extension Of Your Business
                </p>

              </div>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl lg:text-5xl">
                Structured operations built around your priorities
              </h2>

            </div>

            <div className="lg:pt-2">

              <p className="max-w-3xl text-lg leading-8 text-[#667085]">
                Rezzivion is a BPM services company supporting essential
                back-office functions through structured delivery, trained
                professionals, quality controls and practical technology
                adoption
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#667085]">
                Flexible capacity allows clients to focus on customers,
                growth and strategic priorities while routine operations
                remain structured and controlled
              </p>

            </div>

          </div>


          {/* Pillars */}

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {pillars.map((item) => (
              <div
                key={item.title}
                className="group border border-[#E7EAF0] bg-[#F7F8FA] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:bg-white hover:shadow-[0_15px_40px_rgba(13,35,66,0.08)]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D2342] text-[#D8B36A] transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                  <div className="h-6 w-6">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0D2342]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
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

        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">

          {/* Section Heading */}

          <div className="flex flex-col justify-between gap-6 border-b border-[#DDE1E8] pb-10 md:flex-row md:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-9 bg-[#B8924A]" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
                  Our Services
                </p>

              </div>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl lg:text-5xl">
                Operational support designed for real business needs
              </h2>

            </div>

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0D2342] transition hover:text-[#B8924A]"
            >
              View All Services

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

          </div>


          {/* Service Items */}

          <div className="mt-10 space-y-5">

            {services.map((service, index) => (

              <Link
                key={service.title}
                to={service.path}
                className="group block"
              >

                <div className="grid overflow-hidden border border-[#E1E5EB] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:shadow-[0_18px_45px_rgba(13,35,66,0.09)] lg:grid-cols-[300px_1fr]">

                  {/* Image */}

                  <div className="relative min-h-[210px] overflow-hidden bg-[#0D2342]">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/55 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#0D2342]/80 text-[#D8B36A] backdrop-blur-md">

                      <div className="h-5 w-5">
                        {service.icon}
                      </div>

                    </div>

                  </div>


                  {/* Content */}

                  <div className="flex items-center justify-between gap-8 p-7 sm:p-8 lg:px-10">

                    <div className="max-w-3xl">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D2342] text-[#D8B36A] lg:hidden">

                          <div className="h-5 w-5">
                            {service.icon}
                          </div>

                        </div>

                        <h3 className="text-xl font-semibold text-[#0D2342] sm:text-2xl">
                          {service.title}
                        </h3>

                      </div>

                      <p className="mt-4 max-w-2xl leading-7 text-[#667085]">
                        {service.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B8924A]">
                        Explore Service

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h13" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>

                      </span>

                    </div>


                    {/* Desktop Arrow */}

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DDE1E8] text-[#0D2342] transition duration-300 group-hover:border-[#B8924A] group-hover:bg-[#B8924A] group-hover:text-white sm:flex">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5 transition duration-300 group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h13" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OPERATING APPROACH
      ===================================================== */}
      <section className="bg-[#0D2342] text-white">

        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-9 bg-[#D8B36A]" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8B36A]">
                  Our Approach
                </p>

              </div>

              <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
                A structured approach to operational delivery
              </h2>

            </div>

            <div>

              <p className="max-w-3xl text-lg leading-8 text-white/70">
                Rezzivion follows a practical operating approach built around
                understanding the process, processing with discipline,
                verifying quality, delivering against defined requirements
                and continuously improving the workflow
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                {[
                  "Understand",
                  "Process",
                  "Verify",
                  "Deliver",
                  "Improve",
                ].map((item) => (

                  <div
                    key={item}
                    className="border border-white/10 bg-white/[0.05] p-5 transition duration-300 hover:border-[#B8924A]/50 hover:bg-white/[0.08]"
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B8924A] text-white">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>

                    </div>

                    <p className="mt-5 text-sm font-semibold">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center lg:px-12 lg:py-24">

          <div className="mx-auto max-w-3xl">

            <div className="flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-[#B8924A]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
                Start With One Process
              </p>

              <span className="h-px w-8 bg-[#B8924A]" />

            </div>

            <h2 className="mt-5 text-3xl font-semibold text-[#0D2342] sm:text-4xl lg:text-5xl">
              Validate the value and scale with confidence
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              Let's explore the right fit for your business operations
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D2342] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#17365f]"
            >
              Start a Conversation

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}