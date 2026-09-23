import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const capabilities = [
  {
    title: "Legal Data Entry & Document Management",
    text: "Structured handling of legal data and documentation to keep information organized and accessible",
  },
  {
    title: "Document Review & Indexing",
    text: "Review, indexing and organization of documents to support efficient retrieval and legal workflows",
  },
  {
    title: "Case File & Records Management",
    text: "Organized management of case files and records to support consistent legal operations",
  },
  {
    title: "Legal Research Support",
    text: "Operational support for documentation-intensive legal research activities and related workflows",
  },
  {
    title: "Contract Administration",
    text: "Structured administrative support for contract-related processes and documentation",
  },
  {
    title: "Litigation Support",
    text: "Operational assistance across documentation-heavy litigation support activities",
  },
  {
    title: "Database & Administrative Support",
    text: "Reliable database and administrative support for day-to-day legal operations",
  },
];

const impact = [
  {
    title: "Organized Legal Operations",
    text: "Better organization of legal information, documentation and recurring processes",
  },
  {
    title: "Improved Productivity",
    text: "Efficient operational support helping teams process documentation-heavy work effectively",
  },
  {
    title: "More Time for High-Value Work",
    text: "Reduced administrative workload allows legal professionals to focus on higher-value legal work",
  },
];

const relatedServices = [
  {
    title: "Finance & Accounting",
    path: "/services/finance-accounting",
    image: "/finance-&-Accounting.png",
  },
  {
    title: "Data & AI Enablement",
    path: "/services/data-ai-enablement",
    image: "/Data-AI.png",
  },
  {
    title: "BFSI",
    path: "/services/bfsi",
    image: "/BFSI.png",
  },
];

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function LegalProcessManagement() {
  return (
    <main className="bg-white text-[#172033]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07182F] text-white">
        <div className="relative mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-8 sm:py-8 lg:px-12">

          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-3 text-sm text-white/65 hover:text-[#D8B36A]"
          >
            ← All Services
          </Link>

          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 sm:min-h-[620px] lg:min-h-[680px]">

            <img
              src="/legal-hero.png"
              alt="Legal Process Management"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/65 to-[#07182F]/15" />

            <div className="relative z-10 flex min-h-[560px] items-center px-5 py-12 sm:min-h-[620px] sm:px-10 lg:min-h-[680px] lg:px-16 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12">

              <div className="max-w-4xl">

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D8B36A]" />

                  <span className="text-base font-bold uppercase tracking-[0.24em] text-[#D8B36A] sm:text-lg">
                    Legal Process Management
                  </span>
                </div>

                <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  Structured support for documentation-heavy legal processes
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  Operational support for law firms and businesses managing
                  documentation-heavy legal processes
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#D8B36A]"
                >
                  Let’s Talk
                  <Arrow />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Legal Operations
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
              A dependable operational extension for legal teams
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-lg leading-8 text-[#667085]">
              Legal processes involve large volumes of documentation, records
              and recurring administrative activities that require accuracy,
              organization and consistency
            </p>

            <p className="mt-6 text-base leading-8 text-[#667085]">
              Rezzivion provides structured operational support for defined
              legal processes, helping law firms and businesses manage
              documentation-intensive workflows while enabling their teams to
              focus on higher-value legal work
            </p>
          </div>
        </div>
      </section>


      {/* CAPABILITIES */}
      <section className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Key Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
              Comprehensive support across essential operations
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg">
              Structured support across defined processes with consistent execution
              and clear operational ownership
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="group flex min-h-[245px] flex-col rounded-[24px] border border-[#E4E7EC] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/40 hover:bg-[#07182F] hover:shadow-[0_18px_45px_rgba(7,24,47,0.10)] sm:p-8"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#B8924A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-lg font-semibold leading-7 text-[#07182F] transition group-hover:text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#667085] transition group-hover:text-white/60">
                    {item.text}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-auto pt-7">
                  <div className="h-px w-10 bg-[#B8924A] transition-all duration-300 group-hover:w-16" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="overflow-hidden rounded-[28px] bg-[#F7F8FA]">
            <img
              src="/legal-process.png"
              alt="Legal operations"
              className="min-h-[380px] w-full object-cover sm:min-h-[500px]"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Structured Execution
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl">
              Built for documentation-intensive legal work
            </h2>

            <p className="mt-6 text-base leading-8 text-[#667085]">
              Rezzivion supports defined legal processes through trained
              professionals, structured workflows and consistent execution
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand",
                "Process",
                "Verify",
                "Deliver",
                "Improve",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#EAECF0] pb-4"
                >
                  <span className="h-2 w-2 rounded-full bg-[#B8924A]" />
                  <span className="font-medium text-[#344054]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* BUSINESS IMPACT */}
      <section className="bg-[#07182F] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
              Business Impact
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Practical outcomes for your business
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {impact.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[26px] border border-white/10 bg-white/[0.045] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:bg-white/[0.07] sm:p-9"
              >

                {/* LARGE ICON */}
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border border-[#B8924A]/30 bg-[#B8924A]/10 text-[#D8B36A] transition-all duration-300 group-hover:bg-[#B8924A] group-hover:text-white">

                  {index === 0 && (
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
                      <path d="m8 12 2.5 2.5L16 9" />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19V5" />
                      <path d="M4 19h16" />
                      <path d="m7 15 4-4 3 2 5-6" />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  )}
                </div>

                <h3 className="mt-8 text-xl font-semibold leading-7 text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  {item.text}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* RELATED SERVICES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Explore More
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Explore our other capabilities
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group overflow-hidden rounded-[24px] border border-[#E4E7EC]"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between p-6">
                  <h3 className="font-semibold text-[#07182F]">
                    {service.title}
                  </h3>
                  <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/legal-cta.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07182F]/85" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Let’s Explore the Right Fit
          </span>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Start with one process, validate the value, and scale with confidence
          </h2>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-7 py-4 text-sm font-semibold text-white hover:bg-[#D8B36A]"
          >
            Let’s Talk
            <Arrow />
          </Link>
        </div>
      </section>

      <Footer />
    </main >
  );
}