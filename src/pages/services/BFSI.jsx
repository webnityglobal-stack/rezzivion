import React from "react";
import { Link } from "react-router-dom";

export default function BFSI() {
  const processes = [
    "Customer onboarding and account opening documentation",
    "KYC and KYB processing indexing and data validation",
    "Loan and credit documentation",
    "Payment operations and transaction processing",
    "Reconciliation and exception management",
    "Dispute chargeback and service requests",
    "Collections and recovery support",
    "Customer and account data maintenance",
    "Insurance policy servicing and claims documentation",
    "MIS reporting and dashboard support",
  ];

  const controls = [
    "Maker checker controls",
    "Access controls",
    "Quality sampling",
    "Exception queues",
    "Standard operating procedures",
    "Audit ready records",
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
              Banking Financial Services & Insurance
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Structured back office execution for BFSI operations
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Operational support for banks fintechs lenders insurers and
              financial services organizations
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
                  <path d="M3 10h18" />
                  <path d="M5 10v9M9 10v9M15 10v9M19 10v9" />
                  <path d="M3 19h18M12 4l9 6H3z" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold">
                Control focused operations
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Structured processes designed for high volume financial
                operations with quality and control requirements
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* Processes */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
              Operational Support
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Support across essential BFSI processes
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Structured back office execution designed for high volume
              financial services operations
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {processes.map((item) => (
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

      {/* Controls */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
              Control Mindset
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Built around quality and operational controls
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              Processes can incorporate control mechanisms aligned with client
              requirements and operating procedures
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {controls.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#E7EAF0] bg-white p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D2342] text-[#B8924A]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                  >
                    <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-[#0D2342]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

          <div className="mt-10 rounded-3xl border border-[#E7EAF0] bg-white p-7">
            <p className="leading-7 text-[#667085]">
              Rezzivion provides operational support while regulated decisions
              and approvals remain with the client where required
            </p>
          </div>

        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
          Business Impact
        </p>

        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Stronger operational execution
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            ["Faster Processing", "Support for high volume workflows and operational processing"],
            ["Better Data Quality", "Structured processes designed to improve data quality"],
            ["Reduced Workload", "Reduced operational workload across routine activities"],
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