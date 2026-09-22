import React from "react";
import { Link } from "react-router-dom";

export default function FinanceAccounting() {
  const supportAreas = [
    "Accounts payable and accounts receivable",
    "Invoice processing and verification",
    "Bookkeeping and ledger support",
    "Bank and account reconciliation",
    "Expense management and data entry",
    "Payment processing",
    "Reporting and MIS support",
    "Month end and year end support",
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
              Finance & Accounting
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Reliable support for everyday finance operations
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Structured accounting support designed to improve accuracy and
              processing efficiency
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
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2M8 19h8" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold">
                Accurate financial operations
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Support across accounting workflows to help reduce
                administrative workload and improve processing speed
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* Support */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
              What We Support
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Structured finance and accounting support
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#667085]">
              Rezzivion provides reliable accounting support across routine
              finance operations and reporting activities
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {supportAreas.map((item) => (
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

        </div>
      </section>

      {/* Impact */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
            Business Impact
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Better financial operations
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              ["Accuracy", "Better accuracy across routine accounting activities"],
              ["Speed", "Faster processing across finance workflows"],
              ["Efficiency", "Reduced administrative workload"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#E7EAF0] bg-white p-8"
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