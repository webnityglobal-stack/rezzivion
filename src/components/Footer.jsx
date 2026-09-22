import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const serviceLinks = [
    {
      name: "Legal Process Management",
      path: "/services/legal-process-management",
    },
    {
      name: "Finance & Accounting",
      path: "/services/finance-accounting",
    },
    {
      name: "Data & AI Enablement",
      path: "/services/data-ai-enablement",
    },
    {
      name: "Banking Financial Services & Insurance",
      path: "/services/bfsi",
    },
  ];

  return (
    <footer className="bg-[#0D2342] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">

            {/* Logo with white background */}
            <Link
              to="/"
              className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm transition duration-300 hover:shadow-md"
            >
              <img
                src="/Rezzivion-logo.png"
                alt="Rezzivion"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/65">
              A dependable extension of your business with structured
              delivery trained professionals quality controls and practical
              technology adoption
            </p>

            <p className="mt-6 text-sm font-medium tracking-wide text-[#B8924A]">
              YOUR VISION | OUR RESILIENCE | LASTING EXCELLENCE
            </p>

          </div>


          {/* Company */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8924A]">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/why-rezzivion"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Why Rezzivion
                </Link>
              </li>

              <li>
                <Link
                  to="/how-we-work"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  How We Work
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* Services */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8924A]">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              {serviceLinks.map((service) => (
                <li key={service.path}>

                  <Link
                    to={service.path}
                    className="text-sm leading-6 text-white/70 transition hover:text-white"
                  >
                    {service.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8924A]">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:info@rezzivion.com"
                className="group flex items-start gap-4"
              >

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#B8924A] transition group-hover:border-[#B8924A]/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/75 transition group-hover:text-white">
                    info@rezzivion.com
                  </p>

                </div>

              </a>


              {/* Contact CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#B8924A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a663]"
              >
                Let's Talk

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


      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-12">

          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Rezzivion
          </p>

          <div className="flex items-center gap-6">

            <span className="text-xs text-white/45">
              Business Process Management
            </span>

            <Link
              to="/contact"
              className="text-xs text-white/55 transition hover:text-white"
            >
              Get In Touch
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}