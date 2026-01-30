export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h3 className="text-2xl">TFD.</h3>
          <p className="mt-3 text-white/70">
            Premium general contractor for commercial, hospitality, and high-end residential builds.
            We deliver calm, clean, on-time projects.
          </p>
          <div className="mt-6 flex gap-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">Licensed</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">Bonded</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">Insured</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg">Contact</h4>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>15 Crescent Ave, Suite 300</li>
            <li>Dallas, TX 75201</li>
            <li>(555) 013-4421</li>
            <li>build@TFD..com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg">Working Hours</h4>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>Mon - Fri: 8:00am - 6:30pm</li>
            <li>Saturday: 9:00am - 2:00pm</li>
            <li>Sunday: Emergency only</li>
          </ul>
          <p className="mt-4 text-white/60 text-sm">We respond to all requests within 1 business day.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span>(c) 2026 TFD. General Contractor. All rights reserved.</span>
          <span>Privacy - Terms - Safety</span>
        </div>
      </div>
    </footer>
  );
}
