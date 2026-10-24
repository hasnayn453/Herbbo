const TrustBadge = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-lg border border-solid border-white/10 backdrop-blur-sm">
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-tighter">
      ✓
    </span>
    <span className="text-sm font-medium text-white/90">{label}</span>
  </div>
);

export default function TrustBanner() {
  const badges = [
    "100% Organic Supplements",
    "Trusted by Thousands of Customers",
    "Cash On Delivery",
  ];

  return (
    <section className="w-full bg-primary py-6 border-b border-solid border-secondary/50">
      <div className="px-4 mx-auto max-w-7xl overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex flex-nowrap gap-8 sm:gap-12 md:gap-16 animate-[marquee_20s_linear_infinite]">
          {badges.map((badge, i) => (
            <TrustBadge key={i} label={badge} />
          ))}
          {badges.map((badge, i) => (
            <TrustBadge key={`dup-${i}`} label={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
