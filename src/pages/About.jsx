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

export default function About() {
  const values = [
    {
      title: "Precision",
      text: "Tight scopes, tight budgets, and clean handoffs.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 12h16" />
          <path d="M12 4v16" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: "Calm Sites",
      text: "Organized staging, quiet coordination, zero drama.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 14a8 8 0 0 1 16 0" />
          <path d="M7 14a5 5 0 0 1 10 0" />
        </svg>
      ),
    },
    {
      title: "Craft",
      text: "Luxury finishes with detail-first supervision.",
      icon: (
        <svg {...iconProps}>
          <path d="M4 20l5-1 9-9-4-4-9 9-1 5z" />
          <path d="M14 6l4 4" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: "Elena Reyes",
      role: "Principal Builder",
      image: "/images/portrait-01.svg",
    },
    {
      name: "Marco Patel",
      role: "Pre-Construction Lead",
      image: "/images/portrait-02.svg",
    },
    {
      name: "Priya Dawson",
      role: "Field Operations",
      image: "/images/portrait-03.svg",
    },
  ];

  const milestones = [
    { year: "2008", text: "Founded as a boutique commercial GC." },
    { year: "2015", text: "Expanded into hospitality and residential." },
    { year: "2020", text: "Introduced digital site reporting for clients." },
    { year: "2024", text: "Delivered 70+ high-end projects with 0 delays." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
            About
          </p>
          <h1 className="text-4xl md:text-5xl mt-4" data-aos="fade-up" data-aos-once="false">
            We build spaces that feel inevitable.
          </h1>
          <p className="mt-4 text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            TFD is a general contractor focused on elegant execution. We pair the calm of a
            boutique firm with the power of a full-scale builder.
          </p>
        </div>
        <img
          src="/images/team.svg"
          alt="Construction meeting"
          className="rounded-[32px] shadow-soft"
          loading="lazy"
          data-aos="fade-left"
          data-aos-once="false"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={value.title}
            className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-once="false"
          >
            <IconWrap>{value.icon}</IconWrap>
            <h3 className="text-xl mt-4">{value.title}</h3>
            <p className="mt-3 text-sm text-[var(--forest)]">{value.text}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl" data-aos="fade-up" data-aos-once="false">
          Leadership crew
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`rounded-3xl bg-white/80 overflow-hidden shadow-soft ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-once="false"
            >
              <img src={member.image} alt={member.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-sm text-[var(--sage)]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-[var(--ink)] text-white p-10" data-aos="fade-up" data-aos-once="false">
        <h2 className="text-3xl md:text-4xl">Milestones</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {milestones.map((item, index) => (
            <div
              key={item.year}
              className={`rounded-2xl border border-white/20 px-6 py-4 ${hoverCard}`}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-once="false"
            >
              <p className="text-lg">{item.year}</p>
              <p className="text-sm text-white/70 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
