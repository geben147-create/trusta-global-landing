// AUTO-GENERATED — TRUSTA infographics (inline-SVG React components). One per [사진] slot.
import type { ReactElement } from "react";
import { motion, AnimatePresence } from "motion/react";

export function GlobalReachMap({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "GLOBAL REACH",
          title: "전 세계에서 검색하고, 비교하고, 문의합니다",
          sub: "한국을 중심으로 이어진 5개 시장. 해외 고객이 직접 검색·비교·문의하며 트러스타를 만납니다.",
          hub: "한국",
          hubSub: "KOREA · HUB",
          verbs: ["검색", "비교", "문의"],
          legend: "고객 여정",
          nodes: [
            { ko: "일본", en: "JAPAN" },
            { ko: "중국", en: "CHINA" },
            { ko: "동남아", en: "SEA" },
            { ko: "미국", en: "US" },
            { ko: "유럽", en: "EUROPE" },
          ],
        }
      : {
          eyebrow: "GLOBAL REACH",
          title: "Customers worldwide search, compare, and inquire",
          sub: "Five markets linked through one Korean hub. Overseas customers meet TRUSTA as they search, compare, and inquire.",
          hub: "KOREA",
          hubSub: "KOREA · HUB",
          verbs: ["SEARCH", "COMPARE", "INQUIRE"],
          legend: "CUSTOMER JOURNEY",
          nodes: [
            { ko: "JAPAN", en: "JAPAN" },
            { ko: "CHINA", en: "CHINA" },
            { ko: "SEA", en: "SEA" },
            { ko: "US", en: "US" },
            { ko: "EUROPE", en: "EUROPE" },
          ],
        };

  const cx = 200;
  const cy = 150;
  const spokes = [
    { x: 60, y: 56 },
    { x: 340, y: 56 },
    { x: 36, y: 150 },
    { x: 90, y: 256 },
    { x: 310, y: 256 },
  ];

  const curve = (p: { x: number; y: number }) => {
    const mx = (cx + p.x) / 2;
    const my = (cy + p.y) / 2 - 22;
    return `M ${cx} ${cy} Q ${mx} ${my} ${p.x} ${p.y}`;
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between gap-4 mb-1">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
          {L.legend}
        </span>
      </div>

      <h3
        className="text-base sm:text-lg font-black text-slate-950 leading-snug mb-1.5 max-w-md"
        style={{ wordBreak: "keep-all" }}
      >
        {L.title}
      </h3>
      <p
        className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-5 max-w-md"
        style={{ wordBreak: "keep-all" }}
      >
        {L.sub}
      </p>

      <div className="relative">
        <svg viewBox="0 0 400 312" className="w-full h-auto" aria-hidden="true">
          <defs>
            <radialGradient id="grm-hub" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fffbe9" />
              <stop offset="100%" stopColor="#f8f4e3" />
            </radialGradient>
            <linearGradient id="grm-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {spokes.map((p, i) => (
            <path
              key={`path-${i}`}
              d={curve(p)}
              fill="none"
              stroke="url(#grm-line)"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeDasharray="2 5"
            />
          ))}

          {spokes.map((p, i) => (
            <motion.circle
              key={`dot-${i}`}
              r={3}
              fill="#d4af37"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeInOut",
              }}
            >
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                begin={`${i * 0.35}s`}
                path={curve(p)}
              />
            </motion.circle>
          ))}

          {spokes.map((p, i) => {
            const tx = (cx + p.x) / 2;
            const ty = (cy + p.y) / 2 - 22;
            return (
              <text
                key={`verb-${i}`}
                x={tx}
                y={ty + 3}
                textAnchor="middle"
                className="font-mono"
                fontSize="7"
                fontWeight="700"
                letterSpacing="0.5"
                fill="#94a3b8"
              >
                {L.verbs[i % 3]}
              </text>
            );
          })}

          {spokes.map((p, i) => (
            <g key={`node-${i}`}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={20}
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth={1.5}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              />
              <circle cx={p.x} cy={p.y} r={3.5} fill="#10b981" />
              <text
                x={p.x}
                y={p.y - 2}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="900"
                fill="#0f172a"
              >
                {L.nodes[i].ko}
              </text>
              <text
                x={p.x}
                y={p.y + 8}
                textAnchor="middle"
                className="font-mono"
                fontSize="5.5"
                letterSpacing="0.6"
                fill="#94a3b8"
              >
                {L.nodes[i].en}
              </text>
            </g>
          ))}

          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <circle
              cx={cx}
              cy={cy}
              r={40}
              fill="#d4af37"
              opacity={0.08}
            />
            <circle
              cx={cx}
              cy={cy}
              r={30}
              fill="url(#grm-hub)"
              stroke="#d4af37"
              strokeWidth={1.75}
            />
            <text
              x={cx}
              y={cy - 3}
              textAnchor="middle"
              fontSize="12"
              fontWeight="900"
              fill="#0f172a"
            >
              {L.hub}
            </text>
            <text
              x={cx}
              y={cy + 9}
              textAnchor="middle"
              className="font-mono"
              fontSize="5.5"
              letterSpacing="0.8"
              fill="#b8932f"
            >
              {L.hubSub}
            </text>
          </motion.g>
        </svg>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {L.verbs.map((v, i) => (
          <div key={`lg-${i}`} className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            <span className="font-mono uppercase tracking-widest text-[9px] text-slate-600">
              {v}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981]" />
          <span className="font-mono uppercase tracking-widest text-[9px] text-slate-600">
            {lang === "ko" ? "해외 고객" : "OVERSEAS"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TranslationVsLocalization({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "TRANSLATION VS LOCALIZATION",
          title: "번역과 현지화는 다릅니다",
          subtitle:
            "단어만 바꾸면 의미는 통해도 마음은 움직이지 않습니다. 현지화는 시장의 언어로 다시 씁니다.",
          leftTag: "번역",
          leftEn: "TRANSLATION",
          leftDesc: "단어를 1:1로 치환",
          leftNote: "문장은 맞지만 어색하고, 신뢰를 만들지 못함",
          leftRows: [
            { src: "프리미엄 안티에이징", dst: "Premium Anti-Aging" },
            { src: "효과 확실 보장", dst: "Effect Sure Guarantee" },
            { src: "지금 바로 상담", dst: "Now Right Consult" },
          ],
          rightTag: "현지화",
          rightEn: "LOCALIZATION",
          rightDesc: "시장의 문화·말투로 재구성",
          items: [
            { t: "자연스러운 말투", d: "원어민이 실제로 쓰는 표현으로" },
            { t: "문화에 맞는 이미지 톤", d: "현지 정서에 어울리는 비주얼" },
            { t: "과장 없는 믿을 수 있는 증거", d: "검증 가능한 데이터·후기" },
            { t: "문의·상담으로 이어지는 흐름", d: "다음 행동을 자연스럽게 유도" },
          ],
        }
      : {
          eyebrow: "TRANSLATION VS LOCALIZATION",
          title: "Translation isn't localization",
          subtitle:
            "Swapping words preserves meaning but not emotion. Localization rewrites in the market's own language.",
          leftTag: "Translation",
          leftEn: "TRANSLATION",
          leftDesc: "Literal word-for-word swap",
          leftNote: "Grammatically fine, yet awkward and never builds trust",
          leftRows: [
            { src: "프리미엄 안티에이징", dst: "Premium Anti-Aging" },
            { src: "효과 확실 보장", dst: "Effect Sure Guarantee" },
            { src: "지금 바로 상담", dst: "Now Right Consult" },
          ],
          rightTag: "Localization",
          rightEn: "LOCALIZATION",
          rightDesc: "Rebuilt for local culture & tone",
          items: [
            { t: "Natural, native phrasing", d: "How locals actually speak" },
            { t: "Culturally tuned image tone", d: "Visuals that fit local sentiment" },
            { t: "Credible, non-exaggerated proof", d: "Verifiable data & reviews" },
            { t: "A flow toward inquiry & consult", d: "Guides the next action naturally" },
          ],
        };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs text-slate-600 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.subtitle}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* LEFT — Translation (muted / insufficient) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-slate-200 bg-slate-50/60 p-5 flex flex-col"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/70">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h10M4 17h7"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="leading-none">
                <p className="text-xs font-black text-slate-500">{L.leftTag}</p>
                <p className="font-mono uppercase tracking-widest text-[9px] text-slate-400 mt-0.5">
                  {L.leftEn}
                </p>
              </div>
            </div>
          </div>

          <p
            className="mt-3 text-[11px] text-slate-500"
            style={{ wordBreak: "keep-all" }}
          >
            {L.leftDesc}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {L.leftRows.map((row: { src: string; dst: string }, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl bg-white/70 border border-slate-100 px-3 py-2"
              >
                <span
                  className="flex-1 text-[11px] text-slate-600 truncate"
                  style={{ wordBreak: "keep-all" }}
                >
                  {row.src}
                </span>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="flex-1 text-[11px] font-mono text-slate-400 truncate text-right">
                  {row.dst}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50/50 border border-red-100 px-3 py-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-px" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#ef4444" strokeWidth="1.8" />
              <path
                d="M12 7.5v5M12 16h.01"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p
              className="text-[10px] leading-relaxed text-red-500/90"
              style={{ wordBreak: "keep-all" }}
            >
              {L.leftNote}
            </p>
          </div>
        </motion.div>

        {/* RIGHT — Localization (gold-accented, checked) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-3xl border border-[#d4af37]/40 bg-gradient-to-b from-[#d4af37]/[0.06] to-white/40 p-5 flex flex-col shadow-sm"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#d4af37]/10 blur-2xl"
          />
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4af37]/15 ring-1 ring-[#d4af37]/40">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
                <path
                  d="M12 3l2.5 5.2 5.7.8-4.1 4 1 5.7L12 21l-5.1 2.7 1-5.7-4.1-4 5.7-.8z"
                  fill="#d4af37"
                  fillOpacity="0.18"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="leading-none">
              <p className="text-xs font-black text-slate-950">{L.rightTag}</p>
              <p className="font-mono uppercase tracking-widest text-[9px] text-[#d4af37] mt-0.5">
                {L.rightEn}
              </p>
            </div>
          </div>

          <p
            className="mt-3 text-[11px] text-slate-600"
            style={{ wordBreak: "keep-all" }}
          >
            {L.rightDesc}
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            {L.items.map(
              (item: { t: string; d: string }, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3 rounded-xl bg-white/70 border border-[#d4af37]/20 px-3 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 mt-px">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" aria-hidden="true">
                      <path
                        d="M5 12.5l4 4L19 7"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-black text-slate-950 leading-snug"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {item.t}
                    </p>
                    <p
                      className="mt-0.5 text-[10px] text-slate-500 leading-relaxed"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {item.d}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function SentenceRoleSplit({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "SENTENCE ROLES",
          title: "문장은 통째로 옮기지 않습니다",
          desc: "원본 상세페이지의 모든 문장을 한 줄씩 분해해, 다섯 개의 역할 레인으로 분류합니다.",
          input: "입력 · 원문 문장",
          stack: ["문장 #1", "문장 #2", "문장 #3", "문장 #4", "..."],
          funnel: "역할 분류",
          recheckTitle: "재점검 항목",
          recheck: ["말투", "이미지 톤", "검색 키워드", "랜딩 흐름", "광고 리스크"],
          lanes: [
            { k: "keep", t: "유지", d: "그대로 살릴 핵심 메시지", c: "#10b981" },
            { k: "change", t: "변경", d: "현지 정서에 맞게 재작성", c: "#d4af37" },
            { k: "delete", t: "삭제", d: "오해·과장 소지로 제거", c: "#ef4444" },
            { k: "evidence", t: "증거 필요", d: "출처·임상 근거 보강", c: "#0f172a" },
            { k: "localize", t: "현지화 필요", d: "언어·문화 번역 재구성", c: "#64748b" },
          ],
        }
      : {
          eyebrow: "SENTENCE ROLES",
          title: "We never relocate sentences wholesale",
          desc: "Every sentence of the source page is broken out line by line and sorted into five role lanes.",
          input: "Input · source sentences",
          stack: ["Sentence #1", "Sentence #2", "Sentence #3", "Sentence #4", "..."],
          funnel: "Role split",
          recheckTitle: "Re-check chips",
          recheck: ["Tone of voice", "Image tone", "Search keywords", "Landing flow", "Ad risk"],
          lanes: [
            { k: "keep", t: "Keep", d: "Core message worth preserving", c: "#10b981" },
            { k: "change", t: "Change", d: "Rewrite for local sentiment", c: "#d4af37" },
            { k: "delete", t: "Delete", d: "Cut overstated / risky claims", c: "#ef4444" },
            { k: "evidence", t: "Needs evidence", d: "Add sources & clinical proof", c: "#0f172a" },
            { k: "localize", t: "Needs localization", d: "Re-translate language & culture", c: "#64748b" },
          ],
        };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-2">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs text-slate-600 max-w-md leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] gap-5 items-stretch">
        {/* Input stack */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono uppercase tracking-widest text-[9px] text-slate-400">
            {L.input}
          </span>
          <div className="relative flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white/60 p-3.5">
            {L.stack.map((s: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-2.5 py-2 shadow-[0_1px_0_rgba(15,23,42,0.03)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span
                  className="font-sans text-[11px] text-slate-700 truncate"
                  style={{ wordBreak: "keep-all" }}
                >
                  {s}
                </span>
              </motion.div>
            ))}
            <svg
              viewBox="0 0 24 24"
              className="absolute -right-3 top-1/2 hidden lg:block h-6 w-6 -translate-y-1/2 text-[#d4af37]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Funnel into 5 lanes */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono uppercase tracking-widest text-[9px] text-slate-400">
            {L.funnel}
          </span>
          <div className="flex flex-col gap-2">
            {L.lanes.map(
              (
                lane: { k: string; t: string; d: string; c: string },
                i: number
              ) => (
                <motion.div
                  key={lane.k}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white/70 px-3 py-2.5"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: lane.c + "1a" }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      {lane.k === "keep" && (
                        <path
                          d="m5 13 4 4L19 7"
                          stroke={lane.c}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      {lane.k === "change" && (
                        <path
                          d="M4 7h11m-4 10h9M14 4l3 3-3 3M10 14l-3 3 3 3"
                          stroke={lane.c}
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      {lane.k === "delete" && (
                        <path
                          d="M6 6l12 12M18 6 6 18"
                          stroke={lane.c}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      {lane.k === "evidence" && (
                        <path
                          d="M12 3 4 7v5c0 4.4 3.4 7.5 8 9 4.6-1.5 8-4.6 8-9V7l-8-4Zm-2 9 1.5 1.5L15 10"
                          stroke={lane.c}
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      {lane.k === "localize" && (
                        <path
                          d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.5 2.5 15.5 0 18M3 12h18"
                          stroke={lane.c}
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-xs font-black text-slate-950"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {lane.t}
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest"
                        style={{ color: lane.c }}
                      >
                        {lane.k}
                      </span>
                    </div>
                    <p
                      className="font-sans text-[11px] text-slate-600 leading-snug"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {lane.d}
                    </p>
                  </div>
                  <span
                    className="h-8 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: lane.c }}
                    aria-hidden="true"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Re-check chips */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <span className="font-mono uppercase tracking-widest text-[9px] text-slate-400">
          {L.recheckTitle}
        </span>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {L.recheck.map((chip: string, i: number) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-700"
              style={{ wordBreak: "keep-all" }}
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#d4af37]" fill="none" aria-hidden="true">
                <path
                  d="M3 12a9 9 0 0 1 15-6.7L21 8M21 12a9 9 0 0 1-15 6.7L3 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RedOceanSaturation({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "DOMESTIC SATURATION",
          title: "포화된 레드오션",
          sub: "광고비는 오르고, 노출은 묻힌다",
          costLabel: "월 광고 단가 지수",
          axisYears: ["'21", "'22", "'23", "'24", "'25"],
          costNote: "CPC 상승 추세",
          channels: [
            { name: "인스타그램", posts: "일 12.4만 게시" },
            { name: "블로그", posts: "일 8.9만 게시" },
          ],
          crowdLabel: "동일 키워드 신규 게시물",
          caption: "국내 한정 = 성장 정체",
          captionSub: "더 써도 덜 보이는 구조",
        }
      : {
          eyebrow: "DOMESTIC SATURATION",
          title: "Saturated Red Ocean",
          sub: "Ad costs rise as reach gets buried",
          costLabel: "Monthly ad-cost index",
          axisYears: ["'21", "'22", "'23", "'24", "'25"],
          costNote: "CPC trending up",
          channels: [
            { name: "Instagram", posts: "124k posts/day" },
            { name: "Blog", posts: "89k posts/day" },
          ],
          crowdLabel: "New posts on same keyword",
          caption: "Domestic-only = stalled growth",
          captionSub: "Spend more, seen less",
        };

  const cost = [38, 52, 67, 84, 100];
  const stepX = 300 / (cost.length - 1);
  const pts = cost.map((v, i) => [i * stepX, 110 - (v / 100) * 92]);
  const linePath = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L300,110 L0,110 Z`;

  const bars = [
    { rows: [9, 8, 7, 8, 9, 7], tone: "#94a3b8" },
    { rows: [7, 6, 7, 8, 6, 7], tone: "#cbd5e1" },
  ];

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <div>
          <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
            {L.eyebrow}
          </span>
          <h3
            className="mt-1 text-lg sm:text-xl font-black text-slate-950 leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            {L.title}
          </h3>
          <p
            className="text-[11px] sm:text-xs text-slate-600 mt-0.5"
            style={{ wordBreak: "keep-all" }}
          >
            {L.sub}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50/60 px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444] animate-pulse" />
          <span className="font-mono uppercase tracking-widest text-[9px] text-[#ef4444]">
            {L.costNote}
          </span>
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-3xl border border-slate-100 bg-white/60 p-4 sm:p-5"
        >
          <p className="font-mono uppercase tracking-widest text-[10px] text-slate-500">
            {L.costLabel}
          </p>
          <svg viewBox="0 0 300 130" className="w-full h-auto mt-2" role="img">
            <defs>
              <linearGradient id="roCostFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[110, 87, 64, 41, 18].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="300"
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
                aria-hidden="true"
              />
            ))}
            <motion.path
              d={areaPath}
              fill="url(#roCostFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.path
              d={linePath}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            {pts.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === pts.length - 1 ? 3.4 : 2.2}
                fill={i === pts.length - 1 ? "#ef4444" : "#ffffff"}
                stroke="#ef4444"
                strokeWidth="1.5"
              />
            ))}
            {L.axisYears.map((yr, i) => (
              <text
                key={yr}
                x={i * stepX}
                y="124"
                textAnchor={i === 0 ? "start" : i === L.axisYears.length - 1 ? "end" : "middle"}
                className="font-mono"
                fontSize="7"
                fill="#94a3b8"
              >
                {yr}
              </text>
            ))}
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 rounded-3xl border border-slate-100 bg-white/60 p-4 sm:p-5"
        >
          <p className="font-mono uppercase tracking-widest text-[10px] text-slate-500">
            {L.crowdLabel}
          </p>
          <div className="mt-3 space-y-3">
            {bars.map((bar, bi) => (
              <div key={bi}>
                <div className="flex items-baseline justify-between gap-2">
                  <span
                    className="text-xs font-black text-slate-950"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {L.channels[bi].name}
                  </span>
                  <span className="font-mono text-[9px] tracking-wide text-slate-500">
                    {L.channels[bi].posts}
                  </span>
                </div>
                <div className="mt-1.5 flex gap-[3px] overflow-hidden">
                  {bar.rows.map((h, ri) => (
                    <motion.div
                      key={ri}
                      className="flex-1 rounded-t-sm"
                      style={{ background: bar.tone, height: `${h * 5}px` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: bi * 0.15 + ri * 0.05 }}
                    />
                  ))}
                  <motion.div
                    className="flex-1 rounded-t-sm"
                    style={{ background: "#ef4444", height: "48px", opacity: 0.85 }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: bi * 0.15 + 0.4 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
          <path
            d="M12 3v10m0 4v.5"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 13c2 2 5 3 7 3s5-1 7-3"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div style={{ wordBreak: "keep-all" }}>
          <p className="text-sm font-black text-slate-950">{L.caption}</p>
          <p className="text-[11px] text-slate-500">{L.captionSub}</p>
        </div>
      </div>
    </div>
  );
}

export function RedesignMapping({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "REDESIGN, NOT MORE POSTS",
          title: "더 많이 올리지 말고, 다시 설계하세요",
          subtitle:
            "콘텐츠 양이 아니라 구조를 바꿉니다. 국내용 자산을 해외 고객이 신뢰하고 문의하는 흐름으로 재배치합니다.",
          fromTag: "지금 (국내 기준)",
          toTag: "재설계 (해외 기준)",
          rows: [
            {
              from: "한국 상세페이지",
              fromSub: "정보 나열·국내 시술 관행 중심",
              to: "일본 고객용 랜딩",
              toSub: "안심 동선·예약/상담 CTA 중심 재배치",
            },
            {
              from: "전후사진 중심 콘텐츠",
              fromSub: "비포·애프터 비주얼에 의존",
              to: "중국·동남아 신뢰 흐름",
              toSub: "자격·후기·프로세스로 신뢰 단계화",
            },
            {
              from: "국내 카드뉴스",
              fromSub: "한 번 보고 스크롤로 흘려보냄",
              to: "해외 고객 저장·문의 구조",
              toSub: "저장 → 재방문 → 문의로 이어지는 설계",
            },
          ],
        }
      : {
          eyebrow: "REDESIGN, NOT MORE POSTS",
          title: "Redesign the flow, don't just post more",
          subtitle:
            "We change the structure, not the volume. Domestic assets are re-mapped into a flow overseas customers trust and inquire through.",
          fromTag: "Now (domestic)",
          toTag: "Redesigned (global)",
          rows: [
            {
              from: "Korean detail page",
              fromSub: "Spec dump, built on local clinic habits",
              to: "Landing for Japanese customers",
              toSub: "Reassurance path with booking / consult CTA",
            },
            {
              from: "Before & after content",
              fromSub: "Relies on raw visual proof",
              to: "Trust flow for China & SEA",
              toSub: "Credentials, reviews, process staged as trust",
            },
            {
              from: "Domestic card news",
              fromSub: "Seen once, lost in the scroll",
              to: "Save & inquire structure",
              toSub: "Save → revisit → inquire, by design",
            },
          ],
        };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="mb-6 sm:mb-8">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="mt-2 text-lg sm:text-2xl font-black text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="mt-2 max-w-2xl text-[11px] sm:text-xs text-slate-600 leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {L.subtitle}
        </p>
      </div>

      <div className="mb-3 grid grid-cols-12 items-center gap-2 px-1">
        <span className="col-span-5 font-mono uppercase tracking-widest text-[9px] text-slate-400">
          {L.fromTag}
        </span>
        <span className="col-span-2" aria-hidden="true" />
        <span className="col-span-5 text-right font-mono uppercase tracking-widest text-[9px] text-[#d4af37]">
          {L.toTag}
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {L.rows.map(
          (
            row: { from: string; fromSub: string; to: string; toSub: string },
            i: number,
          ) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-12 items-stretch gap-2"
            >
              <div className="col-span-5 rounded-2xl border border-slate-100 bg-slate-50/60 p-3 sm:p-4">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="font-mono text-[9px] font-black tracking-widest text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
                </div>
                <p
                  className="text-xs sm:text-sm font-black text-slate-500"
                  style={{ wordBreak: "keep-all" }}
                >
                  {row.from}
                </p>
                <p
                  className="mt-1 text-[10px] sm:text-[11px] text-slate-400 leading-snug"
                  style={{ wordBreak: "keep-all" }}
                >
                  {row.fromSub}
                </p>
              </div>

              <div className="col-span-2 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 56 28" className="w-full h-auto" aria-hidden="true">
                  <defs>
                    <linearGradient id={`rm-arrow-${i}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="4"
                    y1="14"
                    x2="44"
                    y2="14"
                    stroke={`url(#rm-arrow-${i})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40 8 L50 14 L40 20"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4" cy="14" r="2.5" fill="#cbd5e1" />
                </svg>
              </div>

              <div className="col-span-5 rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/[0.06] p-3 sm:p-4">
                <div className="mb-1.5 flex items-center justify-end gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
                  <span className="font-mono text-[9px] font-black tracking-widest text-[#d4af37]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="text-right text-xs sm:text-sm font-black text-slate-950"
                  style={{ wordBreak: "keep-all" }}
                >
                  {row.to}
                </p>
                <p
                  className="mt-1 text-right text-[10px] sm:text-[11px] text-slate-600 leading-snug"
                  style={{ wordBreak: "keep-all" }}
                >
                  {row.toSub}
                </p>
              </div>
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}

export function ConversionFunnel({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "CONVERSION FLOW",
          title: "전환 깔때기",
          sub: "노출에서 재방문까지, 단계마다 신뢰 요소가 이탈을 막는다",
          stages: [
            { label: "콘텐츠 노출", desc: "SNS·검색에서 브랜드 발견", val: "100%" },
            { label: "랜딩 유입", desc: "랜딩페이지 도착·탐색", val: "42%" },
            { label: "문의·상담", desc: "DM·폼·채팅 문의 발생", val: "18%" },
            { label: "예약", desc: "시술·진료 예약 확정", val: "9%" },
            { label: "재방문", desc: "리텐션·재예약 전환", val: "5%" },
          ],
          trustLabel: "신뢰 요소",
          trust: ["후기", "인증", "과정", "FAQ"],
          note: "각 단계는 신뢰 요소가 받쳐줄 때 다음으로 넘어간다",
        }
      : {
          eyebrow: "CONVERSION FLOW",
          title: "Conversion Funnel",
          sub: "From exposure to return, trust factors curb drop-off at every step",
          stages: [
            { label: "Content Reach", desc: "Brand discovered via social & search", val: "100%" },
            { label: "Landing Visit", desc: "Arrives & explores landing page", val: "42%" },
            { label: "Inquiry", desc: "DM, form & chat inquiries", val: "18%" },
            { label: "Booking", desc: "Procedure or visit confirmed", val: "9%" },
            { label: "Return", desc: "Retention & rebooking", val: "5%" },
          ],
          trustLabel: "Trust factors",
          trust: ["Reviews", "Certs", "Process", "FAQ"],
          note: "Each step advances only when trust factors hold it up",
        };

  const golds = ["#e6cf7a", "#dcc066", "#d4af37", "#c39c2a", "#a9851f"];
  const rowH = 56;
  const gap = 14;
  const topPad = 8;
  const widths = [560, 452, 348, 248, 160];

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
            {L.eyebrow}
          </span>
          <h3 className="mt-2 text-lg sm:text-xl font-black text-slate-950" style={{ wordBreak: "keep-all" }}>
            {L.title}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs text-slate-600 max-w-md" style={{ wordBreak: "keep-all" }}>
            {L.sub}
          </p>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-1.5">
          <span className="font-mono uppercase tracking-widest text-[9px] text-slate-400">
            {L.trustLabel}
          </span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {L.trust.map((t: string) => (
              <span
                key={t}
                className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-2.5 py-1 text-[10px] font-semibold text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-stretch">
        <div className="relative">
          <svg
            viewBox={`0 0 600 ${topPad + L.stages.length * rowH + (L.stages.length - 1) * gap + 8}`}
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="cf-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f172a" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {L.stages.map((s, i: number) => {
              const w = widths[i];
              const x = (600 - w) / 2;
              const y = topPad + i * (rowH + gap);
              const isLast = i === L.stages.length - 1;
              return (
                <motion.g
                  key={s.label}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  {!isLast && (
                    <path
                      d={`M ${x + 18} ${y + rowH} L ${(600 - widths[i + 1]) / 2 + 18} ${y + rowH + gap} 
                          L ${(600 + widths[i + 1]) / 2 - 18} ${y + rowH + gap} L ${x + w - 18} ${y + rowH} Z`}
                      fill="url(#cf-fade)"
                    />
                  )}
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={rowH}
                    rx={16}
                    fill={golds[i]}
                    fillOpacity={0.92}
                  />
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={rowH}
                    rx={16}
                    fill="none"
                    stroke="#0f172a"
                    strokeOpacity={0.06}
                    strokeWidth={1.5}
                  />
                  <text
                    x={300}
                    y={y + rowH / 2 - 3}
                    textAnchor="middle"
                    className="font-sans"
                    fontSize="13"
                    fontWeight="800"
                    fill={i >= 3 ? "#ffffff" : "#0f172a"}
                  >
                    {s.label}
                  </text>
                  <text
                    x={300}
                    y={y + rowH / 2 + 14}
                    textAnchor="middle"
                    className="font-mono"
                    fontSize="9.5"
                    fontWeight="700"
                    letterSpacing="1"
                    fill={i >= 3 ? "#ffffff" : "#0f172a"}
                    fillOpacity={i >= 3 ? 0.85 : 0.55}
                  >
                    {s.val}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col justify-center gap-2 lg:w-44">
          {L.stages.map((s, i: number) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              className="flex items-start gap-2.5"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: golds[i] }}
              />
              <div style={{ wordBreak: "keep-all" }}>
                <p className="text-[11px] font-bold text-slate-800 leading-tight">{s.label}</p>
                <p className="text-[10px] text-slate-500 leading-snug">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-3">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
          <path
            d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z"
            fill="none"
            stroke="#d4af37"
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-4" fill="none" stroke="#10b981" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-[10px] sm:text-[11px] text-slate-600" style={{ wordBreak: "keep-all" }}>
          {L.note}
        </p>
      </div>
    </div>
  );
}

export function MultiChannelDiffusion({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "ONE CORE, MANY CHANNELS",
          title: "콘텐츠 1개, 채널 전방위 확산",
          desc: "잘 만든 핵심 콘텐츠 1개를 각 채널 문법에 맞게 변형해 동시 노출합니다.",
          core: "핵심 콘텐츠",
          coreUnit: "1개",
          footL: "원본 1개",
          footR: "6개 채널 확산",
          channels: [
            { id: "ig", name: "Instagram", tag: "릴스·피드" },
            { id: "fb", name: "Facebook", tag: "페이지" },
            { id: "th", name: "Threads", tag: "텍스트" },
            { id: "x", name: "X", tag: "포스트" },
            { id: "bl", name: "블로그", tag: "SEO 본문" },
            { id: "cc", name: "카드뉴스", tag: "캐러셀" },
          ],
        }
      : {
          eyebrow: "ONE CORE, MANY CHANNELS",
          title: "One Core, Diffused Everywhere",
          desc: "One strong core asset, reshaped to each channel's grammar and published in parallel.",
          core: "Core Content",
          coreUnit: "x1",
          footL: "1 source",
          footR: "6 channels",
          channels: [
            { id: "ig", name: "Instagram", tag: "Reels·Feed" },
            { id: "fb", name: "Facebook", tag: "Page" },
            { id: "th", name: "Threads", tag: "Text" },
            { id: "x", name: "X", tag: "Posts" },
            { id: "bl", name: "Blog", tag: "SEO body" },
            { id: "cc", name: "Card News", tag: "Carousel" },
          ],
        };

  const cx = 150;
  const cy = 110;
  const spokes: { x: number; y: number }[] = [
    { x: 32, y: 36 },
    { x: 268, y: 36 },
    { x: 16, y: 110 },
    { x: 284, y: 110 },
    { x: 32, y: 184 },
    { x: 268, y: 184 },
  ];

  const Glyph = ({ id }: { id: string }) => {
    const p = { fill: "none", stroke: "#0f172a", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
    if (id === "ig")
      return (
        <g {...p}>
          <rect x="-6" y="-6" width="12" height="12" rx="3.5" />
          <circle cx="0" cy="0" r="3" />
          <circle cx="3.6" cy="-3.6" r="0.5" fill="#0f172a" stroke="none" />
        </g>
      );
    if (id === "fb")
      return (
        <g {...p}>
          <path d="M2.5 -6 H-1 a3 3 0 0 0 -3 3 V0 H-6 V3 H-4 V7 H-1 V3 H1.5 L2 0 H-1 V-2 a1 1 0 0 1 1 -1 H2.5 Z" />
        </g>
      );
    if (id === "th")
      return (
        <g {...p}>
          <path d="M5 0 a5 5 0 1 1 -2 -4" />
          <path d="M-1 1.5 a2.5 2.5 0 1 0 3 -2.5 c-3 0 -3.5 4 -1 5.5" />
        </g>
      );
    if (id === "x")
      return (
        <g {...p}>
          <path d="M-5 -5 L5 5 M5 -5 L-5 5" />
        </g>
      );
    if (id === "bl")
      return (
        <g {...p}>
          <rect x="-5.5" y="-6" width="11" height="12" rx="1.5" />
          <path d="M-3 -3 H3 M-3 0 H3 M-3 3 H1" />
        </g>
      );
    return (
      <g {...p}>
        <rect x="-6" y="-4.5" width="8" height="11" rx="1.5" />
        <rect x="-2.5" y="-6" width="8" height="11" rx="1.5" fill="#fff" />
      </g>
    );
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-1.5 mb-5">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">{L.eyebrow}</span>
        <h3 className="font-black text-slate-950 text-base sm:text-lg" style={{ wordBreak: "keep-all" }}>
          {L.title}
        </h3>
        <p className="font-sans text-[11px] sm:text-xs text-slate-600 max-w-md leading-relaxed" style={{ wordBreak: "keep-all" }}>
          {L.desc}
        </p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 300 220" className="w-full h-auto" aria-hidden="true">
          <defs>
            <radialGradient id="mcd-core" cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fbf5e3" />
            </radialGradient>
          </defs>

          {spokes.map((s, i) => (
            <g key={`spoke-${i}`}>
              <line x1={cx} y1={cy} x2={s.x} y2={s.y} stroke="#e2e8f0" strokeWidth={1.5} />
              <motion.circle
                cx={cx}
                cy={cy}
                r={2}
                fill="#d4af37"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 0], cx: [cx, s.x], cy: [cy, s.y] }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.5 + i * 0.12, ease: "easeInOut" }}
              />
            </g>
          ))}

          {[34, 50].map((r, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="#d4af37"
              strokeWidth={1}
              initial={{ opacity: 0.18 }}
              whileInView={{ opacity: [0.18, 0.05, 0.18] }}
              viewport={{ once: true }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
            />
          ))}

          <motion.g initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <circle cx={cx} cy={cy} r={26} fill="url(#mcd-core)" stroke="#d4af37" strokeWidth={1.6} />
            <text x={cx} y={cy - 4} textAnchor="middle" className="font-mono" fontSize={6.5} fontWeight={700} fill="#0f172a">
              {L.core}
            </text>
            <text x={cx} y={cy + 9} textAnchor="middle" fontSize={11} fontWeight={900} fill="#d4af37">
              {L.coreUnit}
            </text>
          </motion.g>

          {spokes.map((s, i) => {
            const ch = L.channels[i];
            return (
              <motion.g
                key={ch.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
              >
                <circle cx={s.x} cy={s.y} r={16} fill="#fff" stroke="#e2e8f0" strokeWidth={1.5} />
                <g transform={`translate(${s.x} ${s.y}) scale(0.95)`}>
                  <Glyph id={ch.id} />
                </g>
              </motion.g>
            );
          })}
        </svg>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
          {L.channels.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.8 + i * 0.06 }}
              className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white/60 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shrink-0" />
              <span className="flex flex-col leading-tight" style={{ wordBreak: "keep-all" }}>
                <span className="font-black text-slate-950 text-[11px]">{ch.name}</span>
                <span className="font-mono uppercase tracking-widest text-[9px] text-slate-400">{ch.tag}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
        <span className="font-mono uppercase tracking-widest text-[10px] text-slate-500">{L.footL}</span>
        <svg viewBox="0 0 40 8" className="h-2 w-12" aria-hidden="true">
          <line x1="2" y1="4" x2="34" y2="4" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M34 1 L38 4 L34 7" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-mono uppercase tracking-widest text-[10px] font-black text-[#10b981]">{L.footR}</span>
      </div>
    </div>
  );
}

export function SearchToInquiry({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "SEARCH TO INQUIRY",
          title: "검색에서 문의까지 이어지는 길",
          sub: "검색 키워드가 블로그·랜딩페이지를 거쳐 실제 문의로 전환됩니다.",
          ai: "AI 검색",
          aiSub: "ChatGPT · Perplexity",
          steps: [
            { tag: "01", name: "검색 키워드", desc: "타겟 키워드 노출" },
            { tag: "02", name: "블로그", desc: "신뢰 콘텐츠 진입" },
            { tag: "03", name: "랜딩페이지", desc: "전환 설계 페이지" },
            { tag: "04", name: "문의", desc: "상담·예약 전환" },
          ] as const,
          badges: [
            { k: "SEO", d: "검색엔진 최적화" },
            { k: "AEO", d: "답변엔진 최적화" },
            { k: "GEO", d: "생성형 검색 최적화" },
          ] as const,
          flow: "검색 유입 전환 흐름",
        }
      : {
          eyebrow: "SEARCH TO INQUIRY",
          title: "The path from search to inquiry",
          sub: "Search keywords flow through blogs and landing pages into real inquiries.",
          ai: "AI Search",
          aiSub: "ChatGPT · Perplexity",
          steps: [
            { tag: "01", name: "Search Keyword", desc: "Targeted visibility" },
            { tag: "02", name: "Blog", desc: "Trusted content entry" },
            { tag: "03", name: "Landing Page", desc: "Conversion-built page" },
            { tag: "04", name: "Inquiry", desc: "Consult & booking" },
          ] as const,
          badges: [
            { k: "SEO", d: "Search Engine Opt." },
            { k: "AEO", d: "Answer Engine Opt." },
            { k: "GEO", d: "Generative Search Opt." },
          ] as const,
          flow: "Search-driven conversion flow",
        };

  const icons: Record<string, ReactElement> = {
    "01": (
      <g>
        <circle cx="12" cy="11" r="6" />
        <line x1="16.5" y1="15.5" x2="21" y2="20" />
      </g>
    ),
    "02": (
      <g>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="12.5" x2="16" y2="12.5" />
        <line x1="8" y1="16" x2="12.5" y2="16" />
      </g>
    ),
    "03": (
      <g>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <line x1="4" y1="9" x2="20" y2="9" />
        <circle cx="6.6" cy="7" r="0.5" />
        <rect x="7.5" y="12" width="9" height="4.5" rx="1" />
      </g>
    ),
    "04": (
      <g>
        <path d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" />
        <path d="M3 8l9 6 9-6" />
      </g>
    ),
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs text-slate-600 max-w-md"
          style={{ wordBreak: "keep-all" }}
        >
          {L.sub}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {L.badges.map(({ k, d }, i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5"
          >
            <span className="font-mono text-[10px] font-black tracking-widest text-[#d4af37]">
              {k}
            </span>
            <span
              className="text-[10px] text-slate-500"
              style={{ wordBreak: "keep-all" }}
            >
              {d}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-3xl border border-slate-100 bg-gradient-to-b from-white/60 to-slate-50/40 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="#d4af37"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
            </svg>
            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#b8932f]">
              {L.ai}
            </span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono">{L.aiSub}</span>
          <svg
            viewBox="0 0 40 16"
            aria-hidden="true"
            className="ml-1 hidden h-3 w-10 sm:block"
            fill="none"
            stroke="#d4af37"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="2 3"
          >
            <path d="M2 8h32" />
            <path d="M30 4l5 4-5 4" strokeDasharray="0" />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-7 sm:items-center">
          {L.steps.map((s, i) => {
            const last = i === L.steps.length - 1;
            return (
              <div
                key={s.tag}
                className={
                  last
                    ? "sm:col-span-1 contents sm:block"
                    : "sm:col-span-2 contents sm:block"
                }
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className={
                    "relative flex flex-col gap-2 rounded-2xl border p-3.5 " +
                    (last
                      ? "border-emerald-200 bg-emerald-50/60"
                      : "border-slate-100 bg-white/80")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        "flex h-9 w-9 items-center justify-center rounded-xl " +
                        (last
                          ? "bg-emerald-500/10 text-emerald-600"
                          : "bg-slate-900/[0.04] text-slate-700")
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {icons[s.tag]}
                      </svg>
                    </span>
                    <span
                      className={
                        "font-mono text-[10px] font-black tracking-widest " +
                        (last ? "text-emerald-500" : "text-slate-300")
                      }
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[13px] font-black text-slate-950"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {s.name}
                    </span>
                    <span
                      className="text-[11px] text-slate-500"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {s.desc}
                    </span>
                  </div>
                  {last && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                  )}
                </motion.div>

                {!last && (
                  <div
                    className="flex items-center justify-center py-0.5 sm:py-0"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 rotate-90 text-[#d4af37] sm:rotate-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
            {L.flow}
          </span>
        </div>
      </div>
    </div>
  );
}

export function LandingReconstruction({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "LANDING REBUILT BY FLOW",
          title: "흐름으로 다시 쌓은 랜딩",
          desc: "예쁨이 아니라 고객의 의사결정 순서대로 페이지를 재배치합니다.",
          blocks: [
            { tag: "HERO", label: "히어로 — 한 줄 약속" },
            { tag: "EVIDENCE", label: "근거 — 데이터·인증·전후" },
            { tag: "REVIEWS", label: "후기 — 실사용 신뢰" },
            { tag: "CTA", label: "문의 — 행동 유도" },
          ],
          pins: [
            { n: "01", q: "어떤 고객인가", a: "타깃을 히어로 첫 줄에서 즉시 호명" },
            { n: "02", q: "어떤 의심 먼저", a: "가장 큰 불안을 상단에서 먼저 해소" },
            { n: "03", q: "어떤 증거 어디에", a: "의심 바로 아래 증거 블록 배치" },
            { n: "04", q: "문의 버튼 언제", a: "확신이 차오른 순간에 CTA 노출" },
          ],
          flow: "스크롤 흐름 = 의사결정 흐름",
        }
      : {
          eyebrow: "LANDING REBUILT BY FLOW",
          title: "A Landing Rebuilt by Flow",
          desc: "We reorganize the page by the customer's decision order — not just by prettiness.",
          blocks: [
            { tag: "HERO", label: "Hero — one-line promise" },
            { tag: "EVIDENCE", label: "Evidence — data, certs, before/after" },
            { tag: "REVIEWS", label: "Reviews — real-use trust" },
            { tag: "CTA", label: "Inquiry — call to action" },
          ],
          pins: [
            { n: "01", q: "Which customer", a: "Name the target in the hero's first line" },
            { n: "02", q: "Which doubt first", a: "Resolve the biggest fear up top" },
            { n: "03", q: "Which proof where", a: "Place evidence right under each doubt" },
            { n: "04", q: "When to inquire", a: "Reveal CTA at peak conviction" },
          ],
          flow: "Scroll flow = decision flow",
        };

  const blockColors = ["#0f172a", "#d4af37", "#10b981", "#0f172a"];

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="mb-6">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="mt-2 text-lg sm:text-xl font-black text-slate-950"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="mt-1.5 text-xs text-slate-600 max-w-md"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-6 lg:gap-8 items-center">
        {/* Wireframe phone/browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-[300px]"
        >
          <svg viewBox="0 0 300 420" className="w-full h-auto" role="img" aria-label="wireframe">
            <defs>
              <linearGradient id="lrShade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
            </defs>
            {/* device shell */}
            <rect x="14" y="6" width="272" height="408" rx="30" fill="url(#lrShade)" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="14" y="6" width="272" height="408" rx="30" fill="none" stroke="#0f172a" strokeWidth="1.5" opacity="0.06" />
            {/* browser chrome */}
            <rect x="30" y="22" width="240" height="20" rx="10" fill="#f1f5f9" />
            <circle cx="44" cy="32" r="3" fill="#cbd5e1" />
            <circle cx="54" cy="32" r="3" fill="#e2e8f0" />
            <circle cx="64" cy="32" r="3" fill="#e2e8f0" />
            <rect x="84" y="27" width="178" height="10" rx="5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

            {/* stacked content blocks */}
            {[
              { y: 56, h: 96, accent: blockColors[0] },
              { y: 162, h: 84, accent: blockColors[1] },
              { y: 256, h: 70, accent: blockColors[2] },
              { y: 336, h: 64, accent: blockColors[3] },
            ].map((b, i) => (
              <g key={i}>
                <rect x="30" y={b.y} width="240" height={b.h} rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                <rect x="30" y={b.y} width="5" height={b.h} rx="2.5" fill={b.accent} opacity="0.9" />
                {/* skeleton lines */}
                <rect x="46" y={b.y + 16} width={i === 0 ? 150 : 110} height="9" rx="4.5" fill="#0f172a" opacity={i === 0 ? 0.85 : 0.5} />
                <rect x="46" y={b.y + 32} width="180" height="6" rx="3" fill="#e2e8f0" />
                {i !== 3 && <rect x="46" y={b.y + 44} width="140" height="6" rx="3" fill="#eef2f6" />}
                {/* evidence chips */}
                {i === 1 && (
                  <g>
                    <rect x="46" y={b.y + 54} width="46" height="16" rx="8" fill="#fbf5e3" stroke="#d4af37" strokeWidth="1" />
                    <rect x="98" y={b.y + 54} width="46" height="16" rx="8" fill="#fbf5e3" stroke="#d4af37" strokeWidth="1" />
                    <rect x="150" y={b.y + 54} width="46" height="16" rx="8" fill="#fbf5e3" stroke="#d4af37" strokeWidth="1" />
                  </g>
                )}
                {/* review stars */}
                {i === 2 && (
                  <g fill="#d4af37">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <circle key={s} cx={50 + s * 13} cy={b.y + 50} r="3.5" />
                    ))}
                  </g>
                )}
                {/* CTA button */}
                {i === 3 && (
                  <g>
                    <rect x="46" y={b.y + 30} width="208" height="22" rx="11" fill="#0f172a" />
                    <rect x="120" y={b.y + 39} width="60" height="5" rx="2.5" fill="#ffffff" opacity="0.85" />
                  </g>
                )}
              </g>
            ))}
          </svg>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono uppercase tracking-widest text-[9px] text-slate-400">
            {L.flow}
          </span>
        </motion.div>

        {/* Callout pins */}
        <div className="flex flex-col gap-3">
          {L.pins.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/60 p-3.5"
            >
              <div className="relative shrink-0">
                <svg viewBox="0 0 36 44" className="w-7 h-auto" aria-hidden="true">
                  <path
                    d="M18 2C9.7 2 3 8.5 3 16.4c0 9 12 22 14.2 24.4a1.1 1.1 0 0 0 1.6 0C21 38.4 33 25.4 33 16.4 33 8.5 26.3 2 18 2Z"
                    fill="#ffffff"
                    stroke={i === 1 ? "#ef4444" : i === 2 ? "#10b981" : "#d4af37"}
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="16" r="6.5" fill={i === 1 ? "#ef4444" : i === 2 ? "#10b981" : "#d4af37"} opacity="0.16" />
                </svg>
                <span className="absolute inset-x-0 top-[7px] text-center font-mono text-[9px] font-black text-slate-950">
                  {p.n}
                </span>
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs sm:text-sm font-black text-slate-950 leading-snug"
                  style={{ wordBreak: "keep-all" }}
                >
                  {p.q}
                </p>
                <p
                  className="mt-0.5 text-[11px] text-slate-600 leading-snug"
                  style={{ wordBreak: "keep-all" }}
                >
                  {p.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HumanGate({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "VERIFY + HUMAN GATE",
          title: "AI는 초안까지, 발행은 사람이 결정합니다",
          desc: "AI가 만든 초안은 자동 검증을 거친 뒤, 마지막엔 반드시 사람이 검수합니다. 게이트를 통과한 결과만 발행됩니다.",
          steps: [
            { tag: "STEP 01", name: "AI 초안", sub: "자동 생성" },
            { tag: "STEP 02", name: "Graphify 검증", sub: "자동 체크" },
            { tag: "STEP 03", name: "사람 검수 게이트", sub: "최종 판단" },
            { tag: "STEP 04", name: "발행", sub: "라이브" },
          ],
          checks: [
            "근거 일치",
            "출처 추적",
            "광고법 리스크",
            "현지화 기준",
            "전환 흐름",
          ],
          checkTitle: "검증 체크리스트",
          gateTitle: "사람 검수 게이트",
          outcomes: [
            { k: "approve", label: "승인", sub: "그대로 발행" },
            { k: "hold", label: "보류", sub: "추가 검토" },
            { k: "edit", label: "수정", sub: "초안 반려" },
          ],
          note: "게이트는 우회할 수 없습니다 — 사람 승인 없이는 발행되지 않습니다.",
        }
      : {
          eyebrow: "VERIFY + HUMAN GATE",
          title: "AI drafts. Humans decide what ships.",
          desc: "Every AI draft passes automated verification, then a human reviews it. Only what clears the gate goes live.",
          steps: [
            { tag: "STEP 01", name: "AI Draft", sub: "auto-generated" },
            { tag: "STEP 02", name: "Graphify Verify", sub: "auto checks" },
            { tag: "STEP 03", name: "Human Review Gate", sub: "final call" },
            { tag: "STEP 04", name: "Publish", sub: "live" },
          ],
          checks: [
            "Evidence match",
            "Source trace",
            "Ad-law risk",
            "Localization",
            "Conversion flow",
          ],
          checkTitle: "Verification checklist",
          gateTitle: "Human review gate",
          outcomes: [
            { k: "approve", label: "Approve", sub: "ship as-is" },
            { k: "hold", label: "Hold", sub: "review more" },
            { k: "edit", label: "Revise", sub: "send back" },
          ],
          note: "The gate can't be bypassed — nothing ships without human approval.",
        };

  const outcomeStyle: Record<string, { dot: string; text: string; ring: string; bg: string }> = {
    approve: { dot: "#10b981", text: "text-emerald-600", ring: "ring-emerald-200", bg: "bg-emerald-50/60" },
    hold: { dot: "#d4af37", text: "text-[#b8932f]", ring: "ring-amber-200", bg: "bg-amber-50/60" },
    edit: { dot: "#ef4444", text: "text-rose-500", ring: "ring-rose-200", bg: "bg-rose-50/60" },
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
        {L.eyebrow}
      </span>
      <h3
        className="mt-2 text-lg sm:text-xl font-black text-slate-950 leading-snug"
        style={{ wordBreak: "keep-all" }}
      >
        {L.title}
      </h3>
      <p
        className="mt-2 max-w-xl text-[11px] sm:text-xs text-slate-600 leading-relaxed"
        style={{ wordBreak: "keep-all" }}
      >
        {L.desc}
      </p>

      {/* Pipeline rail */}
      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {L.steps.map((s, i) => {
          const isGate = i === 2;
          return (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={
                "relative rounded-2xl border p-4 " +
                (isGate
                  ? "border-[#e7cf86] bg-gradient-to-b from-[#fdf8ec] to-white shadow-[0_8px_24px_-12px_rgba(212,175,55,0.45)]"
                  : "border-slate-100 bg-white/60")
              }
            >
              {isGate && (
                <span className="absolute -top-2 left-4 rounded-full bg-[#d4af37] px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white font-mono">
                  GATE
                </span>
              )}
              <span
                className={
                  "font-mono text-[9px] uppercase tracking-widest " +
                  (isGate ? "text-[#b8932f]" : "text-slate-400")
                }
              >
                {s.tag}
              </span>
              <div
                className={
                  "mt-1 text-sm font-black leading-tight " +
                  (isGate ? "text-slate-950" : "text-slate-800")
                }
                style={{ wordBreak: "keep-all" }}
              >
                {s.name}
              </div>
              <div className="mt-0.5 text-[10px] text-slate-500" style={{ wordBreak: "keep-all" }}>
                {s.sub}
              </div>
              {i < L.steps.length - 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="absolute top-1/2 -right-2.5 hidden h-5 w-5 -translate-y-1/2 sm:block"
                >
                  <path
                    d="M5 12h12m0 0-5-5m5 5-5 5"
                    fill="none"
                    stroke={isGate ? "#d4af37" : "#cbd5e1"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Detail panels */}
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {/* Verify checklist */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-slate-100 bg-white/60 p-5"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            {L.checkTitle}
          </span>
          <ul className="mt-3 space-y-2.5">
            {L.checks.map((c) => (
              <li key={c} className="flex items-center gap-2.5">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0">
                  <circle cx="10" cy="10" r="8.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
                  <path
                    d="M6 10.2l2.6 2.6L14 7.4"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] sm:text-xs text-slate-700" style={{ wordBreak: "keep-all" }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Human gate outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="rounded-2xl border border-[#e7cf86] bg-gradient-to-b from-[#fdf8ec] to-white p-5"
        >
          <div className="flex items-center gap-2">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
              <path
                d="M12 3.5l7 3v4.2c0 4.3-3 7.5-7 9-4-1.5-7-4.7-7-9V6.5l7-3z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#b8932f]">
              {L.gateTitle}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {L.outcomes.map((o) => {
              const st = outcomeStyle[o.k];
              return (
                <div
                  key={o.k}
                  className={"rounded-xl ring-1 px-2.5 py-3 text-center " + st.ring + " " + st.bg}
                >
                  <span
                    className="mx-auto block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: st.dot }}
                    aria-hidden="true"
                  />
                  <div className={"mt-2 text-xs font-black " + st.text}>{o.label}</div>
                  <div className="mt-0.5 text-[10px] text-slate-500" style={{ wordBreak: "keep-all" }}>
                    {o.sub}
                  </div>
                </div>
              );
            })}
          </div>
          <p
            className="mt-3 text-[10px] leading-relaxed text-slate-500"
            style={{ wordBreak: "keep-all" }}
          >
            {L.note}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function OneSystemHub({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "ONE CONNECTED SYSTEM",
          title: "하나로 연결된 시스템",
          lead: "여러 업체를 혼자 관리하지 마세요. 모든 모듈이 하나의 시스템으로 연결됩니다.",
          hub: "하나의 시스템",
          hubSub: "TRUSTA",
          note: "당신은 한 곳만 보면 됩니다",
          modules: [
            "콘텐츠 전략",
            "현지화",
            "이미지 제작",
            "카드뉴스",
            "멀티 SNS 확산",
            "블로그·SEO·AEO·GEO",
            "상세·랜딩",
            "광고법 1차 검수",
            "말투 검수",
            "사람 검수 게이트",
            "성과 리포트",
          ],
        }
      : {
          eyebrow: "ONE CONNECTED SYSTEM",
          title: "One Connected System",
          lead: "Stop juggling vendors. Every module wires into a single system.",
          hub: "ONE SYSTEM",
          hubSub: "TRUSTA",
          note: "You only watch one place",
          modules: [
            "Content Strategy",
            "Localization",
            "Image Production",
            "Card News",
            "Multi-SNS Reach",
            "Blog · SEO · AEO · GEO",
            "Detail · Landing",
            "Ad-Law Pre-Check",
            "Tone Review",
            "Human Review Gate",
            "Performance Report",
          ],
        };

  const cx = 300;
  const cy = 230;
  const rx = 252;
  const ry = 188;
  const n = L.modules.length;
  const nodes = L.modules.map((label, i) => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
    return {
      label,
      i,
      x: cx + rx * Math.cos(a),
      y: cy + ry * Math.sin(a),
      anchor:
        Math.cos(a) > 0.25 ? "start" : Math.cos(a) < -0.25 ? "end" : "middle",
    };
  });

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-1.5 mb-5">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950 tracking-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs text-slate-600 max-w-md leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {L.lead}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg viewBox="0 0 600 470" className="w-full h-auto">
          <defs>
            <radialGradient id="osh-hub" cx="50%" cy="42%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fbfaf5" />
              <stop offset="100%" stopColor="#f3f0e4" />
            </radialGradient>
            <linearGradient id="osh-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#e9d8a6" />
            </linearGradient>
          </defs>

          {nodes.map((nd) => (
            <motion.line
              key={`l-${nd.i}`}
              aria-hidden="true"
              x1={cx}
              y1={cy}
              x2={nd.x}
              y2={nd.y}
              stroke="#d4af37"
              strokeWidth={1.5}
              strokeOpacity={0.35}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + nd.i * 0.05 }}
            />
          ))}

          {nodes.map((nd) => (
            <motion.circle
              key={`d-${nd.i}`}
              aria-hidden="true"
              cx={nd.x}
              cy={nd.y}
              r={4.5}
              fill="#ffffff"
              stroke="url(#osh-ring)"
              strokeWidth={2}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.4 + nd.i * 0.05 }}
            />
          ))}

          {nodes.map((nd) => {
            const dx =
              nd.anchor === "start" ? 12 : nd.anchor === "end" ? -12 : 0;
            return (
              <motion.text
                key={`t-${nd.i}`}
                x={nd.x + dx}
                y={nd.y + 4}
                textAnchor={nd.anchor}
                className="font-sans"
                fontSize="12.5"
                fontWeight={700}
                fill="#334155"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + nd.i * 0.05 }}
              >
                {nd.label}
              </motion.text>
            );
          })}

          <motion.circle
            aria-hidden="true"
            cx={cx}
            cy={cy}
            r={78}
            fill="none"
            stroke="#d4af37"
            strokeWidth={1.5}
            strokeOpacity={0.25}
            strokeDasharray="3 6"
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          <motion.g
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "backOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <circle
              cx={cx}
              cy={cy}
              r={62}
              fill="url(#osh-hub)"
              stroke="url(#osh-ring)"
              strokeWidth={2.5}
            />
            <circle
              cx={cx}
              cy={cy}
              r={52}
              fill="none"
              stroke="#0f172a"
              strokeWidth={1}
              strokeOpacity={0.06}
            />
            <g aria-hidden="true" transform={`translate(${cx} ${cy - 26})`}>
              <path
                d="M0 -9 L8 -4 L8 5 C8 10 4 13 0 14 C-4 13 -8 10 -8 5 L-8 -4 Z"
                fill="none"
                stroke="#d4af37"
                strokeWidth={1.8}
                strokeLinejoin="round"
              />
              <path
                d="M-3.5 2 L-1 4.5 L4 -1.5"
                fill="none"
                stroke="#10b981"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text
              x={cx}
              y={cy + 6}
              textAnchor="middle"
              className="font-sans"
              fontSize="16"
              fontWeight={900}
              fill="#0f172a"
            >
              {L.hub}
            </text>
            <text
              x={cx}
              y={cy + 24}
              textAnchor="middle"
              className="font-mono"
              fontSize="9"
              fontWeight={800}
              letterSpacing="2.5"
              fill="#d4af37"
            >
              {L.hubSub}
            </text>
          </motion.g>
        </svg>
      </motion.div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[#10b981]"
        />
        <span
          className="font-mono uppercase tracking-widest text-[10px] text-slate-500"
          style={{ wordBreak: "keep-all" }}
        >
          {L.note}
        </span>
      </div>
    </div>
  );
}

export function GrowthLadderClosing({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "NOT JUST FOR BIG COMPANIES",
          title: "큰 회사만의 것이 아닙니다",
          sub: "작은 병원·브랜드도 한 칸씩 올라갑니다",
          base: "작은 병원·브랜드",
          steps: [
            { n: "01", t: "콘텐츠 바꾸기", d: "보여주는 것부터" },
            { n: "02", t: "문구 바꾸기", d: "전하는 말투까지" },
            { n: "03", t: "랜딩 흐름 바꾸기", d: "움직이는 동선까지" },
          ],
          flag: "이해·신뢰·문의하는 구조",
          caption: "번역이 아니라 흐름.",
        }
      : {
          eyebrow: "NOT JUST FOR BIG COMPANIES",
          title: "Not just for the big players",
          sub: "Small clinics & brands climb one step at a time",
          base: "Small clinic · brand",
          steps: [
            { n: "01", t: "Change the content", d: "What you show" },
            { n: "02", t: "Change the copy", d: "How you say it" },
            { n: "03", t: "Change the landing flow", d: "How they move" },
          ],
          flag: "A structure that earns trust & inquiries",
          caption: "Not translation — flow.",
        };

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs text-slate-600"
          style={{ wordBreak: "keep-all" }}
        >
          {L.sub}
        </p>
      </div>

      <div className="mt-6 relative">
        <svg viewBox="0 0 600 360" className="w-full h-auto" aria-hidden="true">
          <defs>
            <linearGradient id="glc-step" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="glc-flag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e7c66a" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>

          {/* ascending guide line */}
          <motion.path
            d="M40 320 L200 320 L200 250 L340 250 L340 170 L480 170 L480 80"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={1.5}
            strokeDasharray="4 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          />

          {/* base block */}
          <motion.g
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <rect
              x={40}
              y={300}
              width={150}
              height={44}
              rx={12}
              fill="url(#glc-step)"
              stroke="#e2e8f0"
              strokeWidth={1.5}
            />
            <circle cx={66} cy={322} r={5} fill="#94a3b8" />
          </motion.g>

          {/* three rising steps */}
          {[
            { x: 200, y: 230, h: 110, i: 0 },
            { x: 340, y: 150, h: 190, i: 1 },
            { x: 480, y: 60, h: 280, i: 2 },
          ].map(({ x, y, h, i }) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.18, ease }}
            >
              <rect
                x={x}
                y={y}
                width={130}
                height={h}
                rx={14}
                fill="url(#glc-step)"
                stroke="#e2e8f0"
                strokeWidth={1.5}
              />
              <rect
                x={x}
                y={y}
                width={130}
                height={40}
                rx={14}
                fill="#0f172a"
                opacity={0.03}
              />
              <text
                x={x + 16}
                y={y + 26}
                className="font-mono"
                fontSize={11}
                fontWeight={800}
                fill="#d4af37"
                letterSpacing="2"
              >
                {L.steps[i].n}
              </text>
              {/* up arrow chip */}
              <circle cx={x + 105} cy={y + 20} r={11} fill="#10b981" opacity={0.12} />
              <path
                d={`M${x + 105} ${y + 15} L${x + 100} ${y + 23} L${x + 110} ${y + 23} Z`}
                fill="#10b981"
              />
            </motion.g>
          ))}

          {/* gold flag at top */}
          <motion.g
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.95, ease }}
            style={{ transformOrigin: "545px 50px" }}
          >
            <line x1={545} y1={28} x2={545} y2={66} stroke="#0f172a" strokeWidth={2} strokeLinecap="round" />
            <path
              d="M545 28 L596 36 L545 52 Z"
              fill="url(#glc-flag)"
              stroke="#d4af37"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
            <circle cx={545} cy={66} r={4} fill="#d4af37" />
          </motion.g>
        </svg>

        {/* step labels overlay */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {L.steps.map((s: { n: string; t: string; d: string }, i: number) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.12, ease }}
              className="rounded-2xl border border-slate-100 bg-white/60 px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono uppercase tracking-widest text-[9px] text-[#d4af37] font-black">
                  STEP {s.n}
                </span>
              </div>
              <p
                className="mt-0.5 text-xs font-black text-slate-950"
                style={{ wordBreak: "keep-all" }}
              >
                {s.t}
              </p>
              <p
                className="text-[10px] text-slate-500"
                style={{ wordBreak: "keep-all" }}
              >
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* gold flag caption */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.05, ease }}
        className="mt-4 flex items-center gap-2 rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/[0.06] px-4 py-3"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#d4af37" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p
          className="text-[11px] sm:text-xs font-black text-slate-950"
          style={{ wordBreak: "keep-all" }}
        >
          {L.flag}
        </p>
      </motion.div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="font-mono uppercase tracking-widest text-[10px] text-slate-400">
          TRUSTA
        </span>
        <span
          className="text-xs sm:text-sm font-black text-slate-950"
          style={{ wordBreak: "keep-all" }}
        >
          {L.caption}
        </span>
      </div>
    </div>
  );
}

export function PerformanceDashboard({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "IMPROVE, NOT JUST POST",
          title: "성과를 읽고, 다음 콘텐츠를 설계합니다",
          sub: "단순 발행이 아니라 데이터로 방향을 잡는 운영 루프.",
          metrics: [
            { k: "조회", d: "노출·도달" },
            { k: "저장", d: "재방문 의향" },
            { k: "클릭", d: "관심 행동" },
            { k: "문의", d: "리드 발생" },
            { k: "상담", d: "전환 진입" },
            { k: "예약", d: "최종 전환" },
          ],
          loopTitle: "개선 루프",
          loop: ["데이터 수집", "패턴 해석", "다음 방향", "콘텐츠 발행"],
          note: "지표는 상대적 흐름이며 실제 수치는 캠페인별로 달라집니다.",
        }
      : {
          eyebrow: "IMPROVE, NOT JUST POST",
          title: "We read performance, then design the next content",
          sub: "Not just posting — an operating loop steered by data.",
          metrics: [
            { k: "Views", d: "Reach" },
            { k: "Saves", d: "Intent" },
            { k: "Clicks", d: "Interest" },
            { k: "Inquiry", d: "Leads" },
            { k: "Consult", d: "Funnel" },
            { k: "Booking", d: "Convert" },
          ],
          loopTitle: "Improvement Loop",
          loop: ["Collect data", "Read patterns", "Next direction", "Publish"],
          note: "Bars show relative flow; actual figures vary by campaign.",
        };

  const bars = [
    [3, 5, 4, 6, 5, 7],
    [2, 4, 3, 5, 4, 6],
    [4, 3, 5, 4, 6, 5],
    [2, 3, 4, 3, 5, 6],
    [3, 4, 4, 5, 6, 7],
    [4, 5, 5, 6, 7, 8],
  ];

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <span className="h-px flex-1 bg-slate-100" aria-hidden="true" />
      </div>

      <div className="mt-3 max-w-xl" style={{ wordBreak: "keep-all" }}>
        <h3 className="text-base sm:text-lg font-black text-slate-950 leading-snug">
          {L.title}
        </h3>
        <p className="mt-1 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
          {L.sub}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3">
        {L.metrics.map((m: { k: string; d: string }, i: number) => {
          const series = bars[i];
          const max = Math.max(...series);
          return (
            <motion.div
              key={m.k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-100 bg-white/60 p-3.5 flex flex-col gap-2.5"
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="text-sm font-black text-slate-950"
                  style={{ wordBreak: "keep-all" }}
                >
                  {m.k}
                </span>
                <span className="font-mono uppercase tracking-widest text-[9px] text-slate-400">
                  {m.d}
                </span>
              </div>
              <svg viewBox="0 0 120 36" className="w-full h-auto" aria-hidden="true">
                {series.map((v: number, j: number) => {
                  const h = (v / max) * 28;
                  const x = j * 20 + 2;
                  const last = j === series.length - 1;
                  return (
                    <rect
                      key={j}
                      x={x}
                      y={32 - h}
                      width="13"
                      height={h}
                      rx="3"
                      fill={last ? "#d4af37" : "#e2e8f0"}
                      opacity={last ? 1 : 0.9}
                    />
                  );
                })}
                <line
                  x1="0"
                  y1="33.5"
                  x2="120"
                  y2="33.5"
                  stroke="#f1f5f9"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 rounded-2xl border border-slate-100 bg-white/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5"
      >
        <div className="shrink-0">
          <svg viewBox="0 0 120 120" className="w-28 h-auto" aria-hidden="true">
            <defs>
              <marker
                id="loopArrow"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <path d="M1 1 L7 4 L1 7 Z" fill="#d4af37" />
              </marker>
            </defs>
            <circle cx="60" cy="60" r="44" fill="none" stroke="#f1f5f9" strokeWidth="10" />
            <path
              d="M60 16 A44 44 0 1 1 23 84"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#loopArrow)"
            />
            {[0, 1, 2, 3].map((p: number) => {
              const ang = (p / 4) * Math.PI * 2 - Math.PI / 2;
              const cx = 60 + Math.cos(ang) * 44;
              const cy = 60 + Math.sin(ang) * 44;
              return (
                <circle
                  key={p}
                  cx={cx}
                  cy={cy}
                  r="4.5"
                  fill="#fff"
                  stroke="#0f172a"
                  strokeWidth="1.5"
                />
              );
            })}
            <circle cx="60" cy="60" r="13" fill="#0f172a" />
            <path
              d="M55 60 L58.5 63.5 L65 56"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 w-full">
          <span className="font-mono uppercase tracking-widest text-[10px] text-[#d4af37]">
            {L.loopTitle}
          </span>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {L.loop.map((step: string, i: number) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-white/70 px-3 py-1.5"
                  style={{ wordBreak: "keep-all" }}
                >
                  <span className="font-mono text-[9px] font-black text-slate-400">
                    0{i + 1}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700">{step}</span>
                </div>
                {i < L.loop.length - 1 && (
                  <svg viewBox="0 0 16 12" className="w-3.5 h-auto" aria-hidden="true">
                    <path
                      d="M2 6 H12 M9 3 L13 6 L9 9"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p
            className="mt-3 text-[10px] text-slate-500 leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            {L.note}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function MonthlyCalendar({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "MONTHLY CONTENT CALENDAR",
          title: "월간 콘텐츠 캘린더",
          sub: "주제·채널을 한 달 단위로 배분해 일관된 발행 리듬을 만듭니다.",
          weekdays: ["월", "화", "수", "목", "금", "토", "일"],
          footNote: "예시 배치 · 실제 날짜 아님",
        }
      : {
          eyebrow: "MONTHLY CONTENT CALENDAR",
          title: "Monthly Content Calendar",
          sub: "Distribute topics and channels across the month for a steady publishing rhythm.",
          weekdays: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          footNote: "Illustrative layout · not real dates",
        };

  type Tag = { id: string; ko: string; en: string; color: string };
  const tags: Tag[] = [
    { id: "sns", ko: "SNS 주제", en: "SNS Topic", color: "#d4af37" },
    { id: "card", ko: "카드뉴스", en: "Card News", color: "#0f172a" },
    { id: "reels", ko: "릴스", en: "Reels", color: "#ef4444" },
    { id: "blog", ko: "블로그", en: "Blog", color: "#10b981" },
    { id: "ad", ko: "광고 테스트", en: "Ad Test", color: "#64748b" },
  ];
  const tagMap: Record<string, Tag> = tags.reduce(
    (acc, t) => ({ ...acc, [t.id]: t }),
    {} as Record<string, Tag>
  );

  // 5 weeks x 7 days. Each cell may hold up to 2 tag ids.
  const grid: string[][][] = [
    [["sns"], [], ["reels"], [], ["card"], ["blog"], []],
    [["sns", "card"], [], ["ad"], ["reels"], [], ["blog"], []],
    [["sns"], ["card"], [], ["reels"], ["ad"], [], ["blog"]],
    [[], ["sns"], ["card"], [], ["reels"], ["blog"], []],
    [["ad"], [], ["sns"], ["card"], [], ["reels"], []],
  ];

  return (
    <div className="w-full rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] font-black tracking-widest text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950 tracking-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs text-slate-600 max-w-md leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {L.sub}
        </p>
      </div>

      {/* Legend */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        {tags.map((t) => (
          <div key={t.id} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-[3px]"
              style={{ backgroundColor: t.color }}
              aria-hidden="true"
            />
            <span
              className="font-mono uppercase tracking-widest text-[9px] text-slate-600"
              style={{ wordBreak: "keep-all" }}
            >
              {lang === "ko" ? t.ko : t.en}
            </span>
          </div>
        ))}
      </div>

      {/* Weekday header */}
      <div className="mt-5 grid grid-cols-7 gap-1.5 sm:gap-2">
        {L.weekdays.map((w, i) => (
          <div
            key={w}
            className={`text-center font-mono uppercase tracking-widest text-[9px] sm:text-[10px] pb-1 ${
              i >= 5 ? "text-[#d4af37]" : "text-slate-400"
            }`}
          >
            {w}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="mt-1 grid grid-cols-7 gap-1.5 sm:gap-2">
        {grid.map((week, wi) =>
          week.map((cell, di) => {
            const idx = wi * 7 + di;
            const isWeekend = di >= 5;
            return (
              <motion.div
                key={`c-${wi}-${di}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.012 * idx }}
                className={`relative aspect-square rounded-xl border p-1 sm:p-1.5 flex flex-col gap-1 ${
                  isWeekend
                    ? "border-slate-100 bg-slate-50/40"
                    : "border-slate-100 bg-white/60"
                }`}
              >
                <span className="font-mono text-[8px] sm:text-[9px] text-slate-300 leading-none self-end">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-0.5 sm:gap-1 mt-auto">
                  {cell.map((tid, ti) => {
                    const tag = tagMap[tid];
                    if (!tag) return null;
                    return (
                      <div
                        key={`${tid}-${ti}`}
                        className="flex items-center gap-1 rounded-[5px] px-1 py-[2px]"
                        style={{ backgroundColor: tag.color + "1a" }}
                      >
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: tag.color }}
                          aria-hidden="true"
                        />
                        <span
                          className="truncate font-sans text-[7px] sm:text-[9px] font-bold leading-none"
                          style={{ color: tag.color, wordBreak: "keep-all" }}
                        >
                          {lang === "ko" ? tag.ko : tag.en}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 text-slate-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
        </svg>
        <span
          className="font-mono uppercase tracking-widest text-[8px] sm:text-[9px] text-slate-400"
          style={{ wordBreak: "keep-all" }}
        >
          {L.footNote}
        </span>
      </div>
    </div>
  );
}

