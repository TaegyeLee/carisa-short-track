import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
};

export function FeatureCard({ title, description, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-[#202a3a] bg-[#0d1422] p-8 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/35 sm:p-10"
    >
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <div className="mt-4 h-px w-12 bg-[#e31837]" aria-hidden />
      <p className="mt-5 flex-1 text-sm leading-relaxed text-[#9aa8bc] sm:text-base">
        {description}
      </p>
      <span className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.15em] text-[#e31837]/80 transition-colors group-hover:text-[#e31837]">
        Explore →
      </span>
    </Link>
  );
}
