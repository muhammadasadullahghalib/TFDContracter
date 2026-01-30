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

const hoverBtn = "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--sage)]" data-aos="fade-right" data-aos-once="false">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl mt-4" data-aos="fade-up" data-aos-once="false">
            Let us build your calm, premium space.
          </h1>
          <p className="mt-4 text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            Share your timeline and scope. We will respond quickly with a practical plan.
          </p>
          <div className="mt-6 space-y-2 text-[var(--forest)]" data-aos="fade-up" data-aos-once="false">
            <p>build@tfd.com</p>
            <p>(555) 013-4421</p>
            <p>15 Crescent Ave, Suite 300, Dallas, TX</p>
          </div>
        </div>
        <img
          src="/images/planning.svg"
          alt="Construction planning"
          className="rounded-[32px] shadow-soft"
          loading="lazy"
          data-aos="fade-left"
          data-aos-once="false"
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <form className={`rounded-[32px] bg-white/80 p-8 shadow-soft grid gap-4 ${hoverCard}`} data-aos="fade-right" data-aos-once="false">
          <div>
            <label className="text-sm text-[var(--sage)]">Full name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3"
            />
          </div>
          <div>
            <label className="text-sm text-[var(--sage)]">Email</label>
            <input
              type="email"
              placeholder="name@email.com"
              className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3"
            />
          </div>
          <div>
            <label className="text-sm text-[var(--sage)]">Project type</label>
            <input
              type="text"
              placeholder="Hospitality, office, residential"
              className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3"
            />
          </div>
          <div>
            <label className="text-sm text-[var(--sage)]">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us the scope and timeline"
              className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3"
            />
          </div>
          <button className={`rounded-full bg-[var(--clay)] px-6 py-3 text-white shadow-soft ${hoverBtn}`}>
            Send Request
          </button>
        </form>
        <div className={`rounded-[32px] bg-[var(--ink)] text-white p-8 shadow-soft ${hoverCard}`} data-aos="fade-left" data-aos-once="false">
          <h2 className="text-2xl">Office hours</h2>
          <p className="mt-4 text-white/70">Mon - Fri: 8:00am - 6:30pm</p>
          <p className="text-white/70">Saturday: 9:00am - 2:00pm</p>
          <p className="text-white/70">Sunday: Emergency only</p>
          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Service radius</p>
            <p className="mt-2 text-white/80">Dallas / Austin / Houston / San Antonio</p>
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-white/70">On-site visits available within 48 hours.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`} data-aos="fade-up" data-aos-once="false">
          <IconWrap>
            <svg {...iconProps}>
              <path d="M4 12l5 5L20 6" />
            </svg>
          </IconWrap>
          <h3 className="text-lg mt-4">Fast response</h3>
          <p className="mt-2 text-sm text-[var(--forest)]">
            We reply with a detailed scope checklist within 1 business day.
          </p>
        </div>
        <div className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`} data-aos="fade-up" data-aos-once="false">
          <IconWrap>
            <svg {...iconProps}>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </IconWrap>
          <h3 className="text-lg mt-4">Transparent bids</h3>
          <p className="mt-2 text-sm text-[var(--forest)]">
            Line-by-line estimates so you understand every cost.
          </p>
        </div>
        <div className={`rounded-2xl bg-white/80 p-6 shadow-soft ${hoverCard}`} data-aos="fade-up" data-aos-once="false">
          <IconWrap>
            <svg {...iconProps}>
              <circle cx="12" cy="8" r="3" />
              <path d="M5 20a7 7 0 0 1 14 0" />
            </svg>
          </IconWrap>
          <h3 className="text-lg mt-4">Dedicated PM</h3>
          <p className="mt-2 text-sm text-[var(--forest)]">
            One lead for approvals, updates, and change management.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] bg-[var(--ink)] text-white p-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center" data-aos="fade-up" data-aos-once="false">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-white/70">Ready</p>
          <h2 className="text-3xl md:text-4xl mt-3">Start with a free site assessment.</h2>
          <p className="mt-4 text-white/70">
            We will walk the site, confirm scope, and deliver a clear estimate.
          </p>
        </div>
        <button className={`rounded-full bg-[var(--clay)] px-6 py-3 text-white shadow-soft ${hoverBtn}`}>
          Book Assessment
        </button>
      </section>
    </div>
  );
}
