export interface Stat {
  value: string;
  label: string;
}

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-surface px-3 py-6 text-center sm:px-6 sm:py-10"
        >
          <p className="font-display text-2xl text-accent sm:text-5xl">{stat.value}</p>
          <p className="mt-2 text-xs text-muted sm:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
