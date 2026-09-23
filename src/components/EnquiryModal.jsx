import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry Submitted:", form);

    alert("Thank you! Your enquiry has been submitted.");

    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });

    onClose();
  };

  const modal = (
    <div
      className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center bg-[#0D2342]/60 px-4 py-5 backdrop-blur-md sm:px-6"
      onClick={onClose}
    >
      {/* MODAL */}

      <div
        className="relative flex w-full max-w-[780px] max-h-[calc(100vh-40px)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(13,35,66,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F8FA] text-xl leading-none text-[#172033] transition-all duration-300 hover:bg-[#B8924A] hover:text-white"
        >
          ×
        </button>

        {/* HEADER */}

        <div className="shrink-0 border-b border-[#E8EBEF] px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-7">
          <div className="pr-12">

            <div className="flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
                Let's Talk
              </p>

              <span className="h-px w-10 bg-[#B8924A]" />
            </div>

            <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#0D2342] sm:text-3xl">
              Let’s explore the right fit
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Tell us about your requirement and our team will get in touch
              with you
            </p>

          </div>
        </div>

        {/* FORM SCROLL AREA */}

        <div className="min-h-0 flex-1 overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="px-6 py-6 sm:px-8 sm:py-7"
          >

            <div className="grid gap-5 sm:grid-cols-2">

              {/* FULL NAME */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Full Name{" "}
                  <span className="text-[#B8924A]">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="h-12 w-full rounded-lg border border-[#D9DEE7] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Work Email{" "}
                  <span className="text-[#B8924A]">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-lg border border-[#D9DEE7] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                />
              </div>

              {/* COMPANY */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="h-12 w-full rounded-lg border border-[#D9DEE7] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                />
              </div>

              {/* PHONE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="h-12 w-full rounded-lg border border-[#D9DEE7] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                />
              </div>

              {/* SERVICE */}

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Service Required{" "}
                  <span className="text-[#B8924A]">*</span>
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-lg border border-[#D9DEE7] bg-white px-4 text-sm text-[#172033] outline-none transition focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                >
                  <option value="">Select a service</option>

                  <option value="Legal Process Management">
                    Legal Process Management
                  </option>

                  <option value="Finance & Accounting">
                    Finance & Accounting
                  </option>

                  <option value="Data & AI Enablement">
                    Data & AI Enablement
                  </option>

                  <option value="BFSI">
                    Banking, Financial Services & Insurance
                  </option>
                </select>
              </div>

              {/* REQUIREMENT */}

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Process / Requirement{" "}
                  <span className="text-[#B8924A]">*</span>
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us briefly about your process or requirement"
                  className="w-full resize-none rounded-lg border border-[#D9DEE7] px-4 py-3 text-sm leading-6 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#B8924A] focus:ring-2 focus:ring-[#B8924A]/10"
                />
              </div>

            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0D2342] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B8924A] hover:shadow-lg"
            >
              Submit Enquiry
              <span>→</span>
            </button>

            <p className="mt-3 text-center text-xs text-[#98A2B3]">
              We will review your enquiry and get back to you
            </p>

          </form>
        </div>
      </div>
    </div>
  );

  // IMPORTANT:
  // Render modal directly into body
  return createPortal(modal, document.body);
}