import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Legal Process Management",
    description:
      "Operational support for law firms and businesses managing documentation-heavy legal processes",
    image: "/Lpm.png",
    path: "/services/legal-process-management",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M6 4h8l4 4v12H6z" />
        <path d="M14 4v5h5" />
        <path d="M9 13h6M9 16h4" />
        <path d="m15.5 17 1.5 1.5 3-4" />
      </svg>
    ),
  },
  {
    title: "Finance & Accounting",
    description:
      "Reliable accounting support to maintain accurate financial records and improve day-to-day financial operations",
    image: "/finance-&-Accounting.png",
    path: "/services/finance-accounting",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="4" y="5" width="16" height="14" rx="2.5" />
        <path d="M8 9h8M8 13h3M14 13h2M8 16h2" />
        <path d="M15 16h2" />
      </svg>
    ),
  },
  {
    title: "Data & AI Enablement",
    description:
      "Trained operations teams, structured workflows and selected AI capabilities for accurate, organized and accessible data",
    image: "/Data-AI.png",
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
        <circle cx="12" cy="12" r="2.2" />
        <path d="m10.5 13.5 3-3" />
      </svg>
    ),
  },
  {
    title: "Banking, Financial Services & Insurance",
    description:
      "Structured back-office execution designed for high-volume financial operations",
    image: "/BFSI.png",
    path: "/services/bfsi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="m3 9 9-5 9 5" />
        <path d="M4 9h16v2H4z" />
        <path d="M6 11v7M10 11v7M14 11v7M18 11v7" />
        <path d="M3 18h18" />
        <circle cx="12" cy="4" r="1" />
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
        <path d="M4 19h16" />
        <path d="M6 16V9h3v7M11 16V6h3v10M16 16v-4h3v4" />
        <path d="m5 7 3-3 3 2 4-3 4 2" />
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        <path d="M9 12h6M12 9v6" />
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
        <path d="M5 18V9M10 18V6M15 18v-5M20 18V4" />
        <path d="M3 20h18" />
        <path d="m4 8 5-3 5 4 5-5" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Accuracy",
    text: "Quality-focused execution with defined checks",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 3.5 19 6v5.5c0 4.3-2.8 7.5-7 9-4.2-1.5-7-4.7-7-9V6L12 3.5Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </svg>
    ),
  },
  {
    title: "Efficiency",
    text: "Streamlined workflows and faster turnaround",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M4 19V10M9.3 19V6M14.7 19v-9M20 19V3" />
        <path d="m4 10 5.3-4 5.4 4 5.3-7" />
      </svg>
    ),
  },
  {
    title: "Scalability",
    text: "Flexible capacity that can expand with demand",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M9.2 14.8 14.8 9.2" />
        <path d="M14 4h6v6" />
      </svg>
    ),
  },
  {
    title: "Confidentiality",
    text: "Responsible handling of sensitive information",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="4" y="10" width="16" height="10" rx="2.5" />
        <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
        <circle cx="12" cy="15" r="1.2" />
        <path d="M12 16.2v1.8" />
      </svg>
    ),
  },
  {
    title: "Cost Optimization",
    text: "Reduced operational overhead with process discipline",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10M15.5 9.2H10.2a2.1 2.1 0 0 0 0 4.2h3.6a2.1 2.1 0 0 1 0 4.2H8.5" />
      </svg>
    ),
  },
  {
    title: "AI-Enabled Operations",
    text: "AI-assisted execution with human review",
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
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/80 via-[#0D2342]/40 to-transparent" />

        <div className="relative z-10 flex min-h-[620px] items-center px-5 py-10 sm:min-h-[650px] sm:px-8 sm:py-12 lg:min-h-[720px] lg:px-12">

          <div className="mx-auto w-full max-w-[1440px]">

            <div className="w-full max-w-4xl rounded-[24px] border border-white/15 bg-[#07182F]/30 px-6 py-8 backdrop-blur-md sm:px-10 sm:py-10 lg:px-14 lg:py-11">

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8B36A] sm:text-sm">
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
                  Built to improve efficiency and optimize cost
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
                technology adoption.
              </p>

              <p className="mt-5 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                We take ownership of defined operational processes and provide
                flexible capacity, so your team can focus on customers, growth
                and strategic priorities.
              </p>

            </div>

          </div>


          {/* =====================================================
              PILLARS
          ===================================================== */}

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">

            {pillars.map((item) => (

              <div
                key={item.title}
                className="group border border-[#E1E5EB] bg-[#F7F8FA] p-6 text-center transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(13,35,66,0.08)] sm:p-8 md:text-left"
              >

                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] transition duration-500 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20 md:mx-0">

                  <div className="h-8 w-8 sm:h-9 sm:w-9">
                    {item.icon}
                  </div>

                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#0D2342] sm:mt-7 sm:text-2xl">
                  {item.title}
                </h3>

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


          {/* =====================================================
              PREMIUM ALTERNATING SERVICE LAYOUT
          ===================================================== */}

          <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8 lg:mt-16 lg:space-y-10">

            {services.map((service, index) => {

              const imageLeft = index % 2 === 0;

              return (
                <Link
                  key={service.title}
                  to={service.path}
                  className="group block"
                >

                  <div
                    className={`grid overflow-hidden bg-white transition-all duration-500 sm:rounded-[28px] sm:border sm:border-[#E1E5EB] sm:shadow-[0_10px_40px_rgba(13,35,66,0.04)] hover:-translate-y-1 hover:border-[#B8924A]/35 hover:shadow-[0_24px_60px_rgba(13,35,66,0.10)] lg:min-h-[390px] lg:grid-cols-2 ${
                      imageLeft ? "" : "lg:[&>div:first-child]:order-2"
                    }`}
                  >

                    {/* ================= IMAGE ================= */}

                    <div className="relative -mx-5 flex min-h-[260px] items-center justify-center overflow-hidden bg-[#EEF1F5] sm:mx-0 sm:min-h-[320px] lg:min-h-[390px]">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.025]"
                      />

                      {/* subtle image overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D2342]/10 via-transparent to-white/5" />

                      {/* service icon */}
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-[#0D2342]/95 text-[#D8B36A] shadow-[0_12px_30px_rgba(13,35,66,0.20)] backdrop-blur-md transition duration-300 group-hover:bg-[#B8924A] group-hover:text-white sm:left-6 sm:top-6 sm:h-16 sm:w-16">

                        <div className="h-7 w-7 sm:h-8 sm:w-8">
                          {service.icon}
                        </div>

                      </div>

                    </div>


                    {/* ================= CONTENT ================= */}

                    <div className="flex flex-col justify-center bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">

                      <div className="max-w-xl">

                        <div className="mb-5 h-px w-12 bg-[#B8924A] transition-all duration-500 group-hover:w-20" />

                        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#0D2342] sm:text-3xl lg:text-[2.35rem]">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-lg text-sm leading-7 text-[#667085] sm:mt-5 sm:text-base sm:leading-8">
                          {service.description}
                        </p>


                        <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#0D2342] sm:mt-8">

                          <span className="relative">
                            Explore Service

                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#B8924A] transition-all duration-300 group-hover:w-full" />
                          </span>

                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE2E8] text-[#B8924A] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#B8924A] group-hover:bg-[#B8924A] group-hover:text-white">
                            →
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                </Link>
              );
            })}

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


          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => (

              <div
                key={item.title}
                className="group border border-[#E1E5EB] bg-white p-6 transition duration-300 hover:bg-[#F7F8FA] sm:p-8"
              >

                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B8924A]/20 bg-[#0D2342] text-[#D8B36A] shadow-[0_10px_24px_rgba(13,35,66,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#B8924A] group-hover:text-white sm:mx-0 sm:h-16 sm:w-16">

                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    {item.icon}
                  </div>

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
          OPERATIONS VISUAL
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">

          <div className="grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">

            <div className="group relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#0D2342]">

              <img
                src="/images/why-operational-partner.png"
                alt="Operational process management"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/90 via-[#0D2342]/55 to-transparent" />

              <div className="relative z-10 flex min-h-[300px] max-w-xl flex-col justify-end p-7 sm:p-10">

                <span className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8B36A] backdrop-blur-md">
                  Operational Intelligence
                </span>

                <h3 className="max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Structured operations built for clarity, control and scale
                </h3>

              </div>

            </div>


            <div className="group relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#07182F]">

              <img
                src="/images/why-ai-enabled.png"
                alt="AI-enabled operations"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/95 via-[#07182F]/45 to-transparent" />

              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#D8B36A] backdrop-blur-md sm:right-7 sm:top-7">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <rect x="6" y="6" width="12" height="12" rx="3" />
                  <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                  <path d="M10 10h4v4h-4z" />
                </svg>

              </div>

              <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-7 sm:p-10">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B36A]">
                  Human + AI
                </p>

                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Technology that supports people, not replaces judgment
                </h3>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OPERATING APPROACH
      ===================================================== */}

      <section className="bg-[#F7F8FA]">

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

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


          <div className="relative mt-10 overflow-hidden sm:mt-14 lg:mt-20">

            <div className="absolute left-[10%] right-[10%] top-[48px] hidden h-px bg-[#B8924A]/30 lg:block" />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5 lg:gap-5">

              {[
                {
                  title: "Understand",
                  text: "Map the process, requirements, risks and success measures",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    >
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="m16 16 4 4" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  ),
                },
                {
                  title: "Process",
                  text: "Build a clear workflow with ownership, documentation and controls",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    >
                      <rect x="3.5" y="4" width="6" height="6" rx="1" />
                      <rect x="14.5" y="4" width="6" height="6" rx="1" />
                      <rect x="9" y="14" width="6" height="6" rx="1" />
                      <path d="M9.5 7h5M17.5 10v2.5M12 10v4" />
                    </svg>
                  ),
                },
                {
                  title: "Verify",
                  text: "Apply quality checks, exception handling and review mechanisms",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    >
                      <path d="M12 3.5 19 6v5.5c0 4.3-2.8 7.5-7 9-4.2-1.5-7-4.7-7-9V6l7-2.5Z" />
                      <path d="m8.5 12 2.3 2.3 4.7-5" />
                    </svg>
                  ),
                },
                {
                  title: "Deliver",
                  text: "Execute consistently with agreed SLAs, reporting and communication",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    >
                      <path d="M4 12h13" />
                      <path d="m13 7 5 5-5 5" />
                      <path d="M4 5h5M4 19h5" />
                    </svg>
                  ),
                },
                {
                  title: "Improve",
                  text: "Use insights, feedback and technology to refine performance",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    >
                      <path d="M4 17 9 12l3 3 7-8" />
                      <path d="M15 7h4v4" />
                      <path d="M4 20h16" />
                    </svg>
                  ),
                },
              ].map((item, index) => (

                <div
                  key={item.title}
                  className={`group relative rounded-2xl border border-[#E1E5EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B8924A]/50 hover:shadow-[0_20px_45px_rgba(13,35,66,0.10)] sm:p-7 lg:p-6 ${
                    index === 4 ? "col-span-2 lg:col-span-1" : ""
                  }`}
                >

                  <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#0D2342] text-[#D8B36A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#B8924A] group-hover:text-white sm:h-20 sm:w-20">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667085]">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#0D2342]">

            {/* CTA BACKGROUND IMAGE */}

            <img
              src="/how-we-work-cta.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* CTA OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#0D2342]/75 to-[#0D2342]/30" />

            <div className="relative z-10 flex min-h-[420px] items-center px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">

              <div className="max-w-3xl">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A] sm:text-sm">
                  Let's Explore The Right Fit
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Start with one process, validate the value, and scale with confidence
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
                  We would welcome the opportunity to discuss a focused pilot
                  or defined process scope
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#B8924A] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c9a663] sm:mt-8 sm:px-8"
                >
                  Start a Conversation
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}