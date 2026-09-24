import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const relatedServices = [
  { title: "Finance & Accounting", path: "/services/finance-accounting", image: "/finance-&-Accounting.png" },
  { title: "Data & AI Enablement", path: "/services/data-ai-enablement", image: "/Data-AI.png" },
  { title: "BFSI", path: "/services/bfsi", image: "/BFSI.png" },
];

function LegalIcon({ name, size = 34, strokeWidth = 1.7 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  const paths = {
    FileText: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 13h6" /><path d="M9 17h6" /></>,
    BriefcaseBusiness: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></>,
    Workflow: <><rect x="3" y="3" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><rect x="15" y="3" width="6" height="5" rx="1" /><path d="M9 5.5h6M18 8v5a3 3 0 0 1-3 3H9" /></>,
    ShieldCheck: <><path d="M12 3 20 6v5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6z" /><path d="m8 12 2.5 2.5L16 9" /></>,
    FileSignature: <><path d="M6 3h8l4 4v5" /><path d="M14 3v5h5" /><path d="M5 17c2 0 3-3 5-3 1.5 0 1 2-1 3s-1 3 1 3c2 0 4-2 6-4" /><path d="M6 21h12" /></>,
    SearchCheck: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /><path d="m8 10 2 2 4-4" /></>,
    ClipboardCheck: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2" /><path d="m8 12 2 2 5-5" /></>,
    Files: <><path d="M7 7V4a2 2 0 0 1 2-2h8l4 4v12a2 2 0 0 1-2 2h-3" /><path d="M17 2v5h4" /><rect x="3" y="7" width="12" height="14" rx="2" /><path d="M6 12h6M6 16h5" /></>,
    Route: <><circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><path d="M7 5h5a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4h0" /></>,
    CalendarCheck: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 9h18" /><path d="m8 14 2 2 5-5" /></>,
    FolderKanban: <><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3z" /><path d="M8 12v4M12 10v6M16 13v3" /></>,
    Archive: <><path d="M4 7h16v13H4z" /><path d="M3 4h18v3H3zM9 11h6" /></>,
    LayoutDashboard: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 10h18M10 10v11" /></>,
    RefreshCw: <><path d="M20 11a8 8 0 0 0-14-5L3 9" /><path d="M3 4v5h5" /><path d="M4 13a8 8 0 0 0 14 5l3-3" /><path d="M21 20v-5h-5" /></>,
    LockKeyhole: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    BarChart3: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    CircleCheckBig: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-5" /></>,
    Building2: <><path d="M4 21V3h10v18M14 9h6v12M7 7h4M7 11h4M7 15h4M17 13h2M17 17h2" /></>,
    Landmark: <><path d="m3 10 9-6 9 6M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M3 21h18" /></>,
    HeartPulse: <><path d="M3 12h4l2-4 3 8 2-4h7" /><path d="M12 21S4 16 4 9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 7-6 11-6 11z" /></>,
    Shield: <><path d="M12 3 20 6v5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6z" /></>,
    House: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    Users: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14a4 4 0 0 1 4 4v3" /></>,
    Lightbulb: <><path d="M9 18h6M10 21h4" /><path d="M8 15c-1.2-1-2-2.6-2-4.5a6 6 0 1 1 12 0c0 1.9-.8 3.5-2 4.5-.8.7-1 1.3-1 2H9c0-.7-.2-1.3-1-2z" /></>,
    Settings2: <><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h8M16 18h4" /><circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="14" cy="18" r="2" /></>,
    Eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" /><circle cx="12" cy="12" r="2.5" /></>,
    Target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
    Cog: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.6V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.6-1H6v-2.6h.4A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.6v.4a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1A1.7 1.7 0 0 0 19.4 10c.2.6.8 1 1.4 1h.2v2.6h-.2c-.6 0-1.2.4-1.4 1.4z" /></>,
  };
  return <svg {...common}>{paths[name] || paths.FileText}</svg>;
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
          <Link to="/services" className="mb-8 inline-flex items-center gap-3 text-sm text-white/65 hover:text-[#D8B36A]">
            ← All Services
          </Link>

          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 sm:min-h-[560px] lg:min-h-[600px]">
            <img src="/legal-hero.png" alt="Legal Management" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/65 to-[#07182F]/15" />

            <div className="relative z-10 flex min-h-[480px] items-center px-5 py-8 sm:min-h-[500px] sm:px-10 lg:min-h-[540px] lg:px-16">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D8B36A]" />
                  <span className="text-base font-bold uppercase tracking-[0.24em] text-[#D8B36A] sm:text-lg">
                    Legal Management Services
                  </span>
                </div>
                <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                  Streamline Legal Operations  Strengthen Compliance
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  Managing legal processes requires accuracy, coordination, documentation, and timely execution.
                  Our Legal Management solutions help organizations simplify complex legal workflows, improve
                  operational efficiency, and maintain better control over every stage of the legal process.
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  From document management and case coordination to compliance tracking and reporting, we provide
                  structured support that helps legal teams focus on critical matters while routine processes remain
                  organized and transparent.
                </p>
                <Link to="/contact" className="mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(184,146,74,0.25)] transition hover:-translate-y-0.5 hover:bg-[#D8B36A]">
                  Let's Talk <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">Legal Management Lifecycle</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
              Comprehensive Support Across The Legal Management Lifecycle
            </h2>
            <p className="mt-6 text-base leading-8 text-[#667085] sm:text-lg">
              Modern legal operations involve multiple processes, stakeholders, documents, and deadlines. Without an organized workflow,
              important information can become difficult to track and manage.
            </p>
            <p className="mt-5 text-base leading-8 text-[#667085] sm:text-lg">
              Our legal management services provide structured support across the complete lifecycle — from <strong>case intake and documentation
                to compliance, workflow management, reporting, and closure.</strong>
            </p>
          </div>

          {/* <h3 className="mt-7 text-2xl font-semibold text-[#07182F] sm:text-3xl">Our Legal Management Services Include:</h3> */}

          {/* =====================================================
    PRE-JUDGMENT & POST-JUDGMENT SERVICES
===================================================== */}

          <div className="mt-8 sm:mt-10">

            <h2 className="mx-auto max-w-5xl text-center text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#07182F] sm:text-3xl lg:text-4xl">
              We Provide A Wide Range Of Pre- And Post-Judgment
              <br className="hidden sm:block" />
              Litigation Support. Our Services Include:
            </h2>


            {/* =====================================================
      TWO COLUMNS
  ===================================================== */}

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

              {/* =================================================
        PRE-JUDGMENT
    ================================================= */}

              <div
                className="
        rounded-[24px]
        border border-[#E4E7EC]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(7,24,47,0.04)]
        sm:p-8
        lg:p-9
      "
              >

                <h3 className="text-xl font-semibold text-[#07182F] sm:text-2xl">
                  Pre-judgment
                </h3>

                <ul className="mt-6 space-y-4">

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Pre-attorney suit review
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Suit assembly
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Default request
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Stipulations
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Alias preparation
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Service follow-up and review
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Electronic filing
                    </span>
                  </li>

                </ul>

              </div>


              {/* =================================================
        POST-JUDGMENT
    ================================================= */}

              <div
                className="
        rounded-[24px]
        border border-[#E4E7EC]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(7,24,47,0.04)]
        sm:p-8
        lg:p-9
      "
              >

                <h3 className="text-xl font-semibold text-[#07182F] sm:text-2xl">
                  Post-judgment
                </h3>

                <ul className="mt-6 space-y-4">

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Judgment entry
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Garnishment preparation and filing
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Garnishment answer review
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Judgment review and validation for placed accounts
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 text-[#07182F]">◆</span>
                    <span className="text-sm leading-7 text-[#667085] sm:text-base">
                      Property sale for foreclosure
                    </span>
                  </li>

                </ul>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
    SEPARATE SECTION — COLLECTION LITIGATION SUPPORT
===================================================== */}
      <section className="bg-[#F7F8FA] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

          {/* SECTION HEADER */}
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Collection Litigation Support
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
              End-to-End Collection Litigation Support
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              End-to-end operational support across the collection litigation
              lifecycle, helping clients improve turnaround, consistency,
              documentation, and case visibility.
            </p>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#B8924A]" />
          </div>


          {/* =================================================
        SERVICE CARDS
    ================================================= */}
          <div
            className="
        mt-8
        flex
        gap-5
        overflow-x-auto
        pb-4
        snap-x
        snap-mandatory
        scrollbar-hide

        lg:grid
        lg:grid-cols-3
        lg:gap-6
        lg:overflow-visible
        lg:pb-0
      "
          >

            {/* DOCUMENT PROCESSING */}
            <div
              className="
          group
          min-w-[290px]
          snap-start
          rounded-[22px]
          border
          border-[#D9E0EA]
          bg-[#F8FAFC]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#B8924A]/50
          hover:bg-white
          hover:shadow-[0_18px_45px_rgba(7,24,47,0.08)]
          sm:min-w-[340px]
          lg:min-w-0
          lg:p-7
        "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-7 w-7"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v4h4" />
                  <path d="M9 12h6M9 16h6" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#07182F]">
                Document Processing
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Retrieve and organize case documents from client systems and
                portals. Validate completeness, apply case-specific requirements,
                and route files for review.
              </p>
            </div>


            {/* SUIT REVIEW */}
            <div
              className="
          group
          min-w-[290px]
          snap-start
          rounded-[22px]
          border
          border-[#D9E0EA]
          bg-[#F8FAFC]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#B8924A]/50
          hover:bg-white
          hover:shadow-[0_18px_45px_rgba(7,24,47,0.08)]
          sm:min-w-[340px]
          lg:min-w-0
          lg:p-7
        "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-7 w-7"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="M8 9h8M8 13h6" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#07182F]">
                Suit Review & Preparation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Review accounts after the demand period, validate litigation
                requirements, and prepare complete suit packages for attorney
                review and filing.
              </p>
            </div>


            {/* ELECTRONIC FILING */}
            <div
              className="
          group
          min-w-[290px]
          snap-start
          rounded-[22px]
          border
          border-[#D9E0EA]
          bg-[#F8FAFC]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#B8924A]/50
          hover:bg-white
          hover:shadow-[0_18px_45px_rgba(7,24,47,0.08)]
          sm:min-w-[340px]
          lg:min-w-0
          lg:p-7
        "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-7 w-7"
                >
                  <path d="M5 4h14v16H5z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#07182F]">
                Electronic Filing & Retrieval
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Prepare and submit approved filings through applicable court
                systems. Retrieve filed documents, update case records, and
                maintain organized documentation.
              </p>
            </div>


            {/* JUDGMENT & HEARING */}
            <div
              className="
          group
          min-w-[290px]
          snap-start
          rounded-[22px]
          border
          border-[#D9E0EA]
          bg-[#F8FAFC]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#B8924A]/50
          hover:bg-white
          hover:shadow-[0_18px_45px_rgba(7,24,47,0.08)]
          sm:min-w-[340px]
          lg:min-w-0
          lg:p-7
        "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-7 w-7"
                >
                  <path d="M4 19h16" />
                  <path d="M6 17V9l6-4 6 4v8" />
                  <path d="M9 17v-5h6v5" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#07182F]">
                Judgment & Hearing Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Prepare hearing and judgment support packages for eligible cases,
                capture hearing outcomes, and update systems with approved
                judgment information and adjustments.
              </p>
            </div>


            {/* POST-JUDGMENT SUPPORT */}
            <div
              className="
          group
          min-w-[290px]
          snap-start
          rounded-[22px]
          border
          border-[#D9E0EA]
          bg-[#F8FAFC]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#B8924A]/50
          hover:bg-white
          hover:shadow-[0_18px_45px_rgba(7,24,47,0.08)]
          sm:min-w-[340px]
          lg:min-w-0
          lg:p-7
        "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-7 w-7"
                >
                  <path d="M4 19h16" />
                  <path d="M6 17l4-4 3 3 5-6" />
                  <path d="M15 10h3v3" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#07182F]">
                Post-Judgment Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Support garnishments, property liens, receiverships, asset
                verification, and post-garnishment actions, including order
                tracking, sale coordination, and related documentation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#F7F8FA] py-10 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">Explore More</span>
          <h2 className="mt-5 text-3xl font-semibold text-[#07182F] sm:text-4xl">Explore our other capabilities</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link key={service.path} to={service.path} className="group overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white">
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-6">
                  <h3 className="font-semibold text-[#07182F]">{service.title}</h3>
                  <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img src="/legal-cta.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#07182F]/85" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-10 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">Smarter Legal Operations</span>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Simplify Your Legal Operations With Smarter Management
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Turn complex legal processes into structured, trackable, and efficient workflows.
            Whether you need support with legal documentation, matter management, contracts,
            compliance, workflow coordination, or legal operations, our solutions are designed
            to help your organization work more efficiently and maintain better control over
            its legal processes.
          </p>
          <h3 className="mt-8 text-xl font-semibold text-white sm:text-2xl">
            Let's Build A More Efficient Legal Operation
          </h3>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-7 py-4 text-sm font-semibold text-white hover:bg-[#D8B36A]">
            Speak To Our Legal Experts <Arrow />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
