export interface Stat {
  value: string;
  label: string;
}

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-surface px-6 py-10 text-center"
        >
          <p className="font-display text-4xl text-accent sm:text-5xl">{stat.value}</p>
          <p className="mt-2 text-sm text-muted sm:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
