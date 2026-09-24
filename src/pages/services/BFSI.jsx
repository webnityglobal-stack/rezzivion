import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

/* =========================================================
   BFSI DATA
========================================================= */

const capabilities = [
  {
    icon: "transform",
    title: "Digital Transformation",
    text: "Modernize legacy environments and transform traditional processes into scalable digital workflows that improve agility, efficiency, and operational visibility.",
  },
  {
    icon: "customer",
    title: "Customer Experience & Digital Journeys",
    text: "Design seamless customer journeys across digital channels, helping financial organizations simplify interactions, improve accessibility, and create more connected experiences.",
  },
  {
    icon: "ai",
    title: "Data, Analytics & AI",
    text: "Turn complex financial and operational data into meaningful insights using advanced analytics, intelligent automation, and AI-enabled decision support.",
  },
  {
    icon: "shield",
    title: "Risk, Compliance & Governance",
    text: "Support structured compliance and governance processes with better documentation, monitoring, workflow controls, reporting, and operational visibility.",
  },
  {
    icon: "automation",
    title: "Intelligent Process Automation",
    text: "Automate repetitive and rule-based activities to reduce manual effort, improve processing consistency, and allow teams to focus on higher-value work.",
  },
  
];

const technologySolutions = [
  {
    icon: "brain",
    title: "AI-Powered Intelligence",
    text: "Use AI and intelligent technologies to identify patterns, automate tasks, generate insights, and support operational decision-making.",
  },
  {
    icon: "workflow",
    title: "Workflow Automation",
    text: "Connect processes, approvals, documents, and teams through structured digital workflows that reduce unnecessary manual intervention.",
  },
  {
    icon: "analytics",
    title: "Advanced Analytics",
    text: "Transform operational and financial data into actionable insights through reporting, dashboards, analytics, and performance monitoring.",
  },
 
  {
    icon: "process",
    title: "Digital Process Management",
    text: "Standardize and digitize business processes to improve consistency, transparency, and operational control.",
  },
  {
    icon: "secure",
    title: "Secure Information Management",
    text: "Support structured handling of sensitive financial information through controlled workflows, organized documentation, and governance processes.",
  },
];

const lifecycle = [
  {
    icon: "onboarding",
    title: "Customer Onboarding",
    text: "Streamline customer intake, documentation, verification, and account setup through structured digital workflows.",
  },
  {
    icon: "account",
    title: "Account & Service Management",
    text: "Coordinate customer information, service requests, documentation, and operational activities through centralized processes.",
  },
  {
    icon: "transaction",
    title: "Transaction & Operations Support",
    text: "Improve high-volume operational processes with automation, workflow management, and real-time visibility.",
  },
  {
    icon: "risk",
    title: "Risk & Compliance",
    text: "Organize compliance activities, regulatory requirements, monitoring, documentation, and reporting.",
  },
  {
    icon: "data",
    title: "Data & Analytics",
    text: "Convert operational data into insights that help teams understand performance, identify opportunities, and support informed decisions.",
  },
  {
    icon: "optimize",
    title: "Continuous Optimization",
    text: "Continuously improve workflows, technology adoption, and operational processes as business requirements evolve.",
  },
];

const ecosystem = [
  {
    title: "Banking",
    text: "Digital banking, customer operations, workflow management, compliance, analytics, and process modernization.",
    image: "/BFSI.png",
  },
  {
    title: "Financial Services",
    text: "Financial operations, automation, data intelligence, customer servicing, and digital transformation.",
    image: "/finance-&-Accounting.png",
  },
  {
    title: "Insurance",
    text: "Policy operations, claims support, documentation, customer processes, compliance, and workflow management.",
    image: "/insurance.png",
  },
  {
    title: "FinTech",
    text: "Digital platforms, intelligent automation, data analytics, technology integration, and scalable operations.",
    image: "/fintech.png",
  },
];

/* =========================================================
   ICONS
========================================================= */

