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
    image: "/Lpm.png",
  },
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
    <main className="w-full overflow-x-hidden bg-white text-[#172033]">

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
              src="/BFSI.png"
              alt="BFSI Operations"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/65 to-[#07182F]/15" />

             <div className="relative z-10 flex min-h-[560px] items-center px-5 py-12 sm:min-h-[620px] sm:px-10 lg:min-h-[680px] lg:px-16 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12">
              <div className="max-w-4xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D8B36A]" />
                  <span className="text-base font-bold uppercase tracking-[0.24em] text-[#D8B36A] sm:text-lg">
                    BFSI
                  </span>
                </div>

                <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  Structured back-office support for financial services operations
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  Operational support for banks, fintechs, lenders, insurers and
                  financial services organizations managing high-volume processes
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


      {/* INTRO */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            BFSI Operations
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#07182F] sm:text-5xl">
            Financial services operations are evolving rapidly
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-base leading-7 sm:text-lg sm:leading-8 text-[#667085]">
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

          <div className="mt-8 w-full overflow-hidden rounded-[24px] bg-[#F7F8FA]">
            <img
              src="/images/why-operational-partner.png"
              alt="Financial services operations"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* CAPABILITIES */}
      <section className="bg-[#F7F8FA] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Key Capabilities
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-[#07182F] sm:text-4xl lg:text-5xl">
            Supporting high-volume financial operations
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#07182F] hover:bg-[#07182F] hover:shadow-[0_18px_40px_rgba(7,24,47,0.10)] sm:p-6"
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


      {/* CONTROLS */}
      <section className="bg-[#07182F] py-14 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Control & Quality
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Built around controlled execution
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 sm:text-base sm:leading-8 text-white/60">
            BFSI operations can incorporate structured controls across defined
            workflows, with regulated decisions and approvals remaining with
            the client where required
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {controls.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8924A]/20 text-[#D8B36A]">
                  {item.title === "Maker-Checker Controls" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                      <circle cx="9" cy="8" r="3" />
                      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
                      <path d="m15 14 2 2 4-4" />
                    </svg>
                  )}
                  {item.title === "Access Controls" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                      <rect x="5" y="10" width="14" height="10" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                      <circle cx="12" cy="15" r="1" />
                    </svg>
                  )}
                  {item.title === "Quality Sampling" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                      <path d="M12 3 19 6v5.5c0 4.3-2.8 7.5-7 9-4.2-1.5-7-4.7-7-9V6l7-3Z" />
                      <path d="m8.5 12 2.3 2.3 4.7-5" />
                    </svg>
                  )}
                  {item.title === "Exception Queues" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                      <rect x="5" y="4" width="14" height="16" rx="2" />
                      <path d="M8 8h8M8 12h5M8 16h3" />
                      <path d="m16 14 3 3" />
                    </svg>
                  )}
                  {item.title === "SOP-Based Execution" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                      <path d="M6 4h9l3 3v13H6z" />
                      <path d="M15 4v4h4M9 12h6M9 16h5" />
                    </svg>
                  )}
                  {item.title === "Audit-Ready Records" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                      <path d="M6 4h12v16H6z" />
                      <path d="M9 8h6M9 12h6M9 16h3" />
                      <path d="m15 16 1.5 1.5 3-3" />
                    </svg>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BUSINESS IMPACT */}
      <section className="bg-[#07182F] py-14 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Business Impact
          </span>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Designed for practical BFSI outcomes
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

            {[
              {
                title: "Faster Processing",
                text: "Efficient execution across recurring financial operations",
                icon: "speed",
              },
              {
                title: "Stronger Data Quality",
                text: "Structured processing and validation supporting reliable information",
                icon: "quality",
              },
              {
                title: "Reduced Operational Workload",
                text: "Operational support that helps internal teams focus on higher-value priorities",
                icon: "work",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 sm:p-7"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#B8924A]/30 bg-[#B8924A]/10 text-[#D8B36A]">

                  {item.icon === "speed" && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 14a8 8 0 1 1 16 0" />
                      <path d="m12 12 4-4" />
                      <path d="M6 18h12" />
                    </svg>
                  )}

                  {item.icon === "quality" && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
                      <path d="m8 12 2.5 2.5L16 9" />
                    </svg>
                  )}

                  {item.icon === "work" && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="6" width="16" height="14" rx="2" />
                      <path d="M9 6V4h6v2" />
                      <path d="M4 11h16" />
                      <path d="M10 11v2h4v-2" />
                    </svg>
                  )}

                </div>

                <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* RELATED */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Explore More
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">
            Explore our other capabilities
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group overflow-hidden rounded-[22px] border border-[#E4E7EC]"
              >
                <div className="w-full overflow-hidden bg-[#F7F8FA]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-center justify-between p-5 sm:p-6">
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
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/85" />

        <div className="relative mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Let’s Explore the Right Fit
          </span>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Start with one process, validate the value, and scale with confidence
          </h2>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-7 py-4 text-sm font-semibold text-white hover:bg-[#D8B36A]"
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