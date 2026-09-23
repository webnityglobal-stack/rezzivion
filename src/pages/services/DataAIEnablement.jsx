import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const dataCapabilities = [
  {
    title: "Data Entry & Data Management",
    text: "Structured handling of operational data across defined processes",
  },
  {
    title: "Data Conversion, Cleansing & Validation",
    text: "Conversion, cleansing and validation of data for reliable downstream use",
  },
  {
    title: "Database & CRM Management",
    text: "Support for database and CRM-related operational processes",
  },
  {
    title: "Digitization & Forms Processing",
    text: "Digitization and structured handling of forms and information",
  },
  {
    title: "Excel & Spreadsheet Processing",
    text: "Operational spreadsheet and Excel-based data processing",
  },
  {
    title: "Data Extraction & Compilation",
    text: "Extraction and compilation of required information",
  },
  {
    title: "Quality Checking",
    text: "Review and validation supporting data accuracy and consistency",
  },
];

const aiCapabilities = [
  {
    title: "Document Classification & Extraction",
    text: "Focused AI capabilities for document classification and information extraction",
  },
  {
    title: "Data Capture & Workflow Routing",
    text: "AI-assisted data capture and routing across defined workflows",
  },
  {
    title: "Quality Checks & Exception Identification",
    text: "Support for quality checks and identification of potential exceptions",
  },
  {
    title: "Operational Insights",
    text: "Focused AI capabilities supporting operational insights from processed information",
  },
];

const relatedServices = [
  {
    title: "Legal Process Management",
    path: "/services/legal-process-management",
    image: "/Lpm.png",
  },
  {
    title: "Finance & Accounting",
    path: "/services/finance-accounting",
    image: "/finance-&-Accounting.png",
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

export default function DataAIEnablement() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#172033]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07182F] text-white">
        <div className="relative mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-10">

          <Link
            to="/services"
            className="mb-6 inline-flex items-center gap-3 text-sm text-white/65 hover:text-[#D8B36A]"
          >
            ← All Services
          </Link>

          <div className="relative mt-2 min-h-[520px] overflow-hidden rounded-[24px] sm:min-h-[560px] lg:min-h-[620px]">

            <img
              src="/Data-AI.png"
              alt="Data and AI Enablement"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/65 to-[#07182F]/15" />

            <div className="relative z-10 flex min-h-[520px] items-center px-5 py-12 sm:min-h-[560px] sm:px-10 sm:py-16 lg:min-h-[620px] lg:px-16">
              <div className="max-w-3xl">

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D8B36A]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B36A] sm:text-sm">
                    Data & AI Enablement
                  </span>
                </div>

                <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  Structured data operations with focused AI capabilities
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  Trained operations teams, structured workflows and selected AI
                  capabilities designed to improve data quality, processing
                  efficiency and turnaround
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D8B36A]"
                >
                  Let’s Talk
                  <Arrow />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* EDITORIAL INTRO */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#07182F] sm:text-4xl lg:text-5xl">
            Turning data into smarter operations
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            <p>
              Data-intensive operations require more than speed. They require
              accuracy, structure and consistent quality
            </p>

            <p>
              Rezzivion combines trained operations teams, structured workflows
              and focused AI capabilities to support data entry, processing,
              extraction, validation and quality checks
            </p>

            <p>
              With a human-in-the-loop approach, AI-assisted processing is
              followed by team review and validation, helping support reliable
              operational outcomes
            </p>
          </div>

          <div className="mt-7 w-full overflow-hidden rounded-[24px] bg-[#F7F8FA]">
            <img
              src="/images/why-ai-enabled.png"
              alt="AI-enabled operations"
              className="block w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>


      {/* DATA CAPABILITIES */}
      <section className="bg-[#F7F8FA] py-9 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Data Operations
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-[#07182F] sm:text-4xl lg:text-5xl">
            Structured support across data-intensive processes
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {dataCapabilities.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-[20px] border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#07182F] hover:border-[#07182F] hover:shadow-[0_16px_35px_rgba(7,24,47,0.10)] sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8924A]/10 text-[#B8924A]">
                  <Arrow />
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-6 text-[#07182F] group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085] group-hover:text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* AI CAPABILITIES */}
      <section className="bg-[#07182F] py-10 text-white sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Focused AI Capabilities
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            AI-assisted processing with human validation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {aiCapabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* HUMAN IN LOOP */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Human-in-the-Loop
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Technology-assisted processing with human quality control
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-[#667085]">
            AI-assisted processing is followed by trained team review and
            validation before final processing
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            {[
              "AI-Assisted Processing",
              "Team Review",
              "Validation",
              "Final Processing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E4E7EC] bg-[#F7F8FA] p-5"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#B8924A]" />
                <p className="font-semibold text-[#07182F]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BUSINESS IMPACT */}
      <section className="bg-[#07182F] py-10 text-white sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Business Impact
          </span>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Designed for better data operations
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

            {[
              {
                title: "Accurate Data",
                text: "Structured processing and quality checking",
                icon: "check",
              },
              {
                title: "Organized Information",
                text: "Data structured for accessibility and downstream use",
                icon: "layers",
              },
              {
                title: "Faster Turnaround",
                text: "Efficient handling of recurring data workflows",
                icon: "clock",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 sm:p-7"
              >

                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border border-[#B8924A]/30 bg-[#B8924A]/10 text-[#D8B36A]">

                  {item.icon === "check" && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8 12 2.5 2.5L16 9" />
                    </svg>
                  )}

                  {item.icon === "layers" && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
                      <path d="m4 12 8 4 8-4" />
                      <path d="m4 16 8 4 8-4" />
                    </svg>
                  )}

                  {item.icon === "clock" && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  )}

                </div>

                <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
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


      {/* RELATED */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Explore More
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Explore our other capabilities
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group overflow-hidden rounded-[24px] border border-[#E4E7EC]"
              >
                <div className="w-full overflow-hidden bg-[#F7F8FA]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="block w-full h-auto object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-center justify-between p-5">
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
          src="/images/how-we-work-cta.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07182F]/85" />

        <div className="relative mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Let’s Explore the Right Fit
          </span>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
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
    </main>
  );
}