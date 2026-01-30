const hoverCard =
  "transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl";

const hoverBtn = "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg";

export default function Projects() {
  const gallery = [
    "/images/project-a.svg",
    "/images/project-b.svg",
    "/images/project-c.svg",
    "/images/project-a.svg",
    "/images/project-b.svg",
    "/images/project-c.svg",
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl mt-4" data-aos="fade-up" data-aos-once="false">
            Spaces built to feel premium and effortless.
          </h1>
          <p className="mt-4 text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            We deliver luxury hospitality, commercial, and residential builds across Texas. Each
            project is organized, clean, and client-ready.
          </p>
        </div>
        <img
          src="/images/project-a.svg"
          alt="Project overview"
          className="rounded-[32px] shadow-soft"
          loading="lazy"
          data-aos="fade-left"
          data-aos-once="false"
        />
      </section>

      <section className={`rounded-[32px] bg-white/80 p-10 shadow-soft grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center ${hoverCard}`} data-aos="fade-up" data-aos-once="false">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]">Case Study</p>
          <h2 className="text-3xl md:text-4xl mt-3">Lumen Creative HQ</h2>
          <p className="mt-4 text-[var(--forest)]">
            48,000 sq ft adaptive reuse with a four-week schedule gain and zero change orders. We
            coordinated 32 trades while the client remained operational.
          </p>
          <div className="mt-6 flex gap-3 text-sm text-[var(--sage)]">
            <span className="rounded-full bg-[var(--pebble)] px-3 py-1">Office</span>
            <span className="rounded-full bg-[var(--pebble)] px-3 py-1">Adaptive reuse</span>
            <span className="rounded-full bg-[var(--pebble)] px-3 py-1">48k sq ft</span>
          </div>
        </div>
        <img
          src="/images/project-b.svg"
          alt="Office interior"
          className="rounded-[28px] shadow-soft"
          loading="lazy"
        />
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl" data-aos="fade-up" data-aos-once="false">
          Project gallery
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`Project ${index + 1}`}
              className={`rounded-2xl shadow-soft object-cover h-60 w-full ${hoverCard}`}
              loading="lazy"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-once="false"
            />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-[var(--ink)] text-white p-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center" data-aos="fade-up" data-aos-once="false">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-white/70">Next build</p>
          <h2 className="text-3xl md:text-4xl mt-3">Ready for a smooth handoff?</h2>
          <p className="mt-4 text-white/70">
            Tell us your build goals. We will share a realistic timeline, budget, and site plan.
          </p>
        </div>
        <button className={`rounded-full bg-[var(--clay)] px-6 py-3 text-white shadow-soft ${hoverBtn}`}>
          Start a Project
        </button>
      </section>
    </div>
  );
}
