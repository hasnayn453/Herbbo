export default function MissionSection() {
  return (
    <section className="bg-secondary py-16 border-b border-solid border-primary/30">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-solid border-primary/20 text-primary font-bold text-lg uppercase tracking-wider"
            >
              Our Mission
            </h2>
<<<<<<< HEAD
            <p className="text-lg text-[#0f172a]/90 leading-relaxed">
              At Herbbo, we believe true wellness begins with nature. All
              our products are herbal supplements, formulated with
=======
            <p className="text-lg text-foreground/90 leading-relaxed">
              At Herbbo, we believe true wellness begins with nature. All
              our products are DRAP-approved herbal supplements, formulated with
>>>>>>> 9cebf97 (Update branding to Herbbo, remove DR references and announcement bar text)
              laboratory-certified ingredients and crafted to the highest
              standards of purity and safety.
            </p>
            <p className="text-lg text-[#0f172a]/90 leading-relaxed">
              Our brand philosophy is simple: deliver honest, effective, and
              accessible herbal wellness to every home. From men's and women's
              health to weight management and beauty, we are committed to
              helping you achieve your best self — naturally.
            </p>
          </div>

          <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden bg-accent border border-solid border-accent/50 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="relative z-10 h-full flex flex-col p-6 lg:p-12 text-center lg:text-left">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                DRAP Registered Facility
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#0f172a]">
                Quality you can trust
              </h3>
              <p className="mt-4 text-sm text-[#0f172a]/70 leading-relaxed">
                Every batch is tested for purity, potency, and safety before it
                reaches your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
