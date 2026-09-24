import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";
const services = [
  { icon: "FileText", title: "Legal Document Management", text: "Organize, classify, maintain, and track legal documents through structured digital workflows." },
  { icon: "BriefcaseBusiness", title: "Case & Matter Management", text: "Centralize case information, activities, documents, deadlines, and communications for better visibility." },
  { icon: "Workflow", title: "Legal Workflow Management", text: "Standardize repetitive legal processes and create efficient workflows for improved productivity." },
  { icon: "ShieldCheck", title: "Compliance Management", text: "Track regulatory requirements, important deadlines, documentation, and compliance activities." },
  { icon: "FileSignature", title: "Contract Management", text: "Manage contracts throughout their lifecycle, including creation, review, approvals, renewals, and expiration tracking." },
  { icon: "SearchCheck", title: "Legal Research & Documentation Support", text: "Assist legal teams with structured research, information gathering, document preparation, and record organization." },
];

const stages = [
  { icon: "ClipboardCheck", title: "Legal Intake & Assessment", text: "We organize incoming legal requests, collect required information, categorize matters, and establish the appropriate workflow for each case." },
  { icon: "Files", title: "Document Preparation & Management", text: "We help prepare, organize, classify, and maintain legal documents while ensuring that relevant records remain easily accessible." },
  { icon: "Route", title: "Review & Workflow Coordination", text: "Legal matters are routed through defined review and approval processes, helping teams maintain consistency and reduce unnecessary delays." },
  { icon: "CalendarCheck", title: "Compliance & Deadline Tracking", text: "Important deadlines, renewals, obligations, and compliance activities can be monitored through structured processes and reporting." },
  { icon: "FolderKanban", title: "Case & Matter Monitoring", text: "Centralized tracking provides visibility into ongoing matters, pending actions, documents, responsibilities, and status updates." },
  { icon: "Archive", title: "Closure & Record Management", text: "Once a matter is completed, relevant documentation and records can be organized and maintained for future reference and audit requirements." },
];

const solutions = [
  { icon: "BriefcaseBusiness", title: "Matter Management", text: "Centralized management of legal matters, case information, documents, activities, and status." },
  { icon: "FileSignature", title: "Contract Lifecycle Management", text: "Manage contracts from drafting and review through approval, execution, renewal, and closure." },
  { icon: "Files", title: "Document & Records Management", text: "Create an organized system for storing, categorizing, retrieving, and maintaining legal records." },
  { icon: "ShieldCheck", title: "Compliance Tracking", text: "Monitor compliance activities, deadlines, documentation, and recurring obligations." },
  { icon: "Settings2", title: "Legal Operations Support", text: "Provide structured operational assistance to legal teams to improve productivity and process consistency." },
  { icon: "BarChart3", title: "Reporting & Analytics", text: "Generate meaningful reports that provide visibility into workload, case status, turnaround times, and operational activities." },
];

const approach = [
  { icon: "LayoutDashboard", title: "Centralized Documentation", text: "Keep legal documents, records, and matter-related information organized in a structured environment." },
  { icon: "FolderKanban", title: "Matter & Case Coordination", text: "Track legal matters from intake to completion while maintaining visibility across every stage." },
  { icon: "RefreshCw", title: "Workflow Automation", text: "Reduce manual effort by creating standardized workflows for recurring legal processes and approvals." },
  { icon: "LockKeyhole", title: "Secure Information Management", text: "Support controlled access and organized handling of sensitive legal information and documentation." },
  { icon: "Eye", title: "Reporting & Visibility", text: "Gain clearer visibility into ongoing matters, pending tasks, deadlines, and operational performance." },
  { icon: "CircleCheckBig", title: "Compliance & Quality Control", text: "Establish consistent processes that help teams monitor requirements and maintain accurate records." },
];

const benefits = [
  { icon: "Cog", title: "Improved Operational Efficiency", text: "Streamlined workflows help legal teams manage more work with greater consistency." },
  { icon: "FileText", title: "Better Document Control", text: "Structured document management makes important information easier to organize and retrieve." },
  { icon: "Eye", title: "Greater Process Visibility", text: "Centralized tracking provides a clearer view of ongoing matters and pending activities." },
  { icon: "Workflow", title: "Reduced Administrative Work", text: "Standardized workflows can reduce repetitive manual activities and unnecessary follow-ups." },
  { icon: "ShieldCheck", title: "Improved Compliance Tracking", text: "Organized monitoring helps teams stay aware of deadlines, requirements, and recurring obligations." },
  { icon: "Target", title: "Scalable Legal Operations", text: "Processes can be adapted as your organization, legal workload, and operational requirements grow." },
];

const industries = [
  { icon: "Landmark", title: "Banking & Financial Services", text: "Legal documentation, compliance processes, contracts, and matter management." },
  { icon: "HeartPulse", title: "Healthcare", text: "Contract administration, documentation workflows, compliance support, and records management." },
  { icon: "Building2", title: "Corporate & Enterprise", text: "Contracts, corporate legal matters, documentation, approvals, and compliance tracking." },
  { icon: "Shield", title: "Insurance", text: "Claims-related legal processes, documentation, case coordination, and regulatory workflows." },
  { icon: "House", title: "Real Estate", text: "Agreements, property-related documentation, compliance, and legal matter management." },
  { icon: "Users", title: "Professional Services", text: "Contract management, legal documentation, workflow coordination, and operational support." },
];

const processSteps = [
  { icon: "SearchCheck", number: "01", title: "Discover", text: "We understand your existing legal processes, operational challenges, documentation requirements, and business objectives." },
  { icon: "FolderKanban", number: "02", title: "Organize", text: "We structure your legal information, documents, workflows, responsibilities, and processes into clearly defined categories." },
  { icon: "Settings2", number: "03", title: "Implement", text: "We establish the required workflows, tracking mechanisms, documentation systems, and operational processes." },
  { icon: "Cog", number: "04", title: "Manage", text: "Our team supports day-to-day legal operations while monitoring tasks, documents, deadlines, and workflow progress." },
  { icon: "Eye", number: "05", title: "Monitor", text: "Regular tracking and reporting provide visibility into ongoing matters and help identify process gaps." },
  { icon: "Lightbulb", number: "06", title: "Improve", text: "We continuously identify opportunities to simplify processes, reduce manual work, and improve operational efficiency." },
];

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
                  Streamline Legal Operations. Improve Accuracy. Strengthen Compliance.
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
                  Talk To Our Legal Experts <Arrow />
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

          <h3 className="mt-7 text-2xl font-semibold text-[#07182F] sm:text-3xl">Our Legal Management Services Include:</h3>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((item, index) => (
              <div key={item.title} className="group rounded-[24px] border border-[#E4E7EC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8924A]/40 hover:bg-[#07182F] hover:shadow-[0_18px_45px_rgba(7,24,47,0.10)] sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#B8924A] transition group-hover:bg-[#B8924A] group-hover:text-white sm:h-[72px] sm:w-[72px]">
                  <LegalIcon name={item.icon} size={34} strokeWidth={1.7} />
                </div>
                <h3 className="mt-7 text-lg font-semibold leading-7 text-[#07182F] transition group-hover:text-white sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085] transition group-hover:text-white/60">{item.text}</p>
                <div className="mt-7 h-px w-10 bg-[#B8924A] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-[#F7F8FA] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">Legal Operations</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
            Supporting Every Stage of Legal Operations
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#667085] sm:text-lg">
            Our legal management approach is designed to provide consistent support throughout the legal process.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {stages.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-[#E4E7EC] bg-white p-6 sm:p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] sm:h-[72px] sm:w-[72px]">
                  <LegalIcon name={item.icon} size={34} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#07182F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">Flexible Legal Solutions</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
            Legal Management Solutions Built Around Your Workflow
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#667085] sm:text-lg">
            Every organization has different legal processes, approval structures, and compliance requirements. Our solutions can be structured
            around your existing workflow rather than forcing your team into a one-size-fits-all system.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {solutions.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-[#E4E7EC] bg-[#F7F8FA] p-6 sm:p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#B8924A] sm:h-[72px] sm:w-[72px]">
                  <LegalIcon name={item.icon} size={34} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#07182F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="bg-[#07182F] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B36A]">Operational Excellence</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            A Structured Approach To Better Legal Operations
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {approach.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8924A]/15 text-[#D8B36A] sm:h-[72px] sm:w-[72px]">
                  <LegalIcon name={item.icon} size={36} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR PROCESS */}
      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1440px]">

          {/* Full Visual Process Container */}
          <div className="relative min-h-[760px] overflow-hidden rounded-[28px] bg-[#07182F] shadow-[0_25px_70px_rgba(7,24,47,0.16)] sm:min-h-[700px] lg:min-h-[640px] lg:rounded-[34px]">

            {/* FULL WIDTH IMAGE */}
            <div className="absolute inset-0">
              <img
                src="/legal-process.png"
                alt="Legal management process"
                className="h-full w-full object-cover object-center"
              />

              {/* Desktop Image Overlay */}
              <div className="absolute inset-0 hidden bg-gradient-to-r from-[#07182F]/95 via-[#07182F]/80 to-[#07182F]/25 lg:block" />

              {/* Mobile / Tablet Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#07182F]/80 via-[#07182F]/65 to-[#07182F]/98 lg:hidden" />

              {/* Subtle Gold Glow */}
              <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#B8924A]/10 blur-3xl" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[760px] items-center sm:min-h-[700px] lg:min-h-[640px]">

              <div className="w-full px-5 py-10 sm:px-8 sm:py-12 lg:max-w-[980px] lg:px-12 xl:px-16">

                {/* Section Heading */}
                <div className="max-w-2xl">

                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#D8B36A]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B36A] sm:text-sm">
                      Our Process
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                    How Our Legal Management Process Works
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                    Our structured approach helps organizations organize legal
                    operations, improve workflow visibility, manage documentation,
                    and maintain better control throughout the legal lifecycle.
                  </p>

                </div>

                {/* PROCESS GRID */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

                  {processSteps.map((item, index) => (
                    <div
                      key={item.number}
                      className="group rounded-2xl border border-white/10 bg-[#07182F]/65 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#D8B36A]/45 hover:bg-[#07182F]/85 sm:p-5"
                    >

                      <div className="flex gap-4">

                        {/* LARGE ICON */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B8924A]/15 text-[#D8B36A] transition-all duration-300 group-hover:bg-[#B8924A] group-hover:text-white sm:h-14 sm:w-14">
                          <LegalIcon
                            name={item.icon}
                            size={29}
                            strokeWidth={1.7}
                          />
                        </div>

                        {/* TEXT */}
                        <div className="min-w-0">

                          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8B36A]/75">
                            Step {String(index + 1).padStart(2, "0")}
                          </div>

                          <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                            {item.text}
                          </p>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            </div>

            {/* Bottom Gold Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#B8924A] via-[#D8B36A] to-transparent" />

          </div>

        </div>
      </section>

      {/* SECTION 7 */}
      <section className="bg-[#F7F8FA] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">Business Benefits</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
            Why Organizations Choose Our Legal Management Services
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {benefits.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-[#E4E7EC] bg-white p-6 sm:p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8924A]/10 text-[#B8924A] sm:h-[72px] sm:w-[72px]">
                  <LegalIcon name={item.icon} size={34} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#07182F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">Industry Support</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#07182F] sm:text-4xl lg:text-5xl">
            Legal Management Across Multiple Business Functions
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#667085] sm:text-lg">
            Our legal management solutions can support organizations operating across various sectors and regulatory environments.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-[#E4E7EC] bg-white p-6 sm:p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#07182F] text-[#D8B36A] sm:h-[72px] sm:w-[72px]">
                  <LegalIcon name={item.icon} size={36} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#07182F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{item.text}</p>
              </div>
            ))}
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
