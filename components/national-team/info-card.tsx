type InfoCardProps = {
  title: string;
  description: string;
};

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <article className="flex h-full min-h-[220px] flex-col rounded-xl border border-white/10 bg-[#0c121f] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-[border-color,background-color] duration-200 hover:border-white/18 hover:bg-[#0e1626] sm:min-h-[240px] sm:p-10 lg:p-12">
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-[2rem]">
        {title}
      </h3>
      <div className="mt-4 h-0.5 w-12 bg-[#c8102e]" aria-hidden />
      <p className="mt-6 text-sm leading-[1.75] text-white/70 sm:text-base lg:leading-[1.8]">
        {description}
      </p>
    </article>
  );
}
