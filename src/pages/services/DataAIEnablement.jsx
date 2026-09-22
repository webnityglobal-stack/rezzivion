import React from "react";
import { Link } from "react-router-dom";

export default function DataAIEnablement() {
  const capabilities = [
    "Online and offline data entry",
    "Data conversion cleansing and validation",
    "Database and CRM management",
    "Digitization and form processing",
    "Excel and spreadsheet operations",
    "Data extraction and compilation",
    "Quality checking",
    "Document classification and extraction",
    "Data capture and workflow routing",
    "Exception identification and operational insights",
  ];

  return (
    <div className="bg-white text-[#172033]">

      {/* Hero */}
      <section className="bg-[#0D2342] text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">

          <div>
            <Link
              to="/services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#B8924A] transition hover:text-white"
            >
              ← Back to Services
            </Link>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
              Data & AI Enablement
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Better data operations with practical AI support
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Trained operations teams, structured workflows and selected AI
              capabilities working together
            </p>
          </div>

          <div>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8924A]/15 text-[#B8924A]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-8 w-8"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold">
                Human led AI enabled operations
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                AI assisted processing supported by trained teams for review,
                validation and final processing
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
              Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Structured data operations
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Focused capabilities designed to make data accurate organized
              and accessible
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[#E7EAF0] bg-[#F7F8FA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B8924A]/40"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0D2342] text-[#B8924A]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="m6 12 4 4 8-8" />
                  </svg>
                </span>

                <span className="text-sm font-medium leading-6">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Human in the loop */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
              Human In The Loop
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              AI assisted processing with human validation
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              AI outputs can be reviewed validated and governed based on
              client risk security and approval requirements
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {[
              ["AI Assisted Processing", "Selected AI capabilities support routine operational processing"],
              ["Team Review", "Trained teams review and validate outputs"],
              ["Final Processing", "Validated information moves through the defined workflow"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#E7EAF0] bg-white p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D2342] text-[#B8924A]">
                  <span className="text-lg font-semibold">→</span>
                </div>

                <h3 className="text-xl font-semibold text-[#0D2342]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
          Business Impact
        </p>

        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Faster and more organized data operations
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            ["Accurate", "Improved data quality through structured processing and validation"],
            ["Organized", "Data remains accessible and structured for operational use"],
            ["Faster", "Improved turnaround through practical workflow support"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#E7EAF0] bg-[#F7F8FA] p-8"
            >
              <h3 className="text-xl font-semibold text-[#0D2342]">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                {text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2342]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center lg:px-12 lg:py-24">

          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Let’s explore the right fit
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
            Start with one process, validate the value and scale with confidence
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-[#B8924A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c9a663]"
          >
            Start a Conversation
          </Link>

        </div>
      </section>

    </div>
  );
}