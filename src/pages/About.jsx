import React from "react";
import { Link } from "react-router-dom";

/* =========================================================
   ICONS
========================================================= */

const Icons = {
  arrow: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),

  structure: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
      <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
    </svg>
  ),

  ownership: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.3 2.3 4.8-5" />
    </svg>
  ),

  quality: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  ),

  efficiency: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" />
    </svg>
  ),

  scale: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <path d="M12 4v16M5 8h14M7 8l-3 6h6l-3-6ZM17 8l-3 6h6l-3-6Z" />
    </svg>
  ),

  confidentiality: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1.2" />
    </svg>
  ),

  value: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <path d="M12 3v18M17 7.5c0-1.7-1.9-3-5-3s-5 1.3-5 3 1.9 3 5 3 5 1.3 5 3-1.9 3-5 3-5-1.3-5-3" />
    </svg>
  ),

  focus: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),

  process: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
      <path d="M10 7h4a3 3 0 0 1 3 3v4" />
      <path d="m14 12 3 3 3-3" />
    </svg>
  ),
};

/* =========================================================
   DATA
========================================================= */

const differenceCards = [
  {
    title: "Lean delivery",
    text: "A focused delivery approach built around essential operational work, clear processes and practical execution",
    icon: Icons.efficiency,
  },
  {
    title: "Clear ownership",
    text: "Defined responsibility for agreed processes, giving clients greater visibility and dependable operational support",
    icon: Icons.ownership,
  },
  {
    title: "Consistent quality",
    text: "Structured workflows, trained professionals and quality controls that support reliable day-to-day delivery",
    icon: Icons.quality,
  },
];

const benefits = [
  {
    title: "Accuracy",
    text: "Structured processes and quality checks help maintain reliable operational output",
    icon: Icons.quality,
  },
  {
    title: "Efficiency",
    text: "Streamlined workflows help teams process essential work with greater consistency",
    icon: Icons.efficiency,
  },
  {
    title: "Scalability",
    text: "Flexible capacity allows support to grow with changing operational requirements",
    icon: Icons.scale,
  },
  {
    title: "Confidentiality",
    text: "Operational processes are handled with appropriate controls and disciplined execution",
    icon: Icons.confidentiality,
  },
  {
    title: "Cost Optimization",
    text: "Cost-conscious delivery helps reduce administrative workload while maintaining service quality",
    icon: Icons.value,
  },
  {
    title: "Business Focus",
    text: "Defined process ownership gives client teams more room to focus on customers and strategic priorities",
    icon: Icons.focus,
  },
];

