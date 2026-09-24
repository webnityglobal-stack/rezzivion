import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

/* =========================================================
   DATA
========================================================= */

const dataCapabilities = [
  {
    icon: "data",
    title: "Data Entry & Processing",
    text: "Structured data entry, processing and validation for high-volume operational workflows.",
  },
  {
    icon: "document",
    title: "Document Processing",
    text: "Convert documents and unstructured information into organized, usable data.",
  },
  {
    icon: "extract",
    title: "Data Extraction",
    text: "Extract relevant information from business documents and digital sources with structured workflows.",
  },
  {
    icon: "check",
    title: "Data Validation",
    text: "Apply quality checks and validation processes to improve data accuracy and consistency.",
  },
];

const aiCapabilities = [
  {
    icon: "brain",
    title: "AI-Assisted Processing",
    text: "Use focused AI capabilities to support repetitive and information-intensive operational activities.",
  },
  {
    icon: "automation",
    title: "Workflow Automation",
    text: "Connect repetitive tasks and processes through structured digital workflows.",
  },
  {
    icon: "search",
    title: "Intelligent Information Processing",
    text: "Identify, classify and organize information to make data easier to process and manage.",
  },
  {
    icon: "analytics",
    title: "Operational Analytics",
    text: "Turn operational data into meaningful insights that improve visibility and decision-making.",
  },
];

const humanProcess = [
  {
    icon: "users",
    title: "Trained Teams",
    text: "Experienced operations teams support day-to-day data and processing activities.",
  },
  {
    icon: "ai",
    title: "AI Assistance",
    text: "Focused AI capabilities support repetitive and information-intensive tasks.",
  },
  {
    icon: "quality",
    title: "Quality Review",
    text: "Structured review and validation help maintain consistent operational quality.",
  },
  {
    icon: "shield",
    title: "Human Oversight",
    text: "Critical decisions, exceptions and final validation remain supported by people.",
  },
];

const businessImpact = [
  {
    icon: "quality",
    title: "Better Data Quality",
    text: "Improve accuracy and consistency across operational information.",
  },
  {
    icon: "speed",
    title: "Faster Processing",
    text: "Reduce unnecessary manual steps and improve processing turnaround.",
  },
  {
    icon: "visibility",
    title: "Greater Visibility",
    text: "Gain clearer insight into operational performance and process bottlenecks.",
  },
  {
    icon: "workflow",
    title: "Consistent Workflows",
    text: "Standardize repetitive processes and create more predictable operations.",
  },
  {
    icon: "team",
    title: "Better Team Utilization",
    text: "Allow teams to spend less time on repetitive activities and more on higher-value work.",
  },
  {
    icon: "scale",
    title: "Scalable Operations",
    text: "Build processes that can adapt as business volumes and requirements evolve.",
  },
];

const relatedServices = [
  {
    title: "Legal Process Management",
    text: "Structured legal operations, documentation and workflow support.",
    image: "/legal-process.png",
    link: "/services/legal-process-management",
  },
  {
    title: "BFSI",
    text: "Technology-led transformation for banking, financial services and insurance.",
    image: "/BFSI.png",
    link: "/services/bfsi",
  },
  {
    title: "Finance & Accounting",
    text: "Structured financial operations, process support and reporting.",
    image: "/finance-&-Accounting.png",
    link: "/services/finance-accounting",
  },
];

/* =========================================================
   ICONS
========================================================= */

function Icon({ name, size = 30 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    data: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),

    document: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),

    extract: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 13h5M15 16h1" />
        <path d="m16 13 3 3-3 3" />
      </>
    ),

    check: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),

    brain: (
      <>
        <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 3 5h2" />
        <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-3 5h-2" />
        <path d="M9 4v16M15 4v16M9 9h6M9 15h6" />
      </>
    ),

    automation: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="m5 5 2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),

    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
        <path d="M8 10.5h5M10.5 8v5" />
      </>
    ),

    analytics: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5" />
        <path d="M17 14a5 5 0 0 1 4 5" />
      </>
    ),

    ai: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M9 12h6M12 9v6" />
        <path d="M5 5 3 3M19 5l2-2M5 19l-2 2M19 19l2 2" />
      </>
    ),

    quality: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="M12 8v4" />
        <circle cx="12" cy="15.5" r=".8" />
      </>
    ),

    speed: (
      <>
        <path d="M4 15a8 8 0 1 1 16 0" />
        <path d="M12 12 16 8" />
        <path d="M5 18h14" />
      </>
    ),

    visibility: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),

    workflow: (
      <>
        <rect x="3" y="3" width="6" height="5" rx="1" />
        <rect x="15" y="16" width="6" height="5" rx="1" />
        <rect x="15" y="3" width="6" height="5" rx="1" />
        <path d="M9 5.5h6M18 8v5a3 3 0 0 1-3 3H9" />
      </>
    ),

    team: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M14 16a5 5 0 0 1 7 4" />
      </>
    ),

    scale: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 7 2.5 13h5L5 7Z" />
        <path d="m19 7-2.5 6h5L19 7Z" />
        <path d="M7 21h10" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

function ApproachIcon({ name, size = 30 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    discover: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4.5 4.5" />
        <path d="M8 10.5h5" />
        <path d="M10.5 8v5" />
      </>
    ),

    structure: (
      <>
        <rect x="3" y="3" width="7" height="6" rx="1" />
        <rect x="14" y="15" width="7" height="6" rx="1" />
        <path d="M10 6h3a4 4 0 0 1 4 4v5" />
        <path d="m14 12 3 3 3-3" />
      </>
    ),

    enable: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v5l-4.5 7.5A4 4 0 0 0 9 21h6a4 4 0 0 0 3.5-5.5L14 8V3" />
        <path d="M8 15h8" />
        <path d="M10 18h4" />
      </>
    ),

    automate: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m5 5 2 2" />
        <path d="m17 17 2 2" />
        <path d="m19 5-2 2" />
        <path d="m7 17-2 2" />
      </>
    ),

    analyze: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="11" cy="11" r="1" />
        <circle cx="14" cy="13" r="1" />
        <circle cx="19" cy="7" r="1" />
      </>
    ),

    optimize: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
        <path d="m17 3 3 3" />
        <path d="M7 21h10" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* =========================================================
   DATA & AI PAGE
========================================================= */

export default function DataAIEnablement() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#172033]">

      {/* =====================================================
          SECTION 1 — HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#07182F] text-white">
        <div className="relative mx-auto max-w-[1440px] px-4 pb-3 pt-0 sm:px-6 sm:pb-4 lg:px-10">

          <Link
            to="/services"
            className="mb-3 inline-flex items-center gap-3 pt-1 text-sm text-white/65 transition hover:text-[#D8B36A]"
          >
            ← All Services
          </Link>

          <div className="relative min-h-[500px] overflow-hidden rounded-[24px] sm:min-h-[530px] lg:min-h-[580px]">

            <img
              src="/Data-AI.png"
              alt="Data and AI Enablement"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/65 to-[#07182F]/15" />

            <div className="relative z-10 flex min-h-[500px] items-center px-5 py-8 sm:min-h-[530px] sm:px-10 sm:py-10 lg:min-h-[580px] lg:px-16">

              <div className="max-w-3xl">

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D8B36A]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B36A] sm:text-sm">
                    Data & AI Enablement
                  </span>
                </div>

                <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  Turning Data Into Intelligent Operations
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  Structured data operations, intelligent workflows, analytics
                  and focused AI capabilities designed to improve efficiency,
                  accuracy and operational visibility.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D8B36A]"
                >
                  Let’s Talk
                  <Arrow />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 2 — INTRO
      ===================================================== */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            The Evolution Is Now
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#07182F] sm:text-4xl lg:text-5xl">
            Making AI Work Within Everyday Operations
          </h2>

          <div className="mt-4 max-w-4xl space-y-3 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">

            <p>
              AI is changing how organizations process information and manage
              routine business activities. But meaningful transformation
              requires more than technology—it requires the right combination
              of people, processes, data, and intelligent systems.
            </p>

            <p>
              Our Data & AI Enablement approach helps organizations improve
              data quality, streamline processing, reduce repetitive work,
              and create better operational visibility.
            </p>

          </div>

          <div className="mt-5 w-full overflow-hidden rounded-[22px] bg-[#F7F8FA]">
            <img
              src="/images/why-ai-enabled.png"
              alt="AI-enabled operations"
              className="block h-auto w-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 3 — CAPABILITIES
      ===================================================== */}
      <section className="bg-[#F7F8FA] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Our Capabilities
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
            From Structured Data To Intelligent Workflows
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            We help organizations modernize data-intensive and information-heavy
            operations through practical technology and AI capabilities.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

            {dataCapabilities.map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#07182F] hover:bg-[#07182F] hover:shadow-[0_18px_40px_rgba(7,24,47,0.10)]"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#B8924A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                  <Icon name={item.icon} size={30} />
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-6 text-[#07182F] group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085] group-hover:text-white/65">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — AI CAPABILITIES
      ===================================================== */}
      <section className="bg-[#07182F] py-8 text-white sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Focused AI Capabilities
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Technology Designed Around Real Business Processes
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            AI creates the most value when it is applied to clearly defined
            operational challenges and supported by structured processes.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">

            {aiCapabilities.map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:bg-white/[0.07] sm:p-6"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B8924A]/30 bg-[#B8924A]/10 text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                  <Icon name={item.icon} size={30} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/60">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — HUMAN + AI
      ===================================================== */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

            <div className="overflow-hidden rounded-[24px] bg-[#F7F8FA]">
              <img
                src="/human-ai.png"
                alt="Human expertise and AI"
                className="block h-full w-full object-cover"
              />
            </div>

            <div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
                The Right Balance
              </span>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl lg:text-5xl">
                Human Expertise Meets Intelligent Technology
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                AI becomes more valuable when it works alongside experienced
                teams and structured processes.
              </p>

              <p className="mt-3 max-w-3xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                We combine trained operational teams with focused AI
                capabilities to automate repetitive activities while
                maintaining human oversight for validation, exceptions,
                and critical decisions.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {humanProcess.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-[#E4E7EC] bg-white p-4"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07182F] text-[#D8B36A]">
                      <Icon name={item.icon} size={24} />
                    </div>

                    <h3 className="mt-3 font-semibold text-[#07182F]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#667085]">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 6 — BUSINESS IMPACT
      ===================================================== */}
      <section className="bg-[#07182F] py-8 text-white sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            From Data To Value
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Better Processes. Better Visibility. Better Outcomes.
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            By connecting data, people, processes, and technology,
            organizations can create operations that are easier to manage,
            measure, and scale.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">

            {businessImpact.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:bg-white/[0.07]"
              >

                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#D8B36A]">
                  <Icon name={item.icon} size={28} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
    SECTION 7 — APPROACH
===================================================== */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Our Approach
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl lg:text-5xl">
            A Practical Path To AI-Enabled Operations
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            We move from understanding the operation to structuring the process,
            enabling technology, measuring performance, and continuously improving.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "discover",
                title: "Discover",
                text: "Understand your processes, data, challenges, and objectives.",
              },
              {
                icon: "structure",
                title: "Structure",
                text: "Standardize workflows, information, and operational controls.",
              },
              {
                icon: "enable",
                title: "Enable",
                text: "Introduce appropriate technology and AI capabilities.",
              },
              {
                icon: "automate",
                title: "Automate",
                text: "Reduce repetitive manual activities through intelligent workflows.",
              },
              {
                icon: "analyze",
                title: "Analyze",
                text: "Use data and analytics to understand performance and opportunities.",
              },
              {
                icon: "optimize",
                title: "Optimize",
                text: "Continuously improve processes as your business evolves.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[20px] border border-[#E4E7EC] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:shadow-[0_18px_40px_rgba(7,24,47,0.08)] sm:p-6"
              >

                {/* ICON — MOBILE + DESKTOP CENTER */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] transition-all duration-300 group-hover:bg-[#B8924A] group-hover:text-white sm:h-16 sm:w-16">
                  <ApproachIcon name={item.icon} size={30} />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-[#07182F]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#667085]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>
      {/* =====================================================
          SECTION 8 — RELATED SERVICES
      ===================================================== */}
      <section className="bg-[#F7F8FA] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Explore More
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl">
            Explore Our Other Capabilities
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            {relatedServices.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group overflow-hidden rounded-[22px] border border-[#E4E7EC] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,24,47,0.10)]"
              >

                <div className="aspect-[16/9] overflow-hidden bg-[#E9EDF2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">

                  <h3 className="text-lg font-semibold text-[#07182F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {item.text}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B8924A]">
                    Explore
                    <Arrow />
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 9 — CTA
      ===================================================== */}
      <section className="relative overflow-hidden">

        <img
          src="/images/how-we-work-cta.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/88" />

        <div className="relative mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            The Next Stage Of Operations Is Intelligent
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Turn Complex Data Into Better Ways Of Working
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Transform data-intensive processes into structured, scalable,
            and intelligent operations designed to improve efficiency today
            and adapt to tomorrow.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D8B36A]"
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