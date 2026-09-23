import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const capabilities = [
  {
    title: "Customer Onboarding & Account Opening",
    text: "Support for onboarding documentation and account opening processes",
  },
  {
    title: "KYC & KYB Processing",
    text: "KYC and KYB processing, indexing and data validation",
  },
  {
    title: "Loan & Credit Documentation",
    text: "Operational support for loan and credit-related documentation",
  },
  {
    title: "Payment & Transaction Processing",
    text: "Structured support for payment operations and transaction processing",
  },
  {
    title: "Reconciliation & Exception Management",
    text: "Processing support for reconciliation and exception workflows",
  },
  {
    title: "Disputes & Chargebacks",
    text: "Operational support for disputes, chargebacks and service requests",
  },
  {
    title: "Collections & Recovery",
    text: "Support for defined collections and recovery processes",
  },
  {
    title: "Customer & Account Data",
    text: "Maintenance and quality support for customer and account information",
  },
  {
    title: "Insurance Operations",
    text: "Support for insurance policy servicing and claims documentation",
  },
  {
    title: "MIS & Reporting",
    text: "Operational reporting, MIS and dashboard support",
  },
];

const controls = [
  {
    title: "Maker-Checker Controls",
    text: "Independent checking across defined workflows",
  },
  {
    title: "Access Controls",
    text: "Controlled access aligned with process requirements",
  },
  {
    title: "Quality Sampling",
    text: "Structured quality checks across processed work",
  },
  {
    title: "Exception Queues",
    text: "Defined handling of identified exceptions",
  },
  {
    title: "SOP-Based Execution",
    text: "Processes aligned with defined operating procedures",
  },
  {
    title: "Audit-Ready Records",
    text: "Structured records supporting traceability and review",
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
    title: "Data & AI Enablement",
    path: "/services/data-ai-enablement",
    image: "/Data-AI.jpeg",
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

export default function BFSI() {
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
                  BFSI
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Structured back-office support for financial services operations
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Operational support for banks, fintechs, lenders, insurers and
                financial services organizations managing high-volume processes
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
                src="/BFSI.jpeg"
                alt="BFSI Operations"
                className="h-[360px] w-full object-cover sm:h-[470px]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            BFSI Operations
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#07182F] sm:text-5xl">
            Financial services operations are evolving rapidly
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-[#667085]">
            <p>
              Banks, fintechs, lenders and insurers manage high volumes of
              documentation, customer information and recurring operational
              processes that require accuracy, consistency and strong controls
            </p>

            <p>
              Rezzivion provides structured back-office support across
              onboarding, KYC/KYB, loan documentation, payment operations,
              reconciliation, disputes, collections, insurance servicing and
              reporting
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px]">
            <img
              src="/BFSI.jpeg"
              alt="Financial services operations"
              className="h-[300px] w-full object-cover sm:h-[480px]"
            />
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
            Supporting high-volume financial operations
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


      {/* CONTROLS */}
      <section className="bg-[#07182F] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Control & Quality
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Built around controlled execution
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
            BFSI operations can incorporate structured controls across defined
            workflows, with regulated decisions and approvals remaining with
            the client where required
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {controls.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8"
              >
                <div className="h-10 w-10 rounded-xl bg-[#B8924A]/20" />

                <h3 className="mt-7 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* IMPACT */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Business Impact
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Designed for practical BFSI outcomes
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Faster Processing",
                "Efficient execution across recurring financial operations",
              ],
              [
                "Stronger Data Quality",
                "Structured processing and validation supporting reliable information",
              ],
              [
                "Reduced Operational Workload",
                "Operational support that helps internal teams focus on higher-value priorities",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[24px] border border-[#E4E7EC] bg-[#F7F8FA] p-8"
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