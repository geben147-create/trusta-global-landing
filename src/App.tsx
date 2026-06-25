import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Send,
  HelpCircle,
  Check,
  AlertTriangle,
  CircleDot,
  Activity,
  Users,
  Layers,
  CheckCircle2,
} from "lucide-react";

import { blocks, ui, type Lang } from "./copy";
import * as IGv1 from "./Infographics";
import * as IGv3 from "./InfographicsV3";

/* ============================================================
   TRUSTA — 해외환자/글로벌 마케팅 랜딩
   · 본문은 src/copy.ts 의 검증형 카피(줄바꿈까지 원문 보존)
   · [사진] 자리는 src/Infographics.tsx 의 맞춤 인포그래픽 14종
   · word-break: keep-all 로 한글이 한 글자만 떨어지지 않도록 정렬
   ============================================================ */

/* ---------- shared text primitives ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="liquid-glass px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 w-fit">
      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
      <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase font-mono">
        {children}
      </span>
    </div>
  );
}

/** Renders a verbatim line array — one paragraph per line, breaks preserved. */
function Lines({
  items,
  className = "",
  pClass = "",
}: {
  items: string[];
  className?: string;
  pClass?: string;
}) {
  return (
    <div className={className} style={{ wordBreak: "keep-all" }}>
      {items.map((l, i) => (
        <p key={i} className={pClass}>
          {l}
        </p>
      ))}
    </div>
  );
}

