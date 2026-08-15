function PrincipleItem({ icon: Icon, title, description }) {
  return (
    <div className="group flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] transition-transform duration-300 ease-out group-hover:scale-105 dark:bg-blue-500/15">
        <Icon aria-hidden="true" className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} />
      </span>
      <div className="min-w-0">
        <h4 className="text-[12px] font-bold tracking-[0.06em] text-[#0F172A] dark:text-[#F5F7FA]">
          {title}
        </h4>
        <p className="mt-1.5 text-[13px] leading-[1.6] text-[#64748B] dark:text-[#9BA6B5]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PrincipleItem;
