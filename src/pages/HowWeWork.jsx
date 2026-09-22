import React from "react";

const operatingSteps = [
  {
    number: "01",
    title: "Discover",
    shortTitle: "Understand",
    description:
      "Understand process scope, volumes, systems, risks, SLAs and operational pain points.",
  },
  {
    number: "02",
    title: "Design",
    shortTitle: "Structure",
    description:
      "Define SOPs, controls, roles, quality measures, reporting and governance.",
  },
  {
    number: "03",
    title: "Transition",
    shortTitle: "Handover",
    description:
      "Enable knowledge transfer, pilot execution, stabilization and controlled handover.",
  },
  {
    number: "04",
    title: "Operate",
    shortTitle: "Execute",
    description:
      "Run the process with dedicated ownership, QA, MIS and escalation management.",
  },
  {
    number: "05",
    title: "Improve",
    shortTitle: "Evolve",
    description:
      "Identify automation, AI opportunities, productivity improvements and continuous-control enhancements.",
  },
];

const HowWeWork = () => {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#10294B] sm:min-h-[620px]">

        {/* Background Image */}
        <img
          src="/images/how-we-work-hero.png"
          alt="How Rezzivion works"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-45
            sm:object-[center_45%]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0D2342]/65" />

        {/* Gold Line */}
        <div className="absolute left-0 top-0 z-20 h-1 w-full bg-[#C99B43]" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center px-6 py-20 sm:min-h-[620px] sm:px-10 lg:px-16 xl:px-24">

          <div className="max-w-3xl">

            <span className="text-sm font-semibold tracking-[5px] text-[#E3B95E] sm:text-base">
              OUR APPROACH
            </span>

            <h1
              className="
                mt-4
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
              HOW WE
              <span className="block text-[#E3B95E]">
                WORK
              </span>
            </h1>

            <div className="mt-7 h-[3px] w-20 bg-[#E3B95E]" />

            <h2 className="mt-6 max-w-2xl text-sm font-semibold leading-7 tracking-[1.5px] text-white sm:text-base sm:tracking-[2px]">
              STRUCTURED EXECUTION. CLEAR OWNERSHIP. CONTINUOUS IMPROVEMENT.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              We follow a structured operating model designed to understand
              your processes, establish clear ownership, execute consistently
              and continuously improve performance.
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

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 h-8 w-full rounded-t-[50%] bg-white" />
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center sm:px-10">

          <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
            BUILT FOR OPERATIONAL PARTNERSHIP
          </span>

          <h2
            className="
              mx-auto
              mt-4
              max-w-4xl
              text-3xl
              font-semibold
              tracking-[-1px]
              text-[#10294B]
              sm:text-4xl
              lg:text-5xl
            "
          >
            From Process Understanding to Continuous Improvement
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Every engagement starts with understanding how your business
            operates. We then build the right structure, transition the
            process carefully, operate with clear accountability and use
            insights to continuously improve performance.
          </p>

        </div>
      </section>


      {/* =====================================================
          OPERATING MODEL
      ===================================================== */}
      <section className="w-full bg-[#F7F8FA] py-20 sm:py-24">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              OUR OPERATING MODEL
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
              A Clear Path From Discovery to Delivery
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base">
              A practical five-step model that creates clarity, accountability
              and consistency throughout the engagement.
            </p>

          </div>


          {/* Steps */}
          <div className="relative mt-16">

            {/* Connecting Line */}
            <div
              className="
                absolute
                left-[10%]
                right-[10%]
                top-9
                hidden
                h-px
                bg-[#DDB04F]
                lg:block
              "
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

              {operatingSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative z-10 text-center"
                >

                  {/* Number */}
                  <div
                    className="
                      mx-auto
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#DDB04F]
                      bg-white
                      text-base
                      font-bold
                      text-[#B8924A]
                      shadow-[0_8px_25px_rgba(13,35,66,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#FDF9F0]
                    "
                  >
                    {step.number}
                  </div>

                  <p className="mt-5 text-[11px] font-bold tracking-[2px] text-[#B8924A]">
                    {step.shortTitle}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[#10294B]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[230px] text-sm leading-6 text-[#667085]">
                    {step.description}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          DISCOVER / DESIGN
      ===================================================== */}
      <section className="w-full bg-white py-20 sm:py-24">

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-24">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#F7F8FA]">

            <img
              src="/images/how-we-work-discover.png"
              alt="Rezzivion process discovery"
              className="
                h-[400px]
                w-full
                object-cover
                sm:h-[500px]
              "
            />

            <div className="absolute bottom-5 left-5 rounded-xl bg-[#10294B] px-5 py-4 text-white shadow-lg">

              <p className="text-xs font-semibold tracking-[2px] text-[#E3B95E]">
                STEP 01 — DISCOVER
              </p>

              <p className="mt-1 text-sm">
                Understand before we execute.
              </p>

            </div>
          </div>


          {/* Content */}
          <div>

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              DISCOVER & DESIGN
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-1px] text-[#10294B] sm:text-4xl lg:text-5xl">
              Start With Understanding
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#667085] sm:text-base">
              Before execution begins, we understand the process in detail.
              This includes volumes, systems, risks, SLAs, existing workflows
              and operational pain points.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F1E3] text-sm font-bold text-[#B8924A]">
                  01
                </div>

                <div>
                  <h3 className="font-semibold text-[#10294B]">
                    Process Understanding
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Map the existing process, requirements and operational
                    dependencies.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F1E3] text-sm font-bold text-[#B8924A]">
                  02
                </div>

                <div>
                  <h3 className="font-semibold text-[#10294B]">
                    Risk & Requirement Mapping
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Identify risks, controls, SLAs and success measures.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F1E3] text-sm font-bold text-[#B8924A]">
                  03
                </div>

                <div>
                  <h3 className="font-semibold text-[#10294B]">
                    Workflow Design
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Build clear workflows with defined ownership,
                    documentation and controls.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TRANSITION & OPERATE
      ===================================================== */}
      <section className="w-full bg-[#F7F8FA] py-20 sm:py-24">

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-24">

          {/* Content */}
          <div className="order-2 lg:order-1">

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              TRANSITION & OPERATE
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-1px] text-[#10294B] sm:text-4xl lg:text-5xl">
              Move Into Execution With Control
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#667085] sm:text-base">
              Once the operating model is defined, we focus on a controlled
              transition and stable execution. Dedicated ownership, quality
              checks, MIS and escalation mechanisms help maintain consistency.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#B8924A] shadow-sm">
                  01
                </div>

                <div>
                  <h3 className="font-semibold text-[#10294B]">
                    Knowledge Transfer
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Transfer process knowledge, documentation and operating
                    requirements to the delivery team.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#B8924A] shadow-sm">
                  02
                </div>

                <div>
                  <h3 className="font-semibold text-[#10294B]">
                    Controlled Transition
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Use pilot execution and stabilization before full-scale
                    operational handover.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#B8924A] shadow-sm">
                  03
                </div>

                <div>
                  <h3 className="font-semibold text-[#10294B]">
                    Dedicated Operations
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Run the process with ownership, QA, reporting and
                    escalation management.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Image */}
          <div className="order-1 overflow-hidden rounded-[28px] bg-white lg:order-2">

            <img
              src="/images/how-we-work-operate.png"
              alt="Rezzivion operational execution"
              className="
                h-[400px]
                w-full
                object-cover
                sm:h-[500px]
              "
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          QUALITY & GOVERNANCE
      ===================================================== */}
      <section className="w-full bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              QUALITY & GOVERNANCE
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-1px] text-[#10294B] sm:text-4xl lg:text-5xl">
              Built Around Accountability
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base">
              Our delivery model combines clear ownership with quality
              controls, reporting and transparent communication.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-[#E1E5EB] bg-[#F7F8FA] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F1E3] text-[#B8924A]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                >
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
                Quality Controls
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Defined checks, review mechanisms and exception handling help
                maintain quality throughout execution.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl border border-[#E1E5EB] bg-[#F7F8FA] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F1E3] text-[#B8924A]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
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
                </svg>

              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                MIS & Reporting
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Transparent reporting provides visibility into performance,
                volumes, quality and operational trends.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl border border-[#E1E5EB] bg-[#F7F8FA] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(13,35,66,0.08)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F1E3] text-[#B8924A]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
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

              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#10294B]">
                Governance & Escalation
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Clear escalation paths and governance routines keep ownership
                and decision-making transparent.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTINUOUS IMPROVEMENT
      ===================================================== */}
      <section className="w-full bg-[#F7F8FA] py-20 sm:py-24">

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-24">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[28px]">

            <img
              src="/images/how-we-work-improve.png"
              alt="Continuous improvement at Rezzivion"
              className="
                h-[400px]
                w-full
                object-cover
                sm:h-[500px]
              "
            />

            <div className="absolute bottom-5 left-5 rounded-xl bg-[#10294B] px-5 py-4 text-white shadow-lg">

              <p className="text-xs font-semibold tracking-[2px] text-[#E3B95E]">
                STEP 05 — IMPROVE
              </p>

              <p className="mt-1 text-sm">
                Better processes. Better outcomes.
              </p>

            </div>

          </div>


          {/* Content */}
          <div>

            <span className="text-xs font-bold tracking-[4px] text-[#C99B43]">
              CONTINUOUS IMPROVEMENT
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-1px] text-[#10294B] sm:text-4xl lg:text-5xl">
              Improve What Works.
              <span className="block text-[#B8924A]">
                Transform What Can.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#667085] sm:text-base">
              Operations should evolve with your business. We use insights,
              feedback and technology to identify opportunities for
              productivity, automation and continuous-control enhancement.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B8924A] shadow-sm">
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  Productivity improvements
                </span>
              </div>


              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B8924A] shadow-sm">
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  Automation opportunities
                </span>
              </div>


              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B8924A] shadow-sm">
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  AI-enabled improvements
                </span>
              </div>


              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B8924A] shadow-sm">
                  ✓
                </div>

                <span className="text-sm font-medium text-[#243B5B]">
                  Continuous-control enhancement
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ALIGNED TO YOUR OPERATING MODEL
      ===================================================== */}
      <section className="w-full bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-[1100px] px-6 sm:px-10">

          <div className="rounded-[28px] bg-[#10294B] px-7 py-12 text-center sm:px-12 sm:py-16 lg:px-20">

            <span className="text-xs font-bold tracking-[4px] text-[#E3B95E]">
              ALIGNED TO YOUR OPERATING MODEL
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-1px] text-white sm:text-4xl">
              Designed Around the Way Your Business Works
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Engagements can be aligned to your existing SOPs, SLAs, quality
              measures, governance routines and escalation paths. This creates
              consistent execution with transparent ownership and continuous
              improvement.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">

              {[
                "SOPs",
                "SLAs",
                "Quality Measures",
                "Governance",
                "Reporting",
                "Escalation",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/5
                    px-5
                    py-2.5
                    text-xs
                    font-medium
                    text-white/85
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative min-h-[430px] overflow-hidden bg-[#10294B] sm:min-h-[460px]">

        {/* Background */}
        <img
          src="/images/how-we-work-cta.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[center_35%]
            opacity-20
            sm:object-[center_40%]
            lg:object-center
          "
        />

        {/* Overlay */}
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
              LET'S EXPLORE THE RIGHT FIT
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-1px] text-white sm:text-4xl lg:text-5xl">
              Start With One Process.
              <span className="block text-[#E3B95E]">
                Scale With Confidence.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Define the scope, validate the value and build a stronger
              operational model with Rezzivion.
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

export default HowWeWork;