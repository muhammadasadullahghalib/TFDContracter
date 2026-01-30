const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-5 w-5",
};

const IconWrap = ({ children, tone = "bg-[var(--pebble)] text-[var(--forest)]" }) => (
  <div className={`h-10 w-10 rounded-2xl ${tone} grid place-items-center`}>
    {children}
  </div>
);

const hoverCard =
  "transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl";

const hoverBtn = "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg";

export default function Home() {
  const stats = [
    {
      label: "Projects delivered",
      value: "340+",
      icon: (
        <svg {...iconProps}>
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V5" />
          <path d="M17 16v-7" />
        </svg>
      ),
    },
    {
      label: "Repeat clients",
      value: "78%",
      icon: (
        <svg {...iconProps}>
          <path d="M3 12a9 9 0 0 1 15-6" />
          <path d="M18 3v6h-6" />
          <path d="M21 12a9 9 0 0 1-15 6" />
          <path d="M6 21v-6h6" />
        </svg>
      ),
    },
    {
      label: "Safety record",
      value: "0 lost days",
      icon: (
        <svg {...iconProps}>
          <path d="M12 3l7 3v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: "Avg. schedule gain",
      value: "12%",
      icon: (
        <svg {...iconProps}>
          <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "Pre-construction planning",
      text: "Budgets, schedules, and procurement aligned before kickoff.",
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l4 2" />
        </svg>
      ),
    },
    {
      title: "Design-build management",
      text: "Architects and trades coordinated under one plan.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 20l5-1 9-9-4-4-9 9-1 5z" />
          <path d="M14 6l4 4" />
        </svg>
      ),
    },
    {
      title: "Commercial renovations",
      text: "Fast renovations with minimal disruption to operations.",
      icon: (
        <svg {...iconProps}>
          <path d="M3 21h18" />
          <path d="M6 21V7h12v14" />
          <path d="M9 10h2" />
          <path d="M13 10h2" />
        </svg>
      ),
    },
    {
      title: "Luxury residential builds",
      text: "High-end finishes, tight tolerances, calm supervision.",
      icon: (
        <svg {...iconProps}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
        </svg>
      ),
    },
    {
      title: "Ground-up construction",
      text: "Start-to-finish delivery with a dedicated superintendent.",
      icon: (
        <svg {...iconProps}>
          <path d="M6 20V7l6-3 6 3v13" />
          <path d="M9 20v-6h6v6" />
        </svg>
      ),
    },
    {
      title: "Tenant improvements",
      text: "Fast, clean upgrades ready for move-in.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 8h16" />
          <path d="M4 12h16" />
          <path d="M4 16h16" />
        </svg>
      ),
    },
  ];

  const projects = [
    {
      name: "Crestline Hotel Refresh",
      location: "Austin, TX",
      image: "/images/project-a.svg",
    },
    {
      name: "Lumen Creative Office",
      location: "Plano, TX",
      image: "/images/project-b.svg",
    },
    {
      name: "Southridge Residences",
      location: "Frisco, TX",
      image: "/images/project-c.svg",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Vision",
      text: "We scope your goals, budget, and timeline.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 12c3-6 13-6 16 0" />
          <path d="M7 12a5 5 0 0 0 10 0" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Plan",
      text: "We align trades, permits, and procurement.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 4h16v16H4z" />
          <path d="M4 9h16" />
          <path d="M9 4v16" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Build",
      text: "Daily coordination with proactive updates.",
      icon: (
        <svg {...iconProps}>
          <path d="M3 21h18" />
          <path d="M6 21V9l6-3 6 3v12" />
          <path d="M12 6v15" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Deliver",
      text: "Quality walk-throughs and a clean handoff.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 12l5 5L20 6" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Mia Tran",
      role: "Hotel Owner",
      quote: "They ran the cleanest site we have ever seen. The project opened two weeks early.",
    },
    {
      name: "Aaron Wallace",
      role: "Real Estate Partner",
      quote: "Budget stayed tight, finishes are premium, and communication was daily.",
    },
    {
      name: "Jasmine Lee",
      role: "Founder, Lumen",
      quote: "Every detail was thought through. The space feels intentional and calm.",
    },
  ];

  const industries = [
    {
      title: "Hospitality",
      text: "Hotels, lounges, and guest amenities that feel finished day one.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 10h16" />
          <path d="M7 10V6h10v4" />
          <path d="M6 10v8" />
          <path d="M18 10v8" />
        </svg>
      ),
    },
    {
      title: "Workspaces",
      text: "Creative offices and HQs built for energy and flow.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 7h16v10H4z" />
          <path d="M8 7v10" />
          <path d="M12 7v10" />
          <path d="M16 7v10" />
        </svg>
      ),
    },
    {
      title: "Residential",
      text: "Luxury homes, custom kitchens, and outdoor living.",
      icon: (
        <svg {...iconProps}>
          <path d="M3 12l9-8 9 8" />
          <path d="M5 11v9h14v-9" />
        </svg>
      ),
    },
    {
      title: "Retail",
      text: "Polished storefronts, showrooms, and fast reopen timelines.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 9h16l-1 10H5L4 9z" />
          <path d="M8 9V6h8v3" />
        </svg>
      ),
    },
  ];

  const updateFeatures = [
    "Daily photo logs and notes",
    "Budget tracker with approvals",
    "Weekly schedule snapshots",
    "Live punch-list status",
  ];

  const assurances = [
    {
      title: "Open-book bids",
      text: "Line-item visibility on labor, materials, and subcontractors.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 5h10a4 4 0 0 1 4 4v10H8a4 4 0 0 0-4 4V5z" />
          <path d="M8 9h6" />
          <path d="M8 13h6" />
        </svg>
      ),
    },
    {
      title: "Warranty-ready closeout",
      text: "Clean handoff with manuals, inspections, and as-builts.",
      icon: (
        <svg {...iconProps}>
          <path d="M7 4h10v16H7z" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
        </svg>
      ),
    },
    {
      title: "Client concierge",
      text: "One PM for approvals, change orders, and site visits.",
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      ),
    },
  ];

  const badges = [
    { label: "OSHA certified crews" },
    { label: "LEED-aligned materials" },
    { label: "24/7 site security" },
    { label: "Warranty-ready closeout" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--sun)] opacity-30 blur-3xl" />
      <div className="absolute top-40 -left-32 h-72 w-72 rounded-full bg-[var(--sage)] opacity-20 blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-6">
          <p
            className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]"
            data-aos="fade-right"
            data-aos-once="false"
          >
            Premium General Contractor
          </p>
          <h1 className="text-4xl md:text-5xl" data-aos="fade-up" data-aos-once="false">
            Build bold, calm spaces that feel 10/10.
          </h1>
          <p className="text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            TFD plans, builds, and delivers high-end projects with zero chaos. From
            pre-construction to handover, every trade is aligned and every detail is inspected.
          </p>
          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-once="false">
            <button className={`rounded-full bg-[var(--ink)] px-6 py-3 text-white shadow-soft ${hoverBtn}`}>
              Book a Site Visit
            </button>
            <button className={`rounded-full border border-[var(--ink)] px-6 py-3 text-[var(--ink)] ${hoverBtn}`}>
              View Portfolio
            </button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--sun)]" /> On-time delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--clay)]" /> Transparent pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--sage)]" /> Daily progress updates
            </div>
          </div>
        </div>
        <div className="relative" data-aos="fade-left" data-aos-once="false">
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-2xl bg-[var(--clay)] opacity-80" />
          <img
            src="/images/hero.svg"
            alt="Construction team reviewing plans"
            className="relative z-10 w-full rounded-[32px] shadow-soft object-cover min-h-[320px]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-2xl bg-white/80 px-6 py-6 shadow-soft border border-white/70 ${hoverCard}`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-once="false"
          >
            <div className="flex items-center gap-3">
              <IconWrap>{item.icon}</IconWrap>
              <div>
                <p className="text-2xl">{item.value}</p>
                <p className="text-sm text-[var(--sage)] mt-1">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl mt-3" data-aos="fade-up" data-aos-once="false">
              One calm partner for every phase.
            </h2>
          </div>
          <p className="max-w-xl text-[var(--forest)]" data-aos="fade-left" data-aos-once="false">
            We handle the messy details: procurement, schedules, permits, inspections, and closeout.
            You get a focused, smooth build.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-2xl bg-white/80 p-6 border border-white/70 shadow-soft ${hoverCard}`}
              data-aos={index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "fade-right" : "fade-left"}
              data-aos-once="false"
            >
              <IconWrap tone="bg-white text-[var(--forest)]">{service.icon}</IconWrap>
              <h3 className="text-xl mt-4">{service.title}</h3>
              <p className="mt-3 text-sm text-[var(--forest)]">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl mt-3" data-aos="fade-up" data-aos-once="false">
              Projects that feel finished.
            </h2>
          </div>
          <span className="text-sm text-[var(--forest)] hidden md:block" data-aos="fade-left" data-aos-once="false">
            View all 40+ projects
          </span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`rounded-3xl overflow-hidden bg-white/80 shadow-soft ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-once="false"
            >
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl">{project.name}</h3>
                <p className="text-sm text-[var(--sage)] mt-2">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl mt-3" data-aos="fade-up" data-aos-once="false">
              A build flow that stays on schedule.
            </h2>
            <p className="mt-4 text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
              We break down the work into clear phases with tight feedback loops. Every stakeholder
              sees the same plan.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className={`rounded-2xl border border-white/70 bg-white/80 px-6 py-5 shadow-soft flex gap-4 items-center ${hoverCard}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-once="false"
              >
                <div className="text-xl text-[var(--clay)]">{item.step}</div>
                <IconWrap tone="bg-white text-[var(--forest)]">{item.icon}</IconWrap>
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm text-[var(--forest)] mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
              Reviews
            </p>
            <h2 className="text-3xl md:text-4xl mt-3" data-aos="fade-up" data-aos-once="false">
              Clients rate us 10/10.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-once="false"
            >
              <div className="flex gap-1 text-[var(--clay)]">
                <span>*****</span>
              </div>
              <p className="text-sm text-[var(--forest)] mt-3">"{item.quote}"</p>
              <div className="mt-4">
                <p className="text-base">{item.name}</p>
                <p className="text-xs text-[var(--sage)]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
              Industries
            </p>
            <h2 className="text-3xl md:text-4xl mt-3" data-aos="fade-up" data-aos-once="false">
              Built for the spaces people notice.
            </h2>
          </div>
          <span className="text-sm text-[var(--forest)] hidden md:block" data-aos="fade-left" data-aos-once="false">
            4 core verticals
          </span>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-once="false"
            >
              <IconWrap>{item.icon}</IconWrap>
              <h3 className="text-xl mt-4">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--forest)]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className={`rounded-[32px] bg-white/90 p-8 shadow-soft ${hoverCard}`} data-aos="fade-right" data-aos-once="false">
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]">Live updates</p>
            <h2 className="text-3xl md:text-4xl mt-3">Every stakeholder sees the same story.</h2>
            <p className="mt-4 text-[var(--forest)]">
              Daily updates, photo logs, and schedule snapshots keep everyone aligned and calm.
            </p>
            <div className="mt-6 grid gap-3">
              {updateFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-[var(--forest)]">
                  <IconWrap tone="bg-[var(--ink)] text-white">
                    <svg {...iconProps}>
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </IconWrap>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/images/planning.svg"
            alt="Live site updates"
            className="rounded-[32px] shadow-soft object-cover min-h-[320px]"
            loading="lazy"
            data-aos="fade-left"
            data-aos-once="false"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[32px] bg-[var(--ink)] text-white p-10" data-aos="fade-up" data-aos-once="false">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.35em] text-xs text-white/70">Clarity</p>
              <h2 className="text-3xl md:text-4xl mt-3">Clear bids. Clean closeouts.</h2>
            </div>
            <p className="max-w-xl text-white/70">
              We keep costs and scope transparent so you can make fast, confident decisions.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {assurances.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-white/20 bg-white/10 p-6 ${hoverCard}`}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-once="false"
              >
                <IconWrap tone="bg-white/10 text-white">{item.icon}</IconWrap>
                <h3 className="text-xl mt-4">{item.title}</h3>
                <p className="text-sm text-white/70 mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[32px] bg-[var(--ink)] text-white p-10 grid gap-8 lg:grid-cols-[1fr_1fr]" data-aos="fade-up" data-aos-once="false">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70">Safety</p>
            <h2 className="text-3xl md:text-4xl mt-3">Built for compliance and care.</h2>
            <p className="mt-4 text-white/70">
              Our site playbook keeps crews safe, neighbors happy, and inspectors confident.
            </p>
          </div>
          <div className="grid gap-3">
            {badges.map((badge, index) => (
              <div
                key={badge.label}
                className={`rounded-2xl border border-white/20 bg-white/10 px-6 py-4 flex items-center gap-3 ${hoverCard}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-once="false"
              >
                <IconWrap tone="bg-white/10 text-white">
                  <svg {...iconProps}>
                    <path d="M12 3l7 3v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-3z" />
                  </svg>
                </IconWrap>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className={`rounded-[32px] bg-white/90 p-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center shadow-soft ${hoverCard}`}
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]">Start now</p>
            <h2 className="text-3xl md:text-4xl mt-3">Ready to build something calm and iconic?</h2>
            <p className="mt-4 text-[var(--forest)]">
              Share your timeline and scope. We will respond with a clear plan within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button className={`rounded-full bg-[var(--clay)] px-6 py-3 text-white shadow-soft ${hoverBtn}`}>
              Schedule a Walkthrough
            </button>
            <button className={`rounded-full border border-[var(--ink)] px-6 py-3 text-[var(--ink)] ${hoverBtn}`}>
              Download Capabilities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
