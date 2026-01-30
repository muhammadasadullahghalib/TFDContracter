const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-5 w-5",
};

const IconWrap = ({ children }) => (
  <div className="h-10 w-10 rounded-2xl bg-[var(--pebble)] text-[var(--forest)] grid place-items-center">
    {children}
  </div>
);

const hoverCard =
  "transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl";

export default function Services() {
  const serviceList = [
    {
      title: "Concept budgeting",
      text: "Early estimating to align design and scope.",
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
      title: "Design-build delivery",
      text: "One team steering design, cost, and schedule.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 20l5-1 9-9-4-4-9 9-1 5z" />
          <path d="M14 6l4 4" />
        </svg>
      ),
    },
    {
      title: "Ground-up construction",
      text: "Structured builds with a dedicated superintendent.",
      icon: (
        <svg {...iconProps}>
          <path d="M6 21V7l6-3 6 3v13" />
          <path d="M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      title: "Luxury remodels",
      text: "High-end finishes with clean site control.",
      icon: (
        <svg {...iconProps}>
          <path d="M3 21h18" />
          <path d="M7 21V9h10v12" />
          <path d="M9 12h6" />
        </svg>
      ),
    },
    {
      title: "Commercial interiors",
      text: "Tenant improvements delivered on tight timelines.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 7h16v10H4z" />
          <path d="M8 7v10" />
          <path d="M12 7v10" />
        </svg>
      ),
    },
    {
      title: "Site logistics",
      text: "Staging plans and traffic flow that stay efficient.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 12h16" />
          <path d="M12 4v16" />
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 8l4 4-4 4" />
        </svg>
      ),
    },
    {
      title: "Permit management",
      text: "Clear documentation and inspection readiness.",
      icon: (
        <svg {...iconProps}>
          <path d="M7 4h10v16H7z" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
        </svg>
      ),
    },
    {
      title: "Commissioning",
      text: "Systems tested and balanced before turnover.",
      icon: (
        <svg {...iconProps}>
          <path d="M12 3v6" />
          <path d="M9 6h6" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      ),
    },
  ];

  const packages = [
    {
      name: "Core",
      price: "6% fee",
      detail: "Pre-con, estimating, and schedule management.",
    },
    {
      name: "Signature",
      price: "8% fee",
      detail: "Full GC with dedicated superintendent and PM.",
    },
    {
      name: "White-Glove",
      price: "10% fee",
      detail: "Daily reporting, concierge procurement, premium trades.",
    },
  ];

  const faqs = [
    {
      q: "How do you keep projects on schedule?",
      a: "We lock the critical path early, then run daily trade huddles with fast procurement.",
    },
    {
      q: "Do you work with outside architects?",
      a: "Yes. We coordinate with your architect and bring buildability feedback early.",
    },
    {
      q: "Can you manage phased builds?",
      a: "Absolutely. We specialize in active-site, phased construction with minimal disruption.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl mt-4" data-aos="fade-up" data-aos-once="false">
            We manage everything between vision and keys.
          </h1>
          <p className="mt-4 text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            From feasibility to closeout, our team keeps crews aligned, materials on site, and
            stakeholders informed.
          </p>
        </div>
        <img
          src="/images/planning.svg"
          alt="Site walkthrough"
          className="rounded-[32px] shadow-soft"
          loading="lazy"
          data-aos="fade-left"
          data-aos-once="false"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serviceList.map((service, index) => (
          <div
            key={service.title}
            className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-once="false"
          >
            <IconWrap>{service.icon}</IconWrap>
            <h3 className="text-lg mt-4">{service.title}</h3>
            <p className="text-sm text-[var(--forest)] mt-2">{service.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] bg-[var(--ink)] text-white p-10" data-aos="fade-up" data-aos-once="false">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70">Packages</p>
            <h2 className="text-3xl md:text-4xl mt-3">Choose your build intensity.</h2>
          </div>
          <p className="text-white/70 max-w-xl">
            Transparent fees, clean contracts, and defined accountability for every tier.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl border border-white/20 bg-white/10 p-6 ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-once="false"
            >
              <h3 className="text-xl">{plan.name}</h3>
              <p className="text-3xl mt-2">{plan.price}</p>
              <p className="text-sm text-white/70 mt-3">{plan.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl" data-aos="fade-up" data-aos-once="false">
          FAQ
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-once="false"
            >
              <h3 className="text-lg">{faq.q}</h3>
              <p className="mt-3 text-sm text-[var(--forest)]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