const operatingModel = [
  {
    title: "Discover",
    text: "Understand the process, requirements and expected outcomes",
    icon: Icons.focus,
  },
  {
    title: "Design",
    text: "Define workflows, responsibilities, quality measures and governance",
    icon: Icons.structure,
  },
  {
    title: "Transition",
    text: "Establish the process with clear documentation and delivery expectations",
    icon: Icons.process,
  },
  {
    title: "Operate",
    text: "Execute the agreed process with consistent quality and accountability",
    icon: Icons.ownership,
  },
  {
    title: "Improve",
    text: "Review performance and identify practical opportunities for improvement",
    icon: Icons.efficiency,
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#172033]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#07182F] sm:min-h-[620px] lg:min-h-[680px]">

        <img
          src="/about-hero.png"
          alt="Rezzivion business operations"
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/70 to-[#07182F]/20" />

        <div className="relative flex min-h-[560px] max-w-[1440px] items-center px-5 py-8 sm:min-h-[620px] sm:px-8 sm:py-16 lg:min-h-[680px] lg:px-16 lg:py-20">

          <div className="w-full max-w-3xl">

            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-8 bg-[#D8B36A] sm:w-10" />

              <p className="text-[20px] font-semibold tracking-[0.25em] text-[#D8B36A] sm:text- sm:tracking-[0.28em]">
                ABOUT REZZIVION
              </p>
            </div>


            <p className="mt-6 max-w-2xl text-sm font-bold leading-7 text-white/80 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              Rezzivion is a business process management company supporting essential back-office functions through structured delivery, trained professionals, quality controls, and practical technology adoption. We help organizations streamline operations, improve efficiency, and build reliable workflows by combining people, processes, and technology. Our focus is on delivering consistent, transparent, and scalable operational support aligned with evolving business needs.
            </p>

            <div className="mt-8 sm:mt-9">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D8B36A]"
              >
                Let&apos;s Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {Icons.arrow}
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          COMPANY OVERVIEW
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

            {/* IMAGE */}

            <div className="relative w-full">

              <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-b border-r border-[#B8924A]/50 lg:block" />

              <div className="relative overflow-hidden rounded-[22px] bg-[#F7F8FA] sm:rounded-[28px]">

                <img
                  src="/about-overview.png"
                  alt="Rezzivion operations"
                  className="h-auto max-h-[560px] min-h-[330px] w-full object-cover object-center sm:min-h-[420px] lg:min-h-[500px]"
                />

              </div>
            </div>


            {/* CONTENT */}

            <div className="w-full">

              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-px w-8 bg-[#B8924A] sm:w-10" />

                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B8924A] sm:text-xs sm:tracking-[0.24em]">
                  COMPANY OVERVIEW
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#0D2342] sm:text-4xl lg:text-5xl">
                Built around essential operations
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#667085] sm:mt-6 sm:text-base sm:leading-8">
                We take ownership of defined operational processes and provide
                flexible capacity so client teams can stay focused on
                customers, growth and strategic priorities
              </p>

              <p className="mt-4 text-sm leading-7 text-[#667085] sm:mt-5 sm:text-base sm:leading-8">
                Our delivery approach is built around structured workflows,
                trained professionals and clear accountability, helping
                businesses manage essential back-office work with consistency
                and control
              </p>


              {/* SMALL CARDS */}

              <div className="mt-8 grid gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4">

                <div className="rounded-2xl border border-[#E7E9EE] bg-[#F7F8FA] p-5">
                  <div className="mb-4 text-[#B8924A]">
                    {Icons.structure}
                  </div>

                  <h3 className="text-sm font-semibold text-[#0D2342] sm:text-base">
                    Structured
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-sm">
                    Defined workflows and delivery processes
                  </p>
                </div>


                <div className="rounded-2xl border border-[#E7E9EE] bg-[#F7F8FA] p-5">
                  <div className="mb-4 text-[#B8924A]">
                    {Icons.ownership}
                  </div>

                  <h3 className="text-sm font-semibold text-[#0D2342] sm:text-base">
                    Accountable
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-sm">
                    Clear ownership of agreed operational work
                  </p>
                </div>


                <div className="rounded-2xl border border-[#E7E9EE] bg-[#F7F8FA] p-5">
                  <div className="mb-4 text-[#B8924A]">
                    {Icons.quality}
                  </div>

                  <h3 className="text-sm font-semibold text-[#0D2342] sm:text-base">
                    Consistent
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-sm">
                    Quality-focused day-to-day execution
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          REZZIVION DIFFERENCE
      ===================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1280px]">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-[#B8924A] sm:w-10" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B8924A] sm:text-xs sm:tracking-[0.24em]">
                THE REZZIVION DIFFERENCE
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#0D2342] sm:text-4xl lg:text-5xl">
              Practical delivery with clear accountability
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              Our approach combines lean delivery, clear ownership and
              consistent quality to create dependable operational support
            </p>

          </div>


          {/* CARDS */}

          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-3">

            {differenceCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-[22px] border border-[#E4E7EC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/40 hover:shadow-[0_20px_50px_rgba(13,35,66,0.08)] sm:rounded-[24px] sm:p-8"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4EFE5] text-[#B8924A] transition-all duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0D2342] sm:text-xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667085]">
                  {card.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY REZZIVION
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1280px]">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-[#B8924A] sm:w-10" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B8924A] sm:text-xs sm:tracking-[0.24em]">
                WHY REZZIVION
              </span>

              <span className="h-px w-8 bg-[#B8924A] sm:w-10" />
            </div>

            <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#0D2342] sm:text-4xl lg:text-5xl">
              Built to support better operations
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              A dependable operational partner focused on quality, flexibility
              and day-to-day value
            </p>

          </div>


          {/* BENEFITS */}

          <div className="mt-9 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-[20px] border border-[#E7E9EE] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/40 hover:shadow-[0_18px_45px_rgba(13,35,66,0.07)] sm:rounded-[22px] sm:p-7"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F3EA] text-[#B8924A] transition-all duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                    {benefit.icon}
                  </div>

                  <span className="text-[#D8B36A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {Icons.arrow}
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0D2342] sm:mt-6">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667085]">
                  {benefit.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          OPERATING MODEL
      ===================================================== */}

      <section className="bg-[#07182F] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-px w-8 bg-[#D8B36A] sm:w-10" />

                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#D8B36A] sm:text-xs sm:tracking-[0.24em]">
                  OUR OPERATING MODEL
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                A structured path from process to performance
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                We begin with a clearly defined process and measurable
                outcomes, establish the right delivery structure and scale only
                when the process is stable
              </p>

            </div>


            {/* RIGHT */}

            <div className="grid gap-3">

              {operatingModel.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-[#D8B36A]/40 hover:bg-white/[0.06] sm:gap-5 sm:p-6"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D8B36A]/30 text-[#D8B36A] sm:h-11 sm:w-11">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-6 text-white/55 sm:text-sm">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative min-h-[460px] overflow-hidden sm:min-h-[500px]">

        <img
          src="/about-cta.png"
          alt="Business collaboration"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/65 to-[#07182F]/25" />

        <div className="relative mx-auto flex min-h-[460px] max-w-[1280px] items-center px-5 py-16 sm:min-h-[500px] sm:px-8 sm:py-20 lg:px-16">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-[#D8B36A] sm:w-10" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#D8B36A] sm:text-xs sm:tracking-[0.24em]">
                LET&apos;S EXPLORE THE RIGHT FIT
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-6xl">
              Start with one process, validate the value and scale with
              confidence
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Tell us about the process you want to improve and we can explore
              a focused scope that fits your operational requirements
            </p>

            <div className="mt-8 sm:mt-9">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0D2342] transition-all duration-300 hover:bg-[#D8B36A] hover:text-white"
              >
                Let&apos;s Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {Icons.arrow}
                </span>
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}