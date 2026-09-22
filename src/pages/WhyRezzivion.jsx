import React from "react";

const benefits = [
  {
    icon: "people",
    title: "INDUSTRY",
    subtitle: "EXPERTISE",
  },
  {
    icon: "bulb",
    title: "INNOVATIVE",
    subtitle: "SOLUTIONS",
  },
  {
    icon: "handshake",
    title: "CLIENT-FIRST",
    subtitle: "APPROACH",
  },
  {
    icon: "chart",
    title: "MEASURABLE",
    subtitle: "IMPACT",
  },
  {
    icon: "shield",
    title: "A LONG-TERM",
    subtitle: "PARTNER",
  },
];

function BenefitIcon({ type }) {
  if (type === "people") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <circle
          cx="9"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3.5 19C3.8 15.8 5.7 14 9 14C12.3 14 14.2 15.8 14.5 19"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="17"
          cy="9"
          r="2.3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M15.5 14.5C17.8 14.5 19.5 15.9 20 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "bulb") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M9 18H15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10 21H14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8.2 14.5C7.1 13.5 6.5 12.1 6.5 10.5C6.5 7.5 8.9 5 12 5C15.1 5 17.5 7.5 17.5 10.5C17.5 12.1 16.9 13.5 15.8 14.5C15.1 15.1 15 16 15 16H9C9 16 8.9 15.1 8.2 14.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "handshake") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M3 8.5L6.5 5L10 8L12 6L16 9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 8.5L17.5 5L14 8L12 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9L10.2 13.2C11 14 12.2 14 13 13.2L14 12.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 9L13.8 13.2C13 14 11.8 14 11 13.2L9.5 11.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M5 15L8 18M8 13L11 16M15 15L12 18M19 15L16 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M4 19V5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 19H20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 15L10 12L13 14L19 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7H19V10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11.5C19 16.2 16.1 19.4 12 21C7.9 19.4 5 16.2 5 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const WhyRezzivion = () => {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full overflow-hidden">

        {/* Hero Image */}
        <img
          src="/images/why-rezzivion-hero.png"
          alt="Why Rezzivion"
          className="
            h-[620px]
            w-full
            object-cover
            object-[68%_top]
            sm:h-[600px]
            sm:object-[62%_top]
            lg:h-[650px]
            lg:object-[58%_top]
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0D2342]/55" />

        {/* Gold Top Line */}
        <div className="absolute left-0 top-0 z-20 h-1 w-full bg-[#C99B43]" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

            <div className="max-w-3xl">

              <span
                className="
                  block
                  text-sm
                  font-semibold
                  tracking-[5px]
                  text-[#E3B95E]
                  sm:text-base
                  sm:tracking-[6px]
                "
              >
                WHY
              </span>

              <h1
                className="
                  mt-3
                  text-5xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-2px]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                RE
                <span className="text-[#E3B95E]">Z</span>
                ZIVION
              </h1>

              <div className="mt-6 h-[3px] w-20 bg-[#E3B95E]" />

              <h2
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  font-semibold
                  leading-6
                  tracking-[1.5px]
                  text-white
                  sm:text-base
                  sm:leading-7
                  sm:tracking-[2px]
                "
              >
                BUILT FOR ACCURACY. DESIGNED FOR SCALE.
                <br className="hidden sm:block" />
                DRIVEN BY INTELLIGENT OPERATIONS.
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/80
                  sm:text-base
                  sm:leading-8
                "
              >
                Rezzivion combines industry expertise, innovative thinking
                and intelligent execution to create reliable and measurable
                operational outcomes.
              </p>

              {/* =================================================
                  RESTORED FIVE HERO BENEFITS
              ================================================= */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

                {benefits.map((benefit) => (
                  <div
                    key={benefit.icon}
                    className="
                      flex
                      min-h-[92px]
                      flex-col
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/20
                      bg-[#0D2342]/45
                      px-3
                      py-3
                      text-center
                      backdrop-blur-sm
                      sm:min-h-[100px]
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F8F1E3]
                        text-[#B8924A]
                      "
                    >
                      <BenefitIcon type={benefit.icon} />
                    </div>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        font-bold
                        leading-4
                        tracking-[0.8px]
                        text-white
                        sm:text-[11px]
                      "
                    >
                      {benefit.title}
                    </p>

                    <p
                      className="
                        text-[10px]
                        font-bold
                        leading-4
                        tracking-[0.8px]
                        text-[#E3B95E]
                        sm:text-[11px]
                      "
                    >
                      {benefit.subtitle}
                    </p>
                  </div>
                ))}

              </div>

              {/* CTA */}
              <a
                href="/contact"
                className="
                  mt-7
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-[4px]
                  bg-[#B8924A]
                  px-7
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#D2AD67]
                  hover:shadow-lg
                "
              >
                Let's Talk
                <span className="ml-2">→</span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-7
            w-full
            rounded-t-[50%]
            bg-white
            sm:h-9
          "
        />

      </section>


      {/* =====================================================
          WHY BUSINESSES CHOOSE REZZIVION
      ===================================================== */}
      <section className="w-full bg-[#F7F8FA] py-20 sm:py-24">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              THE REZZIVION DIFFERENCE
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-semibold
                tracking-[-1px]
                text-[#10294B]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Why Businesses Choose Rezzivion
            </h2>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-[#667085]
                sm:text-base
              "
            >
              Practical operations, intelligent execution and measurable
              outcomes designed around the way your business works.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Accuracy */}
            <div
              className="
                group
                rounded-2xl
                border
                border-[#E1E5EB]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8B66A]
                hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F8F1E3]
                  text-[#B8924A]
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    d="M5 12.5L9.5 17L19 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                Accuracy
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Quality-focused execution with defined checks and attention
                to detail at every stage.
              </p>
            </div>


            {/* Efficiency */}
            <div
              className="
                group
                rounded-2xl
                border
                border-[#E1E5EB]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8B66A]
                hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F8F1E3]
                  text-[#B8924A]
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                Efficiency
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Streamlined workflows, standardization and faster turnaround
                without compromising quality.
              </p>
            </div>


            {/* Scalability */}
            <div
              className="
                group
                rounded-2xl
                border
                border-[#E1E5EB]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8B66A]
                hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F8F1E3]
                  text-[#B8924A]
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    d="M4 19L10 13L14 17L21 10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 10H21V15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                Scalability
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Flexible team models that can expand with changing business
                demand and operational needs.
              </p>
            </div>


            {/* Confidentiality */}
            <div
              className="
                group
                rounded-2xl
                border
                border-[#E1E5EB]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8B66A]
                hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F8F1E3]
                  text-[#B8924A]
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M8 10V7.5C8 5.01 9.79 3 12 3C14.21 3 16 5.01 16 7.5V10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="15.5"
                    r="1.2"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                Confidentiality
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Responsible handling of sensitive business, operational and
                client information.
              </p>
            </div>


            {/* Cost Optimization */}
            <div
              className="
                group
                rounded-2xl
                border
                border-[#E1E5EB]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8B66A]
                hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F8F1E3]
                  text-[#B8924A]
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    d="M12 3V21"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M16 7.5C15.2 6.5 13.8 6 12 6C9.8 6 8 7.2 8 9C8 12 11 12.5 12.5 13C14 13.5 16 14 16 16C16 18 14.2 19 12 19C10.2 19 8.7 18.4 8 17.2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                Cost Optimization
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Reduce operational overhead while maintaining process
                discipline, consistency and quality.
              </p>
            </div>


            {/* AI Enabled Operations */}
            <div
              className="
                group
                rounded-2xl
                border
                border-[#E1E5EB]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8B66A]
                hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F8F1E3]
                  text-[#B8924A]
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <rect
                    x="5"
                    y="5"
                    width="14"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M9 9H15V15H9V9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                AI-Enabled Operations
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                AI-assisted execution for defined use cases, supported by
                human review, accountability and quality control.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          OPERATIONAL PARTNER SECTION
      ===================================================== */}
      <section className="w-full bg-white py-20 sm:py-24">

        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            items-center
            gap-12
            px-6
            sm:px-10
            lg:grid-cols-2
            lg:px-16
            xl:px-24
          "
        >

          {/* Image */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#F7F8FA]">

            <img
              src="/images/why-operational-partner.png"
              alt="Rezzivion operational partnership"
              className="
                h-[420px]
                w-full
                object-cover
                object-center
                sm:h-[500px]
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
                rounded-xl
                bg-[#10294B]
                px-5
                py-4
                text-white
                shadow-lg
              "
            >
              <p className="text-xs font-semibold tracking-[2px] text-[#E3B95E]">
                OPERATIONAL PARTNERSHIP
              </p>

              <p className="mt-1 text-sm">
                Structure. Ownership. Execution.
              </p>
            </div>

          </div>


          {/* Content */}
          <div>

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              BEYOND SERVICE DELIVERY
            </span>

            <h2
              className="
                mt-4
                max-w-xl
                text-3xl
                font-semibold
                tracking-[-1px]
                text-[#10294B]
                sm:text-4xl
                lg:text-5xl
              "
            >
              An Extension of Your Operations
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-[#667085]
                sm:text-base
              "
            >
              We don't simply execute tasks. We understand the process,
              take ownership and work alongside your teams to create
              reliable operational outcomes.
            </p>


            <div className="mt-8 space-y-5">

              {/* 01 */}
              <div className="flex gap-4">

                <div
                  className="
                    mt-1
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F1E3]
                    text-sm
                    font-semibold
                    text-[#B8924A]
                  "
                >
                  01
                </div>

                <div>

                  <h3 className="font-semibold text-[#10294B]">
                    Process Ownership
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Clear ownership, documented workflows and defined
                    responsibilities.
                  </p>

                </div>
              </div>


              {/* 02 */}
              <div className="flex gap-4">

                <div
                  className="
                    mt-1
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F1E3]
                    text-sm
                    font-semibold
                    text-[#B8924A]
                  "
                >
                  02
                </div>

                <div>

                  <h3 className="font-semibold text-[#10294B]">
                    Human Expertise
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Skilled teams working with structure, accountability
                    and attention to detail.
                  </p>

                </div>
              </div>


              {/* 03 */}
              <div className="flex gap-4">

                <div
                  className="
                    mt-1
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F1E3]
                    text-sm
                    font-semibold
                    text-[#B8924A]
                  "
                >
                  03
                </div>

                <div>

                  <h3 className="font-semibold text-[#10294B]">
                    Intelligent Execution
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Technology and AI-assisted workflows applied where they
                    can improve operational performance.
                  </p>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          OPERATING APPROACH
      ===================================================== */}
      <section className="w-full bg-[#F7F8FA] py-20 sm:py-24">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              OUR OPERATING APPROACH
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-semibold
                tracking-[-1px]
                text-[#10294B]
                sm:text-4xl
                lg:text-5xl
              "
            >
              How We Turn Processes Into Performance
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base">
              A structured approach built around ownership, quality and
              continuous improvement.
            </p>

          </div>


          <div className="relative mt-14 grid gap-6 md:grid-cols-5">

            <div
              className="
                absolute
                left-[10%]
                right-[10%]
                top-8
                hidden
                h-px
                bg-[#DDB04F]
                md:block
              "
            />

            {[
              {
                number: "01",
                title: "Understand",
                text: "Map the process, requirements, risks and success measures.",
              },
              {
                number: "02",
                title: "Process",
                text: "Build clear workflows with ownership, documentation and controls.",
              },
              {
                number: "03",
                title: "Verify",
                text: "Apply quality checks, exception handling and review mechanisms.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "Execute consistently with agreed SLAs, reporting and communication.",
              },
              {
                number: "05",
                title: "Improve",
                text: "Use insights, feedback and technology to continuously improve performance.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative z-10 text-center"
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#DDB04F]
                    bg-white
                    text-sm
                    font-bold
                    text-[#B8924A]
                    shadow-sm
                  "
                >
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#10294B]">
                  {step.title}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[220px]
                    text-sm
                    leading-6
                    text-[#667085]
                  "
                >
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          AI SECTION
      ===================================================== */}
      <section className="w-full bg-white py-20 sm:py-24">

        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            items-center
            gap-12
            px-6
            sm:px-10
            lg:grid-cols-2
            lg:px-16
            xl:px-24
          "
        >

          {/* Content */}
          <div className="order-2 lg:order-1">

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              INTELLIGENT OPERATIONS
            </span>

            <h2
              className="
                mt-4
                max-w-xl
                text-3xl
                font-semibold
                tracking-[-1px]
                text-[#10294B]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Human Expertise.
              <span className="block text-[#B8924A]">
                Strengthened by AI.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-[#667085]
                sm:text-base
              "
            >
              AI can help improve speed, consistency and operational
              visibility. At Rezzivion, technology works alongside human
              expertise, with review and accountability built into the
              process.
            </p>


            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F1E3]
                    text-[#B8924A]
                  "
                >
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  AI-assisted workflows
                </span>

              </div>


              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F1E3]
                    text-[#B8924A]
                  "
                >
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  Human review and accountability
                </span>

              </div>


              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F1E3]
                    text-[#B8924A]
                  "
                >
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  Continuous improvement
                </span>

              </div>

            </div>
          </div>


          {/* Image */}
          <div
            className="
              order-1
              overflow-hidden
              rounded-[28px]
              bg-[#F7F8FA]
              lg:order-2
            "
          >
            <img
              src="/images/why-ai-enabled.png"
              alt="Human expertise strengthened by AI"
              className="
                h-[400px]
                w-full
                object-cover
                object-center
                sm:h-[500px]
              "
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        className="
          relative
          min-h-[430px]
          overflow-hidden
          bg-[#10294B]
          sm:min-h-[460px]
        "
      >

        {/* CTA Background Image */}
        <img
          src="/images/why-cta.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[55%_top]
            opacity-20
            sm:object-[center_top]
            lg:object-[center_top]
          "
        />

        {/* CTA Overlay */}
        <div className="absolute inset-0 bg-[#10294B]/45" />


        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[430px]
            max-w-[1440px]
            items-center
            justify-center
            px-6
            py-20
            text-center
            sm:min-h-[460px]
            sm:px-10
            lg:px-16
            xl:px-24
          "
        >

          <div className="w-full">

            <span className="text-xs font-bold tracking-[4px] text-[#E3B95E]">
              LET'S BUILD WHAT'S NEXT
            </span>

            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-3xl
                font-semibold
                tracking-[-1px]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Ready to Build a More Efficient Operation?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-white/70
                sm:text-base
              "
            >
              Start with one process, validate the value and scale with
              confidence.
            </p>

            <a
              href="/contact"
              className="
                mt-8
                inline-flex
                h-12
                items-center
                justify-center
                rounded-[4px]
                bg-[#B8924A]
                px-7
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#D2AD67]
                hover:shadow-lg
              "
            >
              Let's Talk
              <span className="ml-2">→</span>
            </a>

          </div>
        </div>

      </section>

    </main>
  );
};

export default WhyRezzivion;