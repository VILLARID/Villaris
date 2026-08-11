function WebAppPreview() {
  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
        <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
        <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
        <span className="ml-2 h-4 flex-1 rounded-md bg-[#F1F5F9]" />
      </div>
      <div className="mt-3 flex flex-1 gap-2">
        <div className="w-1/5 rounded-lg bg-[#F8FAFC]" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-6 w-3/4 rounded-md bg-[#EFF6FF]" />
          <div className="h-3 w-full rounded bg-[#F1F5F9]" />
          <div className="h-3 w-5/6 rounded bg-[#F1F5F9]" />
          <div className="mt-auto flex gap-2">
            <div className="h-8 w-16 rounded-md bg-[#2563EB]/10" />
            <div className="h-8 w-16 rounded-md border border-[#E2E8F0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BackendPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
        <span className="h-2.5 w-2.5 rounded-sm bg-[#E2E8F0]" />
        <span className="ml-auto h-2 w-16 rounded bg-[#E2E8F0]" />
      </div>
      <div className="flex items-center justify-center gap-1">
        <span className="h-px w-10 bg-[#CBD5E1]" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#2563EB]" />
        <span className="h-px w-10 bg-[#CBD5E1]" />
      </div>
      <div className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#10B981]" />
        <span className="h-2.5 w-2.5 rounded-sm bg-[#E2E8F0]" />
        <span className="ml-auto h-2 w-12 rounded bg-[#E2E8F0]" />
      </div>
      <div className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
        <span className="h-2.5 w-2.5 rounded-sm bg-[#E2E8F0]" />
        <span className="ml-auto h-2 w-12 rounded bg-[#E2E8F0]" />
      </div>
    </div>
  );
}

function DashboardPreview() {
  const bars = [35, 55, 40, 70, 52, 80, 62];
  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between px-1">
        <span className="h-3 w-20 rounded bg-[#F1F5F9]" />
        <span className="h-4 w-10 rounded-md bg-[#EFF6FF]" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="h-12 rounded-lg bg-[#F8FAFC] p-2">
          <span className="block h-2 w-8 rounded bg-[#E2E8F0]" />
          <span className="mt-1.5 block h-2.5 w-6 rounded bg-[#2563EB]/60" />
        </div>
        <div className="h-12 rounded-lg bg-[#F8FAFC] p-2">
          <span className="block h-2 w-8 rounded bg-[#E2E8F0]" />
          <span className="mt-1.5 block h-2.5 w-6 rounded bg-[#7C3AED]/50" />
        </div>
        <div className="h-12 rounded-lg bg-[#F8FAFC] p-2">
          <span className="block h-2 w-8 rounded bg-[#E2E8F0]" />
          <span className="mt-1.5 block h-2.5 w-6 rounded bg-[#10B981]/60" />
        </div>
      </div>
      <div className="mt-3 flex flex-1 items-end justify-between gap-1.5 px-1">
        {bars.map((height, i) => (
          <div key={i} className="w-full rounded-t bg-[#E2E8F0]" style={{ height: `${height}%` }}>
            <div
              className="w-full rounded-t bg-[#2563EB]"
              style={{ height: `${i === bars.length - 1 ? 100 : 70}%`, opacity: 0.35 + (i / bars.length) * 0.65 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[82%] w-1/3 min-w-[92px] flex-col rounded-[20px] border-4 border-[#0F172A] bg-white p-2 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
        <div className="mx-auto h-1 w-8 rounded-full bg-[#E2E8F0]" />
        <div className="mt-2.5 h-4 w-3/4 rounded-md bg-[#EFF6FF]" />
        <div className="mt-1.5 h-2.5 w-full rounded bg-[#F1F5F9]" />
        <div className="mt-1.5 h-2.5 w-5/6 rounded bg-[#F1F5F9]" />
        <div className="mt-3 grid flex-1 grid-cols-2 gap-1.5">
          <div className="rounded-md bg-[#2563EB]/10" />
          <div className="rounded-md bg-[#7C3AED]/10" />
          <div className="rounded-md bg-[#10B981]/10" />
          <div className="rounded-md bg-[#2563EB]/10" />
        </div>
        <div className="mt-2.5 h-6 rounded-lg bg-[#0F172A]" />
      </div>
    </div>
  );
}

function ProjectPreview({ category }) {
  const previews = {
    "WEB APPLICATIONS": WebAppPreview,
    "BACKEND SYSTEMS": BackendPreview,
    DASHBOARDS: DashboardPreview,
    MOBILE: MobilePreview,
  };
  const Preview = previews[category] || WebAppPreview;

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] p-4">
      <div className="h-full max-h-[220px] w-full">
        <Preview />
      </div>
    </div>
  );
}

export default ProjectPreview;
