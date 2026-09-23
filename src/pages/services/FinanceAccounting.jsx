import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const capabilities = [
  {
    title: "Accounts Payable & Accounts Receivable",
    text: "Support for recurring AP and AR processes with structured handling of financial transactions",
  },
  {
    title: "Invoice Processing & Verification",
    text: "Process and verify invoices through defined workflows for accurate and timely execution",
  },
  {
    title: "Bookkeeping & Ledger Support",
    text: "Operational support for bookkeeping and ledger-related activities",
  },
  {
    title: "Bank & Account Reconciliation",
    text: "Structured support for reconciling bank and account records",
  },
  {
    title: "Expense Management & Data Entry",
    text: "Processing and maintenance of expense-related information and financial data",
  },
  {
    title: "Payment Processing",
    text: "Operational support for defined payment processing workflows",
  },
  {
    title: "Reporting & MIS",
    text: "Support for recurring financial reporting and management information requirements",
  },
  {
    title: "Month-End & Year-End Support",
    text: "Structured operational assistance across month-end and year-end activities",
  },
];

const impact = [
  {
    title: "Better Accuracy",
    text: "Structured processing helps support accuracy across recurring accounting activities",
  },
  {
    title: "Faster Processing",
    text: "Efficient execution helps improve the turnaround of routine finance processes",
  },
  {
    title: "Reduced Administrative Workload",
    text: "Operational support helps finance teams spend less time on recurring administrative activities",
  },
];

const relatedServices = [
  {
    title: "Legal Process Management",
    path: "/services/legal-process-management",
    image: "/LPM.jpeg",
  },
  {
    title: "Data & AI Enablement",
    path: "/services/data-ai-enablement",
    image: "/Data-AI.jpeg",
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

export default function FinanceAccounting() {
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
                  Finance & Accounting
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Reliable support for essential finance and accounting operations
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Structured accounting support designed to improve accuracy,
                processing efficiency and reduce administrative workload
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
                src="/Finance.jpeg"
                alt="Finance and Accounting"
                className="h-[360px] w-full object-cover sm:h-[470px]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Finance Operations
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl lg:text-5xl">
              Supporting finance teams with reliable execution
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-lg leading-8 text-[#667085]">
              Finance operations require accuracy, timely processing and
              consistent handling of recurring accounting activities
            </p>

            <p className="mt-6 text-base leading-8 text-[#667085]">
              Rezzivion provides structured operational support across
              essential finance and accounting workflows, helping teams reduce
              administrative effort while maintaining reliable processing
            </p>
          </div>
        </div>
      </section>


      {/* CAPABILITIES */}
      <section className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Key Capabilities
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-[#07182F] sm:text-4xl lg:text-5xl">
            Comprehensive support across finance and accounting
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-[#E4E7EC] md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="group bg-white p-7 transition hover:bg-[#07182F] sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8924A]/10 text-[#B8924A]">
                  <Arrow />
                </div>

                <h3 className="mt-7 text-lg font-semibold leading-7 text-[#07182F] group-hover:text-white">
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


      {/* PROCESS */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="overflow-hidden rounded-[28px] bg-[#F7F8FA]">
            <img
              src="/Finance.jpeg"
              alt="Finance operations"
              className="min-h-[380px] w-full object-cover sm:min-h-[500px]"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Structured Execution
            </span>

            <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">
              Making finance operations more efficient
            </h2>

            <p className="mt-6 text-base leading-8 text-[#667085]">
              Finance and accounting processes require consistent execution
              across high-volume recurring activities
            </p>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Rezzivion supports defined finance workflows through structured
              processing and reliable operational execution
            </p>

            <div className="mt-8 space-y-4">
              {["Process", "Verify", "Deliver", "Improve"].map((item) => (
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


      {/* IMPACT */}
      <section className="bg-[#07182F] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Business Impact
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Designed for better financial operations
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {impact.map((item) => (
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