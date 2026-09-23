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
    image: "/LPM.jpeg",
  },
  {
    title: "Finance & Accounting",
    path: "/services/finance-accounting",
    image: "/Finance.jpeg",
  },
  {
    title: "BFSI",
    path: "/services/bfsi",
    image: "/BFSI.jpeg",
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
    <main className="bg-white text-[#172033]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07182F] text-white">
        <div className="relative mx-auto max-w-[1440px] px-6 py-8 sm:px-8 lg:px-12">

          <Link
            to="/services"
            className="mb-12 inline-flex items-center gap-3 text-sm text-white/65 hover:text-[#D8B36A]"
          >
            ← All Services
          </Link>

          <div className="grid items-center gap-14 pb-20 lg:grid-cols-2 lg:pb-24">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D8B36A]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B36A]">
                  Data & AI Enablement
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Structured data operations with focused AI capabilities
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Trained operations teams, structured workflows and selected AI
                capabilities designed to improve data quality, processing
                efficiency and turnaround
              </p>

              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3.5 text-sm font-semibold hover:bg-[#D8B36A]"
              >
                Let’s Talk
                <Arrow />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <img
                src="/Data-AI.jpeg"
                alt="Data and AI Enablement"
                className="h-[360px] w-full object-cover sm:h-[470px]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* EDITORIAL INTRO */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Data Operations
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#07182F] sm:text-5xl lg:text-6xl">
            Turning data into smarter operations
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-[#667085]">
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

          <div className="mt-12 overflow-hidden rounded-[28px]">
            <img
              src="/Data-AI.jpeg"
              alt="Data and AI operations"
              className="h-[300px] w-full object-cover sm:h-[480px]"
            />
          </div>
        </div>
      </section>


      {/* DATA CAPABILITIES */}
      <section className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Data Operations
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-[#07182F] sm:text-4xl lg:text-5xl">
            Structured support across data-intensive processes
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-[#E4E7EC] md:grid-cols-2 lg:grid-cols-3">
            {dataCapabilities.map((item) => (
              <div
                key={item.title}
                className="group bg-white p-7 transition hover:bg-[#07182F] sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8924A]/10 text-[#B8924A]">
                  <Arrow />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-[#07182F] group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667085] group-hover:text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* AI CAPABILITIES */}
      <section className="bg-[#07182F] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Focused AI Capabilities
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            AI-assisted processing with human validation
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {aiCapabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* HUMAN IN LOOP */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Human-in-the-Loop
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Technology-assisted processing with human quality control
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#667085]">
            AI-assisted processing is followed by trained team review and
            validation before final processing
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {[
              "AI-Assisted Processing",
              "Team Review",
              "Validation",
              "Final Processing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E4E7EC] bg-[#F7F8FA] p-6"
              >
                <div className="mb-5 h-2 w-10 rounded-full bg-[#B8924A]" />
                <p className="font-semibold text-[#07182F]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* IMPACT */}
      <section className="bg-[#F7F8FA] py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Business Impact
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Designed for better data operations
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Accurate Data", "Structured processing and quality checking"],
              ["Organized Information", "Data structured for accessibility and downstream use"],
              ["Faster Turnaround", "Efficient handling of recurring data workflows"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[24px] border border-[#E4E7EC] bg-white p-8"
              >
                <h3 className="text-xl font-semibold text-[#07182F]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* RELATED */}
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
          src="/how-we-work-cta.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07182F]/85" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Let’s Explore the Right Fit
          </span>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
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