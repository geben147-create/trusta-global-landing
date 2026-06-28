import {
  HeroV5,
  MarketNumbers,
  TirtirCase,
  FbAdEvidence,
  RegulationRisk,
  TimeBombRisk,
  AiVsTrusta,
  BeforeAfter,
  TripleVerify,
  MonthlyCalendarV5,
  ChatbotFlow,
  MbaEvidence,
  UiBeforeAfterEvidence,
  FaqCtaProcess,
} from "./AppV5Sections";

/* ============================================================
   TRUSTA — version 5 (premium dark, navy + blue + gold)
   강의 상세페이지형 다크 레이아웃. 섹션은 AppV5Sections.tsx.
   ============================================================ */

const BASE = import.meta.env.BASE_URL;

const VERSIONS: { href: string; ko: string; on?: boolean }[] = [
  { href: BASE, ko: "기본" },
  { href: BASE + "?full=1", ko: "풀폭" },
  { href: BASE + "?v=3", ko: "증거" },
  { href: BASE + "?v=5", ko: "프리미엄", on: true },
];

export default function AppV5() {
  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden bg-[#07111F] font-sans text-white antialiased"
      style={{ wordBreak: "keep-all" }}
    >
      {/* ambient glows */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[160px]"
          style={{ background: "radial-gradient(closest-side, rgba(96,165,250,0.12), transparent)" }}
        />
        <div
          className="absolute top-[42%] right-[-12%] h-[520px] w-[520px] rounded-full blur-[170px]"
          style={{ background: "radial-gradient(closest-side, rgba(246,217,139,0.07), transparent)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full blur-[170px]"
          style={{ background: "radial-gradient(closest-side, rgba(56,189,248,0.06), transparent)" }}
        />
      </div>

      {/* header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#07111F]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href={BASE + "?v=5"} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.14] bg-white/[0.06] text-[#60A5FA]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
                <path d="M9.5 12l1.8 1.8L15 10" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-black tracking-widest">TRUSTA</span>
              <span className="mt-0.5 text-[8px] font-semibold tracking-wider text-[#B8C4D6]">
                PREMIUM · 검증형 콘텐츠 운영
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full border border-white/[0.12] bg-white/[0.05] p-1 sm:flex">
              {VERSIONS.map((o) => (
                <a
                  key={o.ko}
                  href={o.href}
                  className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-colors ${
                    o.on ? "bg-white text-[#07111F]" : "text-[#B8C4D6] hover:text-white"
                  }`}
                >
                  {o.ko}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="rounded-full bg-[#60A5FA] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#07111F] transition-colors hover:bg-[#7db4fb]"
            >
              무료 진단
            </a>
          </div>
        </div>
      </header>

      <main>
        <HeroV5 />
        <MarketNumbers />
        <TirtirCase />
        <FbAdEvidence />
        <RegulationRisk />
        <TimeBombRisk />
        <AiVsTrusta />
        <BeforeAfter />
        <TripleVerify />
        <MonthlyCalendarV5 />
        <ChatbotFlow />
        <MbaEvidence />
        <UiBeforeAfterEvidence />
        <div id="contact">
          <FaqCtaProcess />
        </div>
      </main>

      <footer className="border-t border-white/[0.08] px-5 py-12 text-center">
        <p className="text-sm font-black tracking-widest text-white">TRUSTA GLOBAL</p>
        <p className="mt-2 text-[12px] text-[#B8C4D6]">
          검증형 글로벌 콘텐츠 운영 · 출처 기반 1차 리스크 점검 · 현지화 · 전환 설계
        </p>
        <p className="mt-2 text-[11px] text-[#B8C4D6]/50">© 2026 TRUSTA GLOBAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
