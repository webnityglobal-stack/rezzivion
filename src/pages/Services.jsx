import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Legal Process Management",
    eyebrow: "Legal Operations",
    image: "/Lpm.png",
    description:
      "Operational support for law firms and businesses managing documentation intensive legal processes",
    support: [
      "Legal data entry and document management",
      "Document review indexing and organization",
      "Case file and records management",
      "Legal research support",
      "Contract administration",
      "Litigation support",
      "Database and administrative support",
    ],
    impact:
      "Organized legal operations improved productivity and more time for high value legal work",
    path: "/services/legal-process-management",
  },
  {
    title: "Finance & Accounting",
    eyebrow: "Financial Operations",
    image: "/finance-&-Accounting.png",
    description:
      "Reliable accounting support across essential finance operations and reporting activities",
    support: [
      "Accounts payable and accounts receivable",
      "Invoice processing and verification",
      "Bookkeeping and ledger support",
      "Bank and account reconciliation",
      "Expense management and data entry",
      "Payment processing",
      "Reporting and MIS",
      "Month end and year end support",
    ],
    impact:
      "Better accuracy faster processing and reduced administrative workload",
    path: "/services/finance-accounting",
  },
  {
    title: "Data & AI Enablement",
    eyebrow: "Data Operations",
    image: "/Data-AI.png",
    description:
      "Trained operations teams structured workflows and selected AI capabilities working together",
    support: [
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
    ],
    impact:
      "Accurate organized and accessible data with faster operational turnaround",
    path: "/services/data-ai-enablement",
  },
  {
    title: "Banking Financial Services & Insurance",
    eyebrow: "BFSI Operations",
    image: "/BFSI.png",
    description:
      "Structured back office execution for banks fintechs lenders insurers and financial services organizations",
    support: [
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
    ],
    impact:
      "Faster processing stronger data quality and reduced operational workload",
    path: "/services/bfsi",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="m6 12 4 4 8-8" />
    </svg>
  );
}

export default function Services() {
  return (
    <div className="bg-white text-[#172033]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#0D2342] text-white">

        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
              Our Services
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Business process support built around your priorities
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
              Rezzivion supports essential back office functions through
              structured delivery trained professionals quality controls and
              practical technology adoption
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section>

        {services.map((service, index) => (
          <div
            key={service.title}
            className={index % 2 === 1 ? "bg-[#F7F8FA]" : "bg-white"}
          >

            <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-24">

              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}

                <div className="group overflow-hidden rounded-[32px] border border-[#E7EAF0] bg-white shadow-sm">

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2342]/40 via-transparent to-transparent" />

                  </div>

                </div>


                {/* CONTENT */}

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
                    {service.eyebrow}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2342] sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-[#667085]">
                    {service.description}
                  </p>


                  {/* Support */}

                  <div className="mt-8">

                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0D2342]">
                      What We Support
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">

                      {service.support.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0D2342] text-[#B8924A]">
                            <CheckIcon />
                          </span>

                          <span className="text-sm leading-6 text-[#667085]">
                            {item}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>


                  {/* Impact */}

                  <div className="mt-8 rounded-2xl border border-[#E7EAF0] bg-white p-5">

                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B8924A]">
                      Business Impact
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {service.impact}
                    </p>

                  </div>


                  {/* Link */}

                  <Link
                    to={service.path}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D2342] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#17365f]"
                  >
                    Explore Service

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

            </div>

          </div>
        ))}

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#0D2342]">

        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center lg:px-12 lg:py-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Start With One Process
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Let’s explore the right fit
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Start with one process validate the value and scale with confidence
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-[#B8924A] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#c9a663]"
          >
            Start a Conversation
          </Link>

        </div>

      </section>

    </div>
  );
}