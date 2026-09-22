import React from "react";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    title: "Email Us",
    value: "info@rezzivion.com",
    description: "For business enquiries and partnership discussions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 6.5h16v11H4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 7 8 6 8-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Let's Discuss",
    value: "Your Operations",
    description: "Tell us about the process you want to improve, manage or scale.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.9L3 20l1.2-4.1A8.3 8.3 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Our Approach",
    value: "Start Small. Scale Smart.",
    description:
      "Begin with a defined process, validate the value and scale with confidence.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 19V5"
          strokeLinecap="round"
        />
        <path
          d="M4 17h5v-4h5V9h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m17 6 3 3-3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const services = [
  "Legal Process Management",
  "Finance & Accounting",
  "Data & AI Enablement",
  "Banking, Financial Services & Insurance",
  "Other / General Enquiry",
];

function Contact() {
  return (
    <main className="w-full bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0D2342]">
        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#B8924A]/10 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B8924A]">
              GET IN TOUCH
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Let's Start a{" "}
              <span className="text-[#D4AD63]">Conversation</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Tell us about your operational needs, challenges or growth
              priorities. Together, we can explore a practical way forward.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INTRO + DETAILS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#B8924A]">
                CONNECT WITH REZZIVION
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#0D2342] sm:text-4xl">
                Built around your process
                <br />
                <span className="text-[#B8924A]">Focused on your outcomes</span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#667085]">
                Whether you are looking to streamline an existing process,
                improve operational quality, add flexible capacity or explore
                AI-enabled opportunities, we would be happy to understand
                your requirements.
              </p>

              <div className="mt-10 space-y-4">
                {contactDetails.map((item) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-2xl border border-[#E6E9EF] bg-[#F7F8FA] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(13,35,66,0.08)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D2342] text-[#D4AD63] transition-colors duration-300 group-hover:bg-[#B8924A] group-hover:text-white">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                        {item.title}
                      </p>

                      <h3 className="mt-1 text-[16px] font-semibold text-[#0D2342]">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-[13px] leading-6 text-[#667085]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#F7F8FA] p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
                  SEND AN ENQUIRY
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0D2342] sm:text-3xl">
                  Tell us how we can help
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Share a few details and our team can understand the right
                  starting point for the conversation.
                </p>
              </div>

              <form className="space-y-5">
                {/* NAME + EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[13px] font-medium text-[#172033]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border border-[#D9DEE7] bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[13px] font-medium text-[#172033]"
                    >
                      Work Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="h-12 w-full rounded-xl border border-[#D9DEE7] bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                    />
                  </div>
                </div>

                {/* COMPANY + PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-[13px] font-medium text-[#172033]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      className="h-12 w-full rounded-xl border border-[#D9DEE7] bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[13px] font-medium text-[#172033]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91"
                      className="h-12 w-full rounded-xl border border-[#D9DEE7] bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[13px] font-medium text-[#172033]"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="service"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border border-[#D9DEE7] bg-white px-4 text-sm text-[#667085] outline-none transition focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-medium text-[#172033]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us briefly about your requirements..."
                    className="w-full resize-none rounded-xl border border-[#D9DEE7] bg-white px-4 py-3 text-sm leading-6 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#0D2342] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B8924A] hover:shadow-lg sm:w-auto sm:min-w-[170px]"
                >
                  Send Enquiry
                  <span className="ml-2 text-lg">→</span>
                </button>

                <p className="text-[11px] leading-5 text-[#98A2B3]">
                  By submitting this form, you are sharing your details with
                  Rezzivion for business communication and enquiry purposes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT HAPPENS NEXT
      ========================================================= */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#B8924A]">
              WHAT HAPPENS NEXT
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#0D2342] sm:text-4xl">
              A simple path from conversation to action
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#667085]">
              We keep the initial conversation focused on understanding your
              process, requirements and desired outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We learn about your process, challenges, volumes, systems and priorities.",
              },
              {
                number: "02",
                title: "Explore",
                text: "We identify practical ways Rezzivion can support your operational requirements.",
              },
              {
                number: "03",
                title: "Move Forward",
                text: "We define a clear starting point, scope and measurable path forward.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-[#E1E5EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]"
              >
                <span className="text-5xl font-semibold tracking-[-0.05em] text-[#B8924A]/20">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-[#0D2342]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B8924A] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0D2342]">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-[#B8924A]/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D4AD63]">
                LET'S EXPLORE THE RIGHT FIT
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                Start with one process
                <br />
                <span className="text-[#D4AD63]">
                  Scale with confidence
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/65">
                Your vision. Our resilience. Lasting excellence.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex h-13 shrink-0 items-center justify-center rounded-[4px] bg-[#B8924A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0D2342]"
            >
              Let's Talk
              <span className="ml-2 text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;