function Icon({ name, size = 28 }) {
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
    transform: (
      <>
        <rect x="3" y="4" width="7" height="6" rx="1" />
        <rect x="14" y="14" width="7" height="6" rx="1" />
        <path d="M10 7h4a3 3 0 0 1 3 3v4" />
        <path d="m14 12 3 3 3-3" />
      </>
    ),

    customer: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20a7 7 0 0 1 14 0" />
        <path d="M19 6h2M20 5v2" />
      </>
    ),

    ai: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M9 12h6M12 9v6" />
        <path d="M5 5 3 3M19 5l2-2M5 19l-2 2M19 19l2 2" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),

    automation: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="m5 5 2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),

    cloud: (
      <>
        <path d="M7 18h10a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 8.5 4.5 4.5 0 0 0 7 18Z" />
        <path d="M9 14h6M12 11v6" />
      </>
    ),

    brain: (
      <>
        <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 3 5h2" />
        <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-3 5h-2" />
        <path d="M9 4v16M15 4v16M9 9h6M9 15h6" />
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

    analytics: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </>
    ),

    process: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <path d="m15 16 1.5 1.5L19 15" />
      </>
    ),

    secure: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
      </>
    ),

    onboarding: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M17 8v6M14 11h6" />
      </>
    ),

    account: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="12" cy="9" r="2.5" />
        <path d="M8 17a4 4 0 0 1 8 0" />
      </>
    ),

    transaction: (
      <>
        <path d="M4 7h14" />
        <path d="m15 4 3 3-3 3" />
        <path d="M20 17H6" />
        <path d="m9 14-3 3 3 3" />
      </>
    ),

    risk: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="M12 8v4" />
        <circle cx="12" cy="15.5" r=".8" />
      </>
    ),

    data: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),

    optimize: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
        <path d="m17 3 3 3" />
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
   BFSI PAGE
========================================================= */