/** Editorial story block: eyebrow + lead heading (line 0) + body lines (rest) beside a visual. */
function Story({
  label,
  lines,
  side,
  children,
  headingSize = "md",
}: {
  label: string;
  lines: string[];
  side: "left" | "right";
  children: React.ReactNode;
  headingSize?: "md" | "lg";
}) {
  const head = lines[0];
  const body = lines.slice(1);
  const text = (
    <motion.div
      className="flex flex-col gap-4 text-left"
      initial={{ opacity: 0, filter: "blur(10px)", y: 28 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <SectionLabel>{label}</SectionLabel>
      <h3
        className={`font-heading italic text-slate-950 font-normal ${
          headingSize === "lg" ? "text-h1" : "text-h2"
        }`}
        style={{ wordBreak: "keep-all" }}
      >
        {head}
      </h3>
      {body.length > 0 && (
        <Lines
          items={body}
          className="font-sans text-[13px] sm:text-sm text-slate-600 font-light leading-relaxed space-y-1"
        />
      )}
    </motion.div>
  );

  const visual = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
    >
      <div className="w-full max-w-[560px] mx-auto">{children}</div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {side === "left" ? (
        <>
          <div className="order-2 lg:order-1">{visual}</div>
          <div className="order-1 lg:order-2">{text}</div>
        </>
      ) : (
        <>
          {text}
          {visual}
        </>
      )}
    </div>
  );
}

function SectionShell({
  id,
  children,
  tint = "from-[#FAFCFF]/25 to-[#F5FAFC]/10",
}: {
  id: string;
  children: React.ReactNode;
  tint?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-100/60 bg-gradient-to-b ${tint} backdrop-blur-[2px]`}
    >
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </section>
  );
}

/* ---------- nav ---------- */

const NAV: { id: string; ko: string; en: string }[] = [
  { id: "home", ko: "홈", en: "Home" },
  { id: "proof", ko: "신뢰 철학", en: "Philosophy" },
  { id: "services", ko: "서비스 흐름", en: "Services" },
  { id: "faq", ko: "FAQ", en: "FAQ" },
  { id: "packages", ko: "패키지", en: "Packages" },
  { id: "process", ko: "진행 방식", en: "Process" },
  { id: "contact", ko: "문의", en: "Contact" },
];
const SPY_IDS = ["home", "proof", "services", "faq", "ops", "packages", "process", "contact"];

/* ---------- illustrative risk-compare examples (clearly marked 예시) ---------- */

const RISK_EXAMPLES: {
  tag: { ko: string; en: string };
  before: { ko: string; en: string };
  after: { ko: string; en: string };
}[] = [
  {
    tag: { ko: "효과 단정형 → 신뢰형", en: "Result-certainty → Trust-based" },
    before: {
      ko: "“한 번에 확실한 효과, 부작용 없이 즉시 개선”",
      en: "“Guaranteed results in one go, immediate improvement with no side effects”",
    },
    after: {
      ko: "“개인의 상태에 따라 결과는 달라질 수 있어, 사전 상담을 먼저 안내해 드립니다.”",
      en: "“Results may vary by individual, so we guide you to a prior consultation first.”",
    },
  },
  {
    tag: { ko: "안전 과장형 → 안심형", en: "Safety-overstatement → Reassurance" },
    before: {
      ko: "“누구나 100% 안전하게 평생 유지되는 결과”",
      en: "“100% safe for everyone, results that last forever”",
    },
    after: {
      ko: "“시술 전 주의사항과 회복 과정을 충분히 안내하고 함께 관리해 드립니다.”",
      en: "“We fully explain precautions and the recovery process and manage it together.”",
    },
  },
];

/* ============================================================ */

export default function App() {
  const [lang, setLang] = useState<Lang>("ko");
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [riskTab, setRiskTab] = useState(0);
  const [calc, setCalc] = useState(50);
  const [version, setVersion] = useState<"v1" | "v2" | "v3">(() => {
    if (typeof window === "undefined") return "v1";
    const q = new URLSearchParams(window.location.search);
    if (q.get("v") === "3" || q.get("v") === "v3") return "v3";
    if (q.get("full") === "1" || q.get("layout") === "full" || q.get("v") === "2") return "v2";
    return "v1";
  });
  const scrollVideoRef = useRef<HTMLVideoElement | null>(null);

  const t = ui[lang];
  const B = (id: string): string[] => blocks[id][lang];

  const fullWidth = version === "v2";
  const IG = version === "v3" ? IGv3 : IGv1;

  const chooseVersion = (v: "v1" | "v2" | "v3") => {
    setVersion(v);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete("full");
      url.searchParams.delete("layout");
      if (v === "v1") url.searchParams.delete("v");
      else if (v === "v2") url.searchParams.set("v", "2");
      else url.searchParams.set("v", "3");
      window.history.replaceState({}, "", url.toString());
    } catch {
      /* noop */
    }
  };

  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const scrollTo = (id: string) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    notify(`${t.contact.sent}: ${emailInput}`);
    setEmailInput("");
  };

  // background video keep-alive
  useEffect(() => {
    const v = scrollVideoRef.current;
    if (!v) return;
    v.loop = true;
    v.muted = true;
    const play = () => v.play().catch(() => {});
    play();
    const resume = () => {
      if (v.paused) play();
    };
    window.addEventListener("scroll", resume, { passive: true });
    window.addEventListener("click", resume);
    return () => {
      window.removeEventListener("scroll", resume);
      window.removeEventListener("click", resume);
    };
  }, []);

  // scrollspy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 240;
      for (const id of SPY_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveLink(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hero = B("b1_hero");
  const faqIds = ["b11_faq1", "b12_faq2", "b13_faq3", "b14_faq4"];
  const who = B("b18_whofor");
  const whoGroups = [[1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]];
  const pkg = B("b20_packages");
  const pkgGroups: { name: number; body: number[]; tag: string }[] = [
    { name: 0, body: [1], tag: "STARTER" },
    { name: 2, body: [3], tag: "GROWTH" },
    { name: 4, body: [5, 6], tag: "PREMIUM" },
  ];
  const proc = B("b21_process");
  const procSteps = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  return (
    <div
      className={`relative isolate min-h-screen w-full bg-[#FAFCFF] overflow-x-hidden flex flex-col font-sans text-slate-800 scroll-smooth leading-relaxed${
        fullWidth ? " layout-full" : ""
      }${version === "v3" ? " layout-v3" : ""}`}
      style={{ wordBreak: "keep-all" }}
    >
      {/* background video */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={scrollVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="h-full w-full object-cover opacity-100 filter contrast-[1.06] brightness-[1.03] saturate-[1.05]"
        >
          <source
            src="https://6xt6pazt5tu5q0a1.public.blob.vercel-storage.com/aircraft-pU8XkMHEncA8UCTE75vcauP3fACfFo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* ambient backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] rounded-full bg-gradient-to-b from-[#EEF6FF] via-[#EEF6FF]/35 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[150vh] right-[-15vw] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-[#FEFCE8]/30 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[320vh] left-[-20vw] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#F0FDFA]/30 to-[#EEF5FC]/20 blur-[140px] pointer-events-none -z-10" />

      {/* header */}
      <header className="fixed top-4 left-0 right-0 mx-auto w-full px-4 max-w-7xl z-50">
        <nav className="flex items-center justify-between w-full p-2 pl-3 pr-3 sm:pr-6 rounded-full bg-white/55 backdrop-blur-lg border border-white/60 shadow-lg">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <span className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center shadow-inner">
              <Shield className="w-5 h-5 text-slate-950" />
            </span>
            <span className="flex flex-col text-left leading-none select-none">
              <span className="text-[12px] font-black tracking-widest text-slate-950">
                {t.brand.name}
              </span>
              <span className="text-[8px] font-semibold tracking-wider text-slate-400 mt-0.5">
                {t.brand.sub}
              </span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1 px-1.5 py-1 rounded-full bg-white/50 border border-white/60">
            {NAV.map((s) => {
              const active = activeLink === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    active ? "text-slate-950" : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navTab"
                      className="absolute inset-0 bg-white shadow-sm -z-10 border border-slate-100 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {lang === "ko" ? s.ko : s.en}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full bg-white/60 border border-white/70 p-0.5">
              <button
                onClick={() => setLang("ko")}
                className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest cursor-pointer ${
                  lang === "ko" ? "bg-slate-950 text-white shadow-sm" : "text-slate-400 hover:text-slate-900"
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest cursor-pointer ${
                  lang === "en" ? "bg-slate-950 text-white shadow-sm" : "text-slate-400 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            <div className="hidden md:flex items-center rounded-full bg-white/60 border border-white/70 p-0.5">
              {([
                { v: "v1", ko: "기본", en: "BOXED", t: lang === "ko" ? "기본 (중앙 정렬)" : "Boxed" },
                { v: "v2", ko: "풀폭", en: "FULL", t: lang === "ko" ? "풀폭 (좌우 여백 없음)" : "Full width" },
                { v: "v3", ko: "증거", en: "V3", t: lang === "ko" ? "버전3 (증거카드·흰 배경)" : "Version 3 (evidence)" },
              ] as const).map((o) => (
                <button
                  key={o.v}
                  onClick={() => chooseVersion(o.v)}
                  className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest cursor-pointer ${
                    version === o.v ? "bg-slate-950 text-white shadow-sm" : "text-slate-400 hover:text-slate-900"
                  }`}
                  title={o.t}
                >
                  {lang === "ko" ? o.ko : o.en}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-slate-950 text-white text-[10px] font-bold tracking-widest uppercase items-center gap-1 hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
            >
              {t.cta}
              <ArrowUpRight className="w-3 h-3 text-slate-200 stroke-[2.5px]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/60 hover:bg-white border border-white/70 shadow-sm flex items-center justify-center text-slate-700 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 mx-2 liquid-glass-strong rounded-3xl p-5 flex flex-col gap-2 shadow-xl border border-white/80 lg:hidden z-40"
            >
              {NAV.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-4 py-2.5 text-left rounded-xl text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeLink === s.id ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-white/40"
                  }`}
                >
                  {lang === "ko" ? s.ko : s.en}
                </button>
              ))}
              <div className="mt-1 px-1 py-1 rounded-xl bg-white/50 border border-slate-100 flex items-center gap-1">
                {([
                  { v: "v1", ko: "기본", en: "BOXED" },
                  { v: "v2", ko: "풀폭", en: "FULL" },
                  { v: "v3", ko: "증거", en: "V3" },
                ] as const).map((o) => (
                  <button
                    key={o.v}
                    onClick={() => {
                      chooseVersion(o.v);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-2 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase cursor-pointer ${
                      version === o.v ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-white/60"
                    }`}
                  >
                    {lang === "ko" ? o.ko : o.en}
                  </button>
                ))}
              </div>
              <div className="mt-2 pt-3 border-t border-slate-100/60 flex items-center justify-between">
                <button
                  onClick={() => {
                    setLang(lang === "ko" ? "en" : "ko");
                    setMobileMenuOpen(false);
                  }}
                  className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase cursor-pointer"
                >
                  {t.langSwitch}
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase cursor-pointer"
                >
                  {t.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -15, scale: 0.9, x: "-50%" }}
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-slate-950/95 text-white text-[11px] font-semibold px-5 py-2.5 rounded-full shadow-lg border border-slate-800/80 flex items-center gap-2 z-50 backdrop-blur-md max-w-[90vw] text-center"
          >
            <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse flex-shrink-0" />
            <span className="tracking-wide">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO (b1) ================= */}
      <section
        id="home"
        className="relative z-10 w-full min-h-[100dvh] flex items-center justify-center px-4 md:px-8 pt-32 pb-16"
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <motion.div
              className="liquid-glass pl-1.5 pr-4 py-1.5 rounded-full inline-flex items-center gap-2.5 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <span className="bg-[#d4af37] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-widest uppercase">
                TEAM
              </span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wide flex items-center gap-1">
                {t.badge}
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
            </motion.div>

            <h1
              className="font-heading italic text-slate-950 font-normal text-display"
              style={{ wordBreak: "keep-all" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {hero[0]}
              </motion.span>
              <motion.span
                className="block text-[#d4af37]"
                initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {hero[1]}
              </motion.span>
            </h1>

            <Lines
              items={hero.slice(2)}
              className="font-sans text-[13px] sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl space-y-0.5"
            />

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="liquid-glass-strong px-7 py-3 rounded-full text-[11px] font-black text-slate-950 tracking-widest flex items-center gap-1.5 hover:bg-white hover:shadow-md transition-all active:scale-95 cursor-pointer uppercase border border-white"
              >
                {t.primary}
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5px]" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="px-5 py-3 rounded-full text-[10px] font-bold text-slate-600 hover:text-slate-950 tracking-widest flex items-center gap-2 active:scale-95 transition-all cursor-pointer uppercase"
              >
                <span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center bg-white/60">
                  <ArrowRight className="w-2.5 h-2.5 text-slate-600" />
                </span>
                {t.secondary}
              </button>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-6 w-full max-w-[560px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <IG.GlobalReachMap lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* ================= PROOF (b2, b3, b4) ================= */}
      <SectionShell id="proof" tint="from-[#FAFCFF]/30 to-[#F5FAFC]/10">
        <div className="space-y-20">
          <Story label={t.sectionLabels.proof} lines={B("b2_translation")} side="right">
            <IG.TranslationVsLocalization lang={lang} />
          </Story>

          <Story label={t.sectionLabels.proof} lines={B("b3_roles")} side="left">
            <IG.SentenceRoleSplit lang={lang} />
          </Story>

          {/* b4 + interactive risk comparator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              className="flex flex-col gap-4 text-left"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel>{t.sectionLabels.risk}</SectionLabel>
              <h3
                className="font-heading italic text-slate-950 text-h2"
                style={{ wordBreak: "keep-all" }}
              >
                {B("b4_compare")[0]}
              </h3>
              <Lines
                items={B("b4_compare").slice(1)}
                className="font-sans text-[13px] sm:text-sm text-slate-600 font-light leading-relaxed space-y-1"
              />
            </motion.div>

            <div className="rounded-[2.5rem] bg-slate-900 p-6 sm:p-7 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#d4af37]/8 blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div>
                  <span className="text-[9px] font-black text-[#d4af37] tracking-widest uppercase font-mono block">
                    {t.riskWidget.title}
                  </span>
                  <p className="text-[11px] text-slate-400 font-light mt-1 max-w-xs leading-relaxed">
                    {t.riskWidget.desc}
                  </p>
                </div>
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10 scale-90 shrink-0">
                  {RISK_EXAMPLES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setRiskTab(i)}
                      className={`px-3 py-1 rounded-full text-[9px] font-black uppercase transition-all cursor-pointer ${
                        riskTab === i ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Ex {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={riskTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    {RISK_EXAMPLES[riskTab].tag[lang]}
                  </span>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative">
                    <span className="absolute top-3 right-4 text-[8px] font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {t.riskWidget.before}
                    </span>
                    <p className="text-xs text-red-300 font-bold leading-relaxed pr-16" style={{ wordBreak: "keep-all" }}>
                      {RISK_EXAMPLES[riskTab].before[lang]}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 relative">
                    <span className="absolute top-3 right-4 text-[8px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {t.riskWidget.after}
                    </span>
                    <p className="text-xs text-slate-100 font-bold leading-relaxed pr-16" style={{ wordBreak: "keep-all" }}>
                      {RISK_EXAMPLES[riskTab].after[lang]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ================= SERVICES (b5–b10) ================= */}
      <SectionShell id="services" tint="from-[#F5FAFC]/25 to-[#FAFCFF]/15">
        <div className="space-y-20">
          <Story label={t.sectionLabels.reality} lines={B("b5_redocean")} side="left">
            <IG.RedOceanSaturation lang={lang} />
          </Story>
          <Story label={t.sectionLabels.reality} lines={B("b6_redesign")} side="right" headingSize="lg">
            <IG.RedesignMapping lang={lang} />
          </Story>
          <Story label={t.sectionLabels.reality} lines={B("b7_funnel")} side="left">
            <IG.ConversionFunnel lang={lang} />
          </Story>
          <Story label={t.sectionLabels.services} lines={B("b8_multichannel")} side="right" headingSize="lg">
            <IG.MultiChannelDiffusion lang={lang} />
          </Story>
          <Story label={t.sectionLabels.search} lines={B("b9_search")} side="left">
            <IG.SearchToInquiry lang={lang} />
          </Story>
          <Story label={t.sectionLabels.services} lines={B("b10_landing")} side="right">
            <IG.LandingReconstruction lang={lang} />
          </Story>
        </div>
      </SectionShell>

      {/* ================= FAQ (b11–b14) + GATE (b15) ================= */}
      <SectionShell id="faq" tint="from-[#F1F5F9]/20 to-[#FAFCFF]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <SectionLabel>{t.sectionLabels.faq}</SectionLabel>
            <h3 className="font-heading italic text-slate-950 text-h1">
              {lang === "ko" ? "자주 묻는 질문" : "Frequently asked questions"}
            </h3>
            <p className="text-[13px] text-slate-600 font-light leading-relaxed max-w-sm">
              {lang === "ko"
                ? "현지어, 기존 자료, 의료·화장품 표현, 일반 AI와의 차이까지 — 자주 묻는 4가지를 먼저 풀어드립니다."
                : "Local language, existing materials, medical/cosmetics claims, and how we differ from ordinary AI — the four most-asked questions, answered."}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqIds.map((id, idx) => {
              const lines = B(id);
              const open = faqOpen === idx;
              return (
                <div key={id} className="rounded-2xl bg-white/80 border border-slate-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setFaqOpen(open ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  >
                    <span className="flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] font-bold text-slate-950 leading-snug" style={{ wordBreak: "keep-all" }}>
                        {lines[0]}
                      </span>
                    </span>
                    <span className={`text-slate-400 text-lg leading-none transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <Lines
                          items={lines.slice(1)}
                          className="px-5 pb-5 pl-12 text-xs text-slate-600 leading-relaxed font-light space-y-1"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <Story label={t.sectionLabels.gate} lines={B("b15_gate")} side="left" headingSize="lg">
            <IG.HumanGate lang={lang} />
          </Story>
        </div>
      </SectionShell>

      {/* ================= OPS (b16, b17) ================= */}
      <SectionShell id="ops" tint="from-[#FAFCFF]/25 to-[#E8EEF5]/20">
        <div className="space-y-20">
          <Story label={t.sectionLabels.ops} lines={B("b16_calendar")} side="right">
            <IG.MonthlyCalendar lang={lang} />
          </Story>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col gap-4 text-left"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel>{t.sectionLabels.ops}</SectionLabel>
              <h3 className="font-heading italic text-slate-950 text-h2" style={{ wordBreak: "keep-all" }}>
                {B("b17_improve")[0]}
              </h3>
              <Lines
                items={B("b17_improve").slice(1)}
                className="font-sans text-[13px] sm:text-sm text-slate-600 font-light leading-relaxed space-y-1"
              />

              {/* volume simulator (kept interactive widget) */}
              <div className="mt-3 rounded-3xl bg-white border border-slate-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
                    {t.calc.eyebrow}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-950">{t.calc.title}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed mt-1" style={{ wordBreak: "keep-all" }}>
                  {t.calc.desc}
                </p>
                <div className="flex justify-between font-mono text-[11px] text-slate-500 mt-4">
                  <span>{t.calc.min}</span>
                  <span className="font-bold text-slate-950">
                    {calc}
                    {t.calc.unit}
                  </span>
                  <span>{t.calc.max}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={120}
                  step={5}
                  value={calc}
                  onChange={(e) => setCalc(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-950 mt-2"
                />
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 mt-4">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                      {t.calc.out1}
                    </span>
                    <span className="text-2xl font-black text-slate-950">{calc}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                      {t.calc.out2}
                    </span>
                    <span className="text-[13px] font-black text-emerald-600 leading-tight block mt-1" style={{ wordBreak: "keep-all" }}>
                      {t.calc.out2v}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <IG.PerformanceDashboard lang={lang} />
            </motion.div>
          </div>
        </div>
      </SectionShell>

      {/* ================= PACKAGES (b18, b19, b20) ================= */}
      <SectionShell id="packages" tint="from-[#F3F6FA]/25 to-[#FAFCFF]/15">
        <div className="space-y-20">
          {/* b18 who-for */}
          <div>
            <motion.div
              className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>{t.sectionLabels.whofor}</SectionLabel>
              <h3 className="font-heading italic text-slate-950 text-h1" style={{ wordBreak: "keep-all" }}>
                {who[0]}
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {whoGroups.map((g, i) => (
                <motion.div
                  key={i}
                  className="rounded-3xl bg-white/80 border border-slate-100 p-6 shadow-sm flex gap-3"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >
                  <span className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  </span>
                  <div className="space-y-0.5" style={{ wordBreak: "keep-all" }}>
                    {g.map((li) => (
                      <p key={li} className="text-[13px] font-semibold text-slate-700 leading-snug">
                        {who[li]}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* b19 one system */}
          <Story label={t.sectionLabels.packages} lines={B("b19_onesystem")} side="left" headingSize="lg">
            <IG.OneSystemHub lang={lang} />
          </Story>

          {/* b20 package tiers */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {pkgGroups.map((p, i) => {
                const featured = i === 2;
                return (
                  <motion.div
                    key={i}
                    className={`rounded-[2.25rem] p-7 flex flex-col justify-between border ${
                      featured ? "bg-slate-950 text-white border-slate-950 shadow-lg" : "bg-white border-slate-100 shadow-sm"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                  >
                    <div>
                      <span className={`text-[9px] font-black tracking-widest uppercase font-mono ${featured ? "text-[#d4af37]" : "text-slate-400"}`}>
                        {p.tag}
                      </span>
                      <h4 className={`text-xl font-black mt-2 ${featured ? "text-white" : "text-slate-950"}`}>
                        {pkg[p.name]}
                      </h4>
                      <div className="mt-3 space-y-1.5" style={{ wordBreak: "keep-all" }}>
                        {p.body.map((li) => (
                          <p key={li} className={`text-[13px] leading-relaxed ${featured ? "text-slate-200" : "text-slate-600"}`}>
                            {pkg[li]}
                          </p>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => scrollTo("contact")}
                      className={`mt-6 w-full py-3 rounded-full text-[11px] font-black tracking-widest uppercase transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${
                        featured ? "bg-[#d4af37] text-slate-950 hover:bg-[#c49e27]" : "bg-slate-950 text-white hover:bg-slate-800"
                      }`}
                    >
                      {t.cta}
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ================= PROCESS (b21, b22) ================= */}
      <SectionShell id="process" tint="from-[#FAFCFF]/20 to-[#E4ECF5]/15">
        <div className="space-y-20">
          {/* b21 process steps */}
          <div>
            <motion.div
              className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>{t.sectionLabels.process}</SectionLabel>
              <h3 className="font-heading italic text-slate-950 text-h1" style={{ wordBreak: "keep-all" }}>
                {proc[0]}
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
              {procSteps.map((g, i) => (
                <motion.div
                  key={i}
                  className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm flex flex-col"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="text-[10px] font-black text-[#d4af37] font-mono tracking-widest mb-3">
                    STEP 0{i + 1}
                  </span>
                  <div className="space-y-1" style={{ wordBreak: "keep-all" }}>
                    {g.map((li, k) => (
                      <p
                        key={li}
                        className={k === 0 ? "text-[14px] font-black text-slate-950 leading-snug mb-1" : "text-[12px] font-light text-slate-500 leading-relaxed"}
                      >
                        {proc[li]}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* b22 closing-encouragement */}
          <Story label={t.sectionLabels.closing} lines={B("b22_small")} side="right" headingSize="lg">
            <IG.GrowthLadderClosing lang={lang} />
          </Story>
        </div>
      </SectionShell>

      {/* ================= CONTACT (b23) + CLOSING (b24) ================= */}
      <section id="contact" className="relative w-full py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAFCFF]/20 to-[#E5EDF7]/15 backdrop-blur-[2px]">
        <div className="max-w-3xl mx-auto w-full">
          <div className="rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute right-[-6vw] top-[-6vw] w-56 h-56 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />
            <div className="absolute left-[-6vw] bottom-[-6vw] w-56 h-56 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 text-center">
              <div className="flex justify-center">
                <SectionLabel>{lang === "ko" ? "무료 진단 요청" : "Free Audit"}</SectionLabel>
              </div>
              <Lines
                items={B("b23_cta")}
                className="font-heading italic text-white text-[15px] sm:text-base md:text-[19px] leading-[1.55] space-y-0.5 max-w-2xl mx-auto"
                pClass="text-balance"
              />

              <form onSubmit={submitContact} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={t.contact.placeholder}
                  aria-label={t.contact.formLabel}
                  className="flex-grow bg-white/5 border border-white/15 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#d4af37] text-slate-950 text-[11px] font-black tracking-widest uppercase hover:bg-[#c49e27] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 flex-shrink-0"
                >
                  {t.contact.button}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="pt-5 border-t border-white/10 max-w-xl mx-auto">
                <Lines
                  items={B("b24_closing")}
                  className="text-[12px] sm:text-sm text-slate-300 font-light leading-relaxed space-y-0.5"
                />
                <a
                  href={`mailto:${t.contact.email}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-white hover:text-[#d4af37] underline underline-offset-4 decoration-[#d4af37]/40 font-bold text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 bg-slate-950 text-slate-500 py-12 px-6 text-center text-xs space-y-2">
        <div className="max-w-6xl mx-auto" style={{ wordBreak: "keep-all" }}>
          <p className="font-black tracking-widest text-slate-200 mb-1">{t.footer.brand}</p>
          <p className="text-slate-400">{t.footer.tagline}</p>
          <p className="text-[10px] text-slate-600 mt-2">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