export default function BFSI() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#172033]">

      {/* =====================================================
    SECTION 1 — HERO
===================================================== */}
      <section className="relative overflow-hidden bg-[#07182F] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-5 pt-3 sm:px-8 sm:pb-8 sm:pt-4 lg:px-12 lg:pb-10 lg:pt-5">

          {/* Back Link */}
          <Link
            to="/services"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-[#D8B36A] sm:mb-5"
          >
            ← All Services
          </Link>

          {/* HERO CARD */}
          <div className="relative isolate overflow-hidden rounded-[22px] border border-white/10 bg-[#07182F] shadow-[0_25px_70px_rgba(0,0,0,0.22)] sm:rounded-[28px]">

            {/* FULL IMAGE
          Natural width/height is maintained.
          No object-cover cropping.
      */}
            <img
              src="/BFSI.png"
              alt="Banking Financial Services and Insurance"
              className="block h-auto min-h-[520px] w-full object-contain object-center sm:min-h-0"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/72 to-[#07182F]/20" />

            {/* Extra bottom gradient for readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07182F]/70 to-transparent" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12">

                <div className="max-w-[850px]">

                  {/* CATEGORY */}
                  <div className="mb-4 flex items-center gap-3 sm:mb-5">
                    <span className="h-px w-10 bg-[#D8B36A] sm:w-14" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8B36A] sm:text-sm sm:tracking-[0.22em]">
                      Banking, Financial Services & Insurance
                    </span>
                  </div>

                  {/* HEADING */}
                  <h1 className="max-w-[820px] text-[38px] font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl lg:text-[64px] xl:text-[70px]">
                    Modernizing Financial Services
                    <span className="block">
                      For A Digital-First World
                    </span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="mt-5 max-w-[700px] text-sm leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                    Transform financial operations through digital transformation,
                    intelligent automation, advanced analytics, and process optimization.
                  </p>

                  {/* BUTTON */}
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-[#D8B36A] hover:-translate-y-0.5 sm:mt-7 sm:px-7 sm:py-4"
                  >
                    Let's Talk
                    <Arrow />
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* =====================================================
          SECTION 2 — INTRO
      ===================================================== */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-8 lg:px-10">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            BFSI Solutions
          </span>

          <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#07182F] sm:text-5xl">
            Transforming Financial Services For A Smarter, More Connected Future
          </h2>

          <div className="mt-6 max-w-5xl space-y-5 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">

            <p>
              The financial services landscape is changing rapidly. Customers
              expect faster, simpler, and more personalized digital experiences,
              while financial organizations must manage increasing regulatory
              requirements, operational complexity, cybersecurity concerns, and
              growing volumes of data.
            </p>

            <p>
              Our BFSI solutions help banking, financial services, insurance,
              and FinTech organizations modernize their operations through
              digital transformation, intelligent automation, advanced analytics, and process optimization.
            </p>

            <p>
              By connecting people, processes, data, and technology, we help
              organizations create more efficient operations, strengthen
              governance, improve decision-making, and deliver consistent
              customer experiences across the financial lifecycle.
            </p>

          </div>

          <div className="mt-8 w-full overflow-hidden rounded-[24px] bg-[#F7F8FA]">
            <img
              src="/images/why-operational-partner.png"
              alt="Modern financial services operations"
              className="block h-auto w-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 3 — KEY CAPABILITIES
      ===================================================== */}
      <section className="bg-[#F7F8FA] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Key Capabilities
          </span>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl lg:text-5xl">
            Building Smarter, More Efficient Financial Operations
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Our capabilities combine technology, process expertise, data
            intelligence, and operational discipline to help financial
            organizations modernize and scale.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#07182F] hover:bg-[#07182F] hover:shadow-[0_18px_40px_rgba(7,24,47,0.10)] sm:p-6"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#B8924A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                  <Icon name={item.icon} size={30} />
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-6 text-[#07182F] group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085] group-hover:text-white/65">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 4 — TECHNOLOGY
      ===================================================== */}
      <section className="bg-[#07182F] py-14 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Technology & Innovation
          </span>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Technology That Enables Smarter Financial Operations
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Modern BFSI operations depend on connected technology, intelligent
            workflows, reliable data, and secure information management.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {technologySolutions.map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/50 hover:bg-white/[0.07] sm:p-7"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B8924A]/30 bg-[#B8924A]/10 text-[#D8B36A] transition group-hover:bg-[#B8924A] group-hover:text-white">
                  <Icon name={item.icon} size={30} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
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


      {/* =====================================================
    SECTION 5 — FINANCIAL LIFECYCLE
===================================================== */}
      <section className="py-10 sm:py-14 lg:py-18">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">

          {/* Section Heading */}
          <div className="max-w-4xl">

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B8924A] sm:text-xs">
              Financial Lifecycle
            </span>

            <h2 className="mt-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.025em] text-[#07182F] sm:mt-4 sm:text-4xl lg:text-5xl">
              Driving Efficiency Across The Financial Lifecycle
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#667085] sm:mt-5 sm:text-base sm:leading-8">
              From customer onboarding to continuous optimization, structured
              digital processes can help financial organizations improve
              consistency, visibility, and operational efficiency.
            </p>

          </div>

          {/* Lifecycle Cards */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

            {lifecycle.map((item) => (
              <div
                key={item.title}
                className="
            group
            rounded-[20px]
            border border-[#E4E7EC]
            bg-white
            p-5
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#B8924A]/50
            hover:shadow-[0_18px_45px_rgba(7,24,47,0.08)]
            sm:rounded-[22px]
            sm:p-6
            lg:p-7
          "
              >

                {/* Icon */}
                <div
                  className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-[15px]
              bg-[#07182F]
              text-[#D8B36A]
              transition-all duration-300
              group-hover:bg-[#B8924A]
              group-hover:text-white
              sm:h-14
              sm:w-14
              sm:rounded-2xl
            "
                >
                  <Icon
                    name={item.icon}
                    size={27}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
              mt-4
              text-[17px]
              font-semibold
              leading-6
              text-[#07182F]
              sm:mt-5
              sm:text-lg
              lg:text-xl
            "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
              mt-2.5
              text-[13px]
              leading-6
              text-[#667085]
              sm:mt-3
              sm:text-sm
              sm:leading-7
            "
                >
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 6 — FINANCIAL ECOSYSTEM
      ===================================================== */}
      <section className="bg-[#F7F8FA] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
            Financial Ecosystem
          </span>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-[#07182F] sm:text-4xl lg:text-5xl">
            Built For The Evolving Financial Ecosystem
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Our BFSI solutions can support organizations across banking,
            financial services, insurance, and FinTech through technology-led
            transformation and scalable operational solutions.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            {ecosystem.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(7,24,47,0.10)]"
              >

                <div className="relative aspect-[16/8] overflow-hidden bg-[#E9EDF2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#07182F]">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-[#07182F]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 7 — CTA
      ===================================================== */}
      <section className="relative overflow-hidden">

        <img
          src="/images/how-we-work-cta.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07182F]/88" />

        <div className="relative mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">
            Let’s Build The Future Of Financial Services
          </span>

          <h2 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build A Smarter, More Connected Financial Operation
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Modernize your processes, strengthen operational control, and
            create digital experiences designed for the evolving financial
            services landscape.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B8924A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#D8B36A]"
          >
            Let's Talk
            <Arrow />
          </Link>

        </div>
      </section>

      <Footer />

    </main>
  );
}