// AUTO-GENERATED — TRUSTA V3 evidence-card infographics (white, spec hierarchy).
import { motion, AnimatePresence } from "motion/react";

export function GlobalReachMap({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "GLOBAL REACH",
          title: "전 세계에서 검색하고, 비교하고, 문의합니다",
          desc: "한국을 중심으로 이어진 5개 시장. 해외 고객이 직접 검색·비교·문의하며 트러스타를 만납니다.",
          hub: "한국",
          hubSub: "KOREA · HUB",
          verbs: ["검색", "비교", "문의"],
          journey: "고객 여정",
          markets: "연결 시장",
          overseas: "해외 고객",
          nodes: [
            { ko: "일본", en: "JAPAN" },
            { ko: "중국", en: "CHINA" },
            { ko: "동남아", en: "SEA" },
            { ko: "미국", en: "US" },
            { ko: "유럽", en: "EUROPE" },
          ],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "GLOBAL REACH",
          title: "Customers worldwide search, compare, and inquire",
          desc: "Five markets linked through one Korean hub. Overseas customers meet TRUSTA as they search, compare, and inquire.",
          hub: "KOREA",
          hubSub: "KOREA · HUB",
          verbs: ["SEARCH", "COMPARE", "INQUIRE"],
          journey: "CUSTOMER JOURNEY",
          markets: "LINKED MARKETS",
          overseas: "OVERSEAS",
          nodes: [
            { ko: "JAPAN", en: "JAPAN" },
            { ko: "CHINA", en: "CHINA" },
            { ko: "SEA", en: "SEA" },
            { ko: "US", en: "US" },
            { ko: "EUROPE", en: "EUROPE" },
          ],
          caption: "Concept · TRUSTA",
        };

  // Hub centered. Outer nodes pulled well inside the viewBox so the
  // node chips AND their EN sublabels never touch the edges.
  const cx = 200;
  const cy = 128;
  const spokes = [
    { x: 70, y: 52 }, // top-left
    { x: 330, y: 52 }, // top-right
    { x: 44, y: 134 }, // mid-left
    { x: 104, y: 220 }, // bottom-left
    { x: 296, y: 220 }, // bottom-right
  ];

  const mid = (p: { x: number; y: number }) => {
    const mx = (cx + p.x) / 2;
    const my = (cy + p.y) / 2 - 14;
    return { mx, my };
  };

  const curve = (p: { x: number; y: number }) => {
    const { mx, my } = mid(p);
    return `M ${cx} ${cy} Q ${mx} ${my} ${p.x} ${p.y}`;
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* eyebrow */}
      <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
        {L.eyebrow}
      </span>

      {/* title */}
      <h3
        className="mt-2 font-black text-lg sm:text-xl text-slate-950 leading-snug max-w-md"
        style={{ wordBreak: "keep-all" }}
      >
        {L.title}
      </h3>

      {/* desc */}
      <p
        className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-md"
        style={{ wordBreak: "keep-all" }}
      >
        {L.desc}
      </p>

      {/* concept map */}
      <div className="mt-6 rounded-2xl bg-slate-50/70 border border-slate-100 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-mono text-[11px] text-slate-400 tracking-widest uppercase">
            {L.markets}
          </span>
          <span className="font-mono text-[11px] text-slate-400 tracking-widest uppercase">
            {L.journey}
          </span>
        </div>

        <svg viewBox="-8 -8 416 282" className="w-full h-auto" aria-hidden="true">
          <defs>
            <radialGradient id="grm2-hub" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fffbe9" />
              <stop offset="100%" stopColor="#f8f4e3" />
            </radialGradient>
            <linearGradient id="grm2-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* spoke paths */}
          {spokes.map((p, i: number) => (
            <path
              key={`path-${i}`}
              d={curve(p)}
              fill="none"
              stroke="url(#grm2-line)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeDasharray="2 5"
            />
          ))}

          {/* animated journey dots */}
          {spokes.map((p, i: number) => (
            <motion.circle
              key={`dot-${i}`}
              r={2.6}
              fill="#d4af37"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.32,
                ease: "easeInOut",
              }}
            >
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                begin={`${i * 0.32}s`}
                path={curve(p)}
              />
            </motion.circle>
          ))}

          {/* verb labels along spokes */}
          {spokes.map((p, i: number) => {
            const { mx, my } = mid(p);
            return (
              <text
                key={`verb-${i}`}
                x={mx}
                y={my + 3}
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

          {/* market nodes as pill chips */}
          {spokes.map((p, i: number) => (
            <motion.g
              key={`node-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            >
              <rect
                x={p.x - 30}
                y={p.y - 16}
                width={60}
                height={32}
                rx={16}
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth={1.25}
              />
              <circle cx={p.x - 18} cy={p.y} r={3} fill="#10b981" />
              <text
                x={p.x + 4}
                y={p.y - 2}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="900"
                fill="#0f172a"
              >
                {L.nodes[i].ko}
              </text>
              <text
                x={p.x + 4}
                y={p.y + 8}
                textAnchor="middle"
                className="font-mono"
                fontSize="5.5"
                letterSpacing="0.6"
                fill="#94a3b8"
              >
                {L.nodes[i].en}
              </text>
            </motion.g>
          ))}

          {/* central Korea hub */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <circle cx={cx} cy={cy} r={40} fill="#d4af37" opacity={0.08} />
            <circle
              cx={cx}
              cy={cy}
              r={30}
              fill="url(#grm2-hub)"
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

        {/* legend */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
          {L.verbs.map((v: string, i: number) => (
            <div key={`lg-${i}`} className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              <span className="font-mono uppercase tracking-widest text-[9px] text-slate-500">
                {v}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            <span className="font-mono uppercase tracking-widest text-[9px] text-slate-500">
              {L.overseas}
            </span>
          </div>
        </div>
      </div>

      {/* caption */}
      <p className="mt-4 text-[10px] text-slate-400 font-mono">{L.caption}</p>
    </div>
  );
}

export function TranslationVsLocalization({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "TRANSLATION VS LOCALIZATION",
          title: "번역과 현지화는 다릅니다",
          desc: "단어만 바꾸면 의미는 통해도 마음은 움직이지 않습니다. 현지화는 시장의 언어로 다시 씁니다.",
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
          condLabel: "현지화 4조건",
          items: [
            { t: "자연스러운 말투", d: "원어민이 실제로 쓰는 표현으로" },
            { t: "문화에 맞는 이미지 톤", d: "현지 정서에 어울리는 비주얼" },
            { t: "과장 없는 믿을 수 있는 증거", d: "검증 가능한 데이터·후기" },
            { t: "문의·상담으로 이어지는 흐름", d: "다음 행동을 자연스럽게 유도" },
          ],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "TRANSLATION VS LOCALIZATION",
          title: "Translation isn't localization",
          desc: "Swapping words preserves meaning but not emotion. Localization rewrites in the market's own language.",
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
          condLabel: "4 conditions",
          items: [
            { t: "Natural, native phrasing", d: "How locals actually speak" },
            { t: "Culturally tuned image tone", d: "Visuals that fit local sentiment" },
            { t: "Credible, non-exaggerated proof", d: "Verifiable data & reviews" },
            { t: "A flow toward inquiry & consult", d: "Guides the next action naturally" },
          ],
          caption: "Concept · TRUSTA",
        };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-2xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Two comparison columns */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* LEFT — Translation (muted / literal) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col rounded-2xl bg-slate-50/70 border border-slate-100 p-5"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200">
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h10M4 17h7"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className="leading-none min-w-0">
              <p className="text-sm font-black text-slate-500">{L.leftTag}</p>
              <p className="mt-1 font-mono uppercase tracking-[0.16em] text-[9px] text-slate-400">
                {L.leftEn}
              </p>
            </div>
          </div>

          <p
            className="mt-3 text-xs text-slate-500 leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            {L.leftDesc}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {L.leftRows.map((row: { src: string; dst: string }, i: number) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-slate-100 px-3.5 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-[11px] text-slate-600 leading-snug min-w-0 break-words"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {row.src}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 shrink-0 text-slate-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="mt-1 block text-[11px] font-mono text-slate-400 leading-snug break-words">
                  {row.dst}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4">
            <div className="flex items-start gap-2 rounded-xl bg-white border border-slate-100 px-3.5 py-2.5">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 shrink-0 mt-px"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" fill="none" stroke="#94a3b8" strokeWidth="1.8" />
                <path
                  d="M12 7.5v5M12 16h.01"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p
                className="text-[10px] leading-relaxed text-slate-400"
                style={{ wordBreak: "keep-all" }}
              >
                {L.leftNote}
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Localization (gold-accented checklist) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex flex-col rounded-2xl bg-white border border-[#d4af37]/35 p-5 overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[#d4af37]/[0.07] blur-2xl"
          />
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/12 ring-1 ring-[#d4af37]/35">
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path
                  d="M12 3l2.5 5.2 5.7.8-4.1 4 1 5.7L12 18.7 6.9 21.5l1-5.7-4.1-4 5.7-.8z"
                  fill="#d4af37"
                  fillOpacity="0.18"
                  stroke="#d4af37"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="leading-none min-w-0">
              <p className="text-sm font-black text-slate-950">{L.rightTag}</p>
              <p className="mt-1 font-mono uppercase tracking-[0.16em] text-[9px] text-[#d4af37]">
                {L.rightEn}
              </p>
            </div>
          </div>

          <p
            className="mt-3 text-xs text-slate-600 leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            {L.rightDesc}
          </p>

          <p className="mt-4 font-mono text-[10px] tracking-[0.14em] text-slate-400 uppercase">
            {L.condLabel}
          </p>

          <div className="mt-2.5 flex flex-col gap-2">
            {L.items.map((item: { t: string; d: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-2.5 rounded-xl bg-slate-50/70 border border-slate-100 px-3.5 py-2.5"
              >
                <span className="mt-0.5 font-mono text-[11px] text-slate-400 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
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
                    className="text-xs sm:text-[13px] font-black text-slate-950 leading-snug"
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
            ))}
          </div>
        </motion.div>
      </div>

      {/* Caption */}
      <p className="mt-7 text-[10px] text-slate-400 font-mono">{L.caption}</p>
    </div>
  );
}

export function SentenceRoleSplit({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "SENTENCE ROLES",
          title: "문장은 통째로 옮기지 않습니다",
          desc: "원본 상세페이지의 모든 문장을 한 줄씩 분해해 다섯 개의 역할 레인으로 분류하고, 발행 전 다섯 항목을 다시 점검합니다.",
          inputLabel: "입력 · 원문 문장",
          stack: ["문장 #1", "문장 #2", "문장 #3"],
          framework: "역할 분류 프레임워크",
          recheckTitle: "발행 전 재점검",
          recheck: ["말투", "이미지 톤", "검색 키워드", "랜딩 흐름", "광고 리스크"],
          lanes: [
            { k: "keep", t: "유지", d: "그대로 살릴 핵심 메시지", c: "#10b981" },
            { k: "change", t: "변경", d: "현지 정서에 맞게 재작성", c: "#d4af37" },
            { k: "delete", t: "삭제", d: "오해·과장 소지로 제거", c: "#ef4444" },
            { k: "evidence", t: "증거 필요", d: "출처·임상 근거 보강", c: "#0f172a" },
            { k: "localize", t: "현지화 필요", d: "언어·문화 번역 재구성", c: "#64748b" },
          ],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "SENTENCE ROLES",
          title: "We never relocate sentences wholesale",
          desc: "Every sentence of the source page is broken out line by line, sorted into five role lanes, then re-checked across five gates before publishing.",
          inputLabel: "Input · source sentences",
          stack: ["Sentence #1", "Sentence #2", "Sentence #3"],
          framework: "Role-split framework",
          recheckTitle: "Pre-publish re-check",
          recheck: ["Tone of voice", "Image tone", "Search keywords", "Landing flow", "Ad risk"],
          lanes: [
            { k: "keep", t: "Keep", d: "Core message worth preserving", c: "#10b981" },
            { k: "change", t: "Change", d: "Rewrite for local sentiment", c: "#d4af37" },
            { k: "delete", t: "Delete", d: "Cut overstated / risky claims", c: "#ef4444" },
            { k: "evidence", t: "Needs evidence", d: "Add sources & clinical proof", c: "#0f172a" },
            { k: "localize", t: "Needs localization", d: "Re-translate language & culture", c: "#64748b" },
          ],
          caption: "Concept · TRUSTA",
        };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header hierarchy */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="text-lg sm:text-xl font-black text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Body: input sentences -> 5 role lanes */}
      <div className="mt-6 sm:mt-7 grid grid-cols-1 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.6fr)] gap-6 sm:gap-8 items-stretch">
        {/* Input stack */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-slate-400">
            {L.inputLabel}
          </span>
          <div className="relative flex flex-1 flex-col justify-center gap-2 rounded-2xl bg-slate-50/70 border border-slate-100 p-3.5">
            {L.stack.map((s: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-[0_1px_0_rgba(15,23,42,0.03)]"
              >
                <span
                  className="font-mono text-[10px] text-slate-400 shrink-0"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-sans text-[11px] sm:text-xs text-slate-700"
                  style={{ wordBreak: "keep-all" }}
                >
                  {s}
                </span>
              </motion.div>
            ))}
            <div className="flex items-center gap-1 px-1 pt-0.5" aria-hidden="true">
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="h-1 w-1 rounded-full bg-slate-300" />
            </div>
            {/* flow arrow into the lanes */}
            <svg
              viewBox="0 0 24 24"
              className="absolute -right-4 top-1/2 hidden lg:block h-7 w-7 -translate-y-1/2 text-[#d4af37]"
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

        {/* Role-split framework table */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-slate-400">
            {L.framework}
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
                  transition={{ duration: 0.4, delay: 0.12 + i * 0.07 }}
                  className="group flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-3 py-2.5"
                >
                  <span
                    className="font-mono text-[11px] text-slate-400 shrink-0 w-5 text-center"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: lane.c + "14" }}
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
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                      <span
                        className="text-xs sm:text-[13px] font-black text-slate-950"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {lane.t}
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-[0.14em]"
                        style={{ color: lane.c }}
                      >
                        {lane.k}
                      </span>
                    </div>
                    <p
                      className="font-sans text-[11px] text-slate-500 leading-snug"
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

      {/* Re-check chip row */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-slate-400">
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
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-50/70 border border-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600"
              style={{ wordBreak: "keep-all" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0 text-[#d4af37]"
                fill="none"
                aria-hidden="true"
              >
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

      {/* Neutral caption */}
      <div className="mt-5">
        <span className="text-[10px] text-slate-400 font-mono">{L.caption}</span>
      </div>
    </div>
  );
}

export function RedOceanSaturation({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "DOMESTIC SATURATION",
          title: "포화된 국내 레드오션",
          desc: "광고비는 위로, 노출은 아래로. 같은 키워드에 게시물이 쌓이면서 국내 시장만으로는 성장이 정체되는 구조입니다.",
          costTitle: "광고 단가 추세",
          costDesc: "시간이 갈수록 우상향",
          crowdTitle: "동일 키워드 게시물",
          crowdDesc: "갈수록 빽빽해지는 경쟁",
          trendWord: "상승",
          trendUnit: "추세",
          crowdWord: "포화",
          crowdUnit: "구간",
          channels: ["인스타그램", "블로그", "쇼핑몰"],
          axis: ["과거", "", "", "", "현재"],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "DOMESTIC SATURATION",
          title: "Saturated Domestic Red Ocean",
          desc: "Ad cost climbs while reach sinks. As posts pile up on the same keyword, a domestic-only market structurally stalls growth.",
          costTitle: "Ad-cost trend",
          costDesc: "Rising over time",
          crowdTitle: "Posts on same keyword",
          crowdDesc: "Competition keeps thickening",
          trendWord: "Rising",
          trendUnit: "trend",
          crowdWord: "Saturated",
          crowdUnit: "zone",
          channels: ["Instagram", "Blog", "Storefront"],
          axis: ["Past", "", "", "", "Now"],
          caption: "Concept · TRUSTA",
        };

  // Inset plot so endpoints / dots / labels never clip in overflow-hidden wrapper.
  const VB_W = 300;
  const PAD_L = 16;
  const PAD_R = 16;
  const PLOT_TOP = 14;
  const PLOT_BOTTOM = 92;
  const plotW = VB_W - PAD_L - PAD_R;
  // Qualitative rising shape only — NOT real data values.
  const shape = [0.18, 0.34, 0.46, 0.7, 0.92];
  const stepX = plotW / (shape.length - 1);
  const pts: [number, number][] = shape.map((v, i) => [
    PAD_L + i * stepX,
    PLOT_BOTTOM - v * (PLOT_BOTTOM - PLOT_TOP),
  ]);
  const linePath = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L${(VB_W - PAD_R).toFixed(1)},${PLOT_BOTTOM} L${PAD_L},${PLOT_BOTTOM} Z`;
  const gridYs = [PLOT_BOTTOM, 73, 53, 33, PLOT_TOP];

  // Crowding bars: more & taller toward the right = denser competition (qualitative).
  const rows: { name: string; bars: number[] }[] = L.channels.map(
    (name, ci) => ({
      name,
      bars: [0.4, 0.5, 0.62, 0.74, 0.86, 0.96].map(
        (b) => Math.min(1, b + ci * 0.02),
      ),
    }),
  );

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2.5">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-2xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Two evidence sub-cards */}
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 01 — rising ad-cost line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl bg-slate-50/70 border border-slate-100 p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div style={{ wordBreak: "keep-all" }}>
              <span className="font-mono text-[11px] text-slate-400">01</span>
              <p className="mt-1 text-sm font-black text-slate-950">
                {L.costTitle}
              </p>
              <p className="text-[11px] text-slate-500">{L.costDesc}</p>
            </div>
            <div className="flex items-baseline gap-1 shrink-0">
              <span className="font-black text-2xl sm:text-3xl text-slate-950 leading-none">
                {L.trendWord}
              </span>
              <span className="text-xs text-slate-400">{L.trendUnit}</span>
            </div>
          </div>

          <svg
            viewBox="0 0 300 112"
            className="w-full h-auto mt-3"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roCostFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </linearGradient>
            </defs>
            {gridYs.map((y) => (
              <line
                key={y}
                x1={PAD_L}
                y1={y}
                x2={VB_W - PAD_R}
                y2={y}
                stroke="#eef2f7"
                strokeWidth="1"
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
              stroke="#0f172a"
              strokeWidth="2.2"
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
                r={i === pts.length - 1 ? 3.6 : 2.2}
                fill={i === pts.length - 1 ? "#d4af37" : "#ffffff"}
                stroke={i === pts.length - 1 ? "#d4af37" : "#0f172a"}
                strokeWidth="1.6"
              />
            ))}
            {/* up-arrow trend marker near the last point */}
            <motion.g
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <path
                d={`M${(VB_W - PAD_R - 8).toFixed(1)},${(PLOT_TOP + 5).toFixed(1)} l5,-5 l5,5`}
                fill="none"
                stroke="#d4af37"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1={VB_W - PAD_R - 3}
                y1={PLOT_TOP}
                x2={VB_W - PAD_R - 3}
                y2={PLOT_TOP + 9}
                stroke="#d4af37"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </motion.g>
            {L.axis.map((lab, i) =>
              lab ? (
                <text
                  key={i}
                  x={PAD_L + i * stepX}
                  y="107"
                  textAnchor={i === 0 ? "start" : i === L.axis.length - 1 ? "end" : "middle"}
                  className="font-mono"
                  fontSize="7.5"
                  fill="#94a3b8"
                >
                  {lab}
                </text>
              ) : null,
            )}
          </svg>
        </motion.div>

        {/* 02 — crowded post bars */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl bg-white border border-slate-100 p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div style={{ wordBreak: "keep-all" }}>
              <span className="font-mono text-[11px] text-slate-400">02</span>
              <p className="mt-1 text-sm font-black text-slate-950">
                {L.crowdTitle}
              </p>
              <p className="text-[11px] text-slate-500">{L.crowdDesc}</p>
            </div>
            <div className="flex items-baseline gap-1 shrink-0">
              <span className="font-black text-2xl sm:text-3xl text-slate-950 leading-none">
                {L.crowdWord}
              </span>
              <span className="text-xs text-slate-400">{L.crowdUnit}</span>
            </div>
          </div>

          <div className="mt-4 space-y-3.5">
            {rows.map((row, ri) => (
              <div key={ri}>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-xs font-bold text-slate-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {row.name}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {String(ri + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-1.5 flex items-end gap-[3px] h-9 overflow-hidden">
                  {row.bars.map((h, bi) => {
                    const last = bi === row.bars.length - 1;
                    return (
                      <motion.div
                        key={bi}
                        className="flex-1 rounded-t-[3px]"
                        style={{
                          background: last ? "#d4af37" : "#cbd5e1",
                          height: `${Math.round(h * 100)}%`,
                          transformOrigin: "bottom",
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: ri * 0.12 + bi * 0.05,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom emphasis strip — qualitative, no fake numbers */}
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M4 16 L9 11 L13 14 L20 6"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 6 L20 11 M20 6 L15 6"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p
          className="text-[13px] sm:text-sm font-bold text-slate-700 leading-snug"
          style={{ wordBreak: "keep-all" }}
        >
          {lang === "ko"
            ? "더 써도 덜 보이는 구조 — 국내 한정은 성장 정체로 이어집니다."
            : "Spend more, seen less — a domestic-only scope leads to stalled growth."}
        </p>
      </div>

      {/* Neutral caption */}
      <p className="mt-4 text-[10px] text-slate-400 font-mono">{L.caption}</p>
    </div>
  );
}

export function RedesignMapping({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "REDESIGN, NOT MORE POSTS",
          title: "더 많이 올리지 말고, 다시 설계하세요",
          desc:
            "콘텐츠 양이 아니라 구조를 바꿉니다. 국내용 자산을 해외 고객이 신뢰하고 문의하는 흐름으로 재배치합니다.",
          fromTag: "지금 · 국내 기준",
          toTag: "재설계 · 해외 기준",
          rows: [
            {
              from: "한국 상세페이지",
              fromSub: "정보 나열 · 국내 시술 관행 중심",
              to: "일본 고객용 랜딩",
              toSub: "안심 동선 · 예약/상담 CTA 중심 재배치",
            },
            {
              from: "전후사진 중심 콘텐츠",
              fromSub: "비포·애프터 비주얼에 의존",
              to: "중국·동남아 신뢰 흐름",
              toSub: "자격 · 후기 · 프로세스로 신뢰 단계화",
            },
            {
              from: "국내 카드뉴스",
              fromSub: "한 번 보고 스크롤로 흘려보냄",
              to: "해외 고객 저장·문의 구조",
              toSub: "저장 → 재방문 → 문의로 이어지는 설계",
            },
          ],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "REDESIGN, NOT MORE POSTS",
          title: "Redesign the flow, don't just post more",
          desc:
            "We change the structure, not the volume. Domestic assets are re-mapped into a flow overseas customers trust and inquire through.",
          fromTag: "Now · domestic",
          toTag: "Redesigned · global",
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
          caption: "Concept · TRUSTA",
        };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
            {L.eyebrow}
          </span>
          <h3
            className="font-black text-lg sm:text-xl text-slate-950 leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            {L.title}
          </h3>
          <p
            className="max-w-2xl text-xs sm:text-[13px] text-slate-500 leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            {L.desc}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center gap-2 px-1">
            <span className="flex-1 font-mono uppercase tracking-[0.16em] text-[10px] text-slate-400">
              {L.fromTag}
            </span>
            <span className="w-8 shrink-0 sm:w-10" aria-hidden="true" />
            <span className="flex-1 text-right font-mono uppercase tracking-[0.16em] text-[10px] text-[#d4af37]">
              {L.toTag}
            </span>
          </div>

          {L.rows.map(
            (
              row: { from: string; fromSub: string; to: string; toSub: string },
              i: number,
            ) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-stretch gap-2 sm:gap-3"
              >
                <div className="min-w-0 flex-1 rounded-2xl border border-slate-100 bg-slate-50/70 px-3.5 py-3 sm:px-4 sm:py-3.5">
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <span className="font-mono text-[11px] text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-1 w-1 rounded-full bg-slate-300"
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className="text-xs sm:text-sm font-black text-slate-500 leading-tight"
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

                <div
                  className="flex w-8 shrink-0 items-center justify-center sm:w-10"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 44 24"
                    className="w-full h-auto"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id={`rm-arrow-${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>
                    <circle cx="5" cy="12" r="2.5" fill="#cbd5e1" />
                    <line
                      x1="7"
                      y1="12"
                      x2="31"
                      y2="12"
                      stroke={`url(#rm-arrow-${i})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 7 L37 12 L28 17"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0 flex-1 rounded-2xl border border-[#d4af37]/30 bg-white px-3.5 py-3 sm:px-4 sm:py-3.5">
                  <div className="mb-1.5 flex items-center justify-end gap-1.5">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#10b981]"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] text-[#d4af37]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p
                    className="text-right text-xs sm:text-sm font-black text-slate-950 leading-tight"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {row.to}
                  </p>
                  <p
                    className="mt-1 text-right text-[10px] sm:text-[11px] text-slate-500 leading-snug"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {row.toSub}
                  </p>
                </div>
              </motion.div>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
          <span
            className="h-1 w-1 rounded-full bg-[#d4af37]"
            aria-hidden="true"
          />
          <span className="text-[10px] text-slate-400 font-mono">
            {L.caption}
          </span>
        </div>
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
          desc: "콘텐츠 노출에서 재방문까지, 단계마다 신뢰 요소가 이탈을 막고 다음 단계로 이어준다.",
          stages: [
            { label: "콘텐츠 노출", desc: "SNS·검색에서 브랜드 발견" },
            { label: "랜딩 유입", desc: "랜딩페이지 도착·탐색" },
            { label: "문의·상담", desc: "DM·폼·채팅 문의 발생" },
            { label: "예약", desc: "시술·진료 예약 확정" },
            { label: "재방문", desc: "리텐션·재예약 전환" },
          ],
          trustLabel: "받쳐주는 신뢰 요소",
          trust: ["후기", "인증", "과정", "FAQ"],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "CONVERSION FLOW",
          title: "Conversion Funnel",
          desc: "From content reach to return, trust factors curb drop-off and carry each step into the next.",
          stages: [
            { label: "Content Reach", desc: "Discovered via social & search" },
            { label: "Landing Visit", desc: "Arrives & explores the page" },
            { label: "Inquiry", desc: "DM, form & chat inquiries" },
            { label: "Booking", desc: "Procedure or visit confirmed" },
            { label: "Return", desc: "Retention & rebooking" },
          ],
          trustLabel: "Trust factors at work",
          trust: ["Reviews", "Certs", "Process", "FAQ"],
          caption: "Concept · TRUSTA",
        };

  // tapering widths (widest -> narrowest), purely qualitative shape (no data values)
  const widths = [100, 82, 66, 52, 40];
  const golds = ["#f4ead0", "#ecdcae", "#e2ca86", "#d4af37", "#bf9a28"];
  const inkLight = (i: number) => (i >= 3 ? "#ffffff" : "#0f172a");

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2.5">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950 leading-snug"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Funnel: numbered tapering bars, stage labels only */}
      <div className="mt-7 flex flex-col gap-3">
        {L.stages.map((s: { label: string; desc: string }, i: number) => {
          const w = widths[i];
          const num = String(i + 1).padStart(2, "0");
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[auto_minmax(0,1fr)_minmax(120px,180px)] items-center gap-3 sm:gap-4"
            >
              {/* Stage index */}
              <span className="font-mono text-[11px] text-slate-400 w-6 shrink-0 tabular-nums">
                {num}
              </span>

              {/* Tapering bar */}
              <div className="w-full">
                <div
                  className="flex items-center rounded-2xl px-4 py-3"
                  style={{
                    width: `${w}%`,
                    minWidth: "118px",
                    backgroundColor: golds[i],
                    boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.05)",
                  }}
                >
                  <span
                    className="truncate text-[12px] sm:text-[13px] font-extrabold leading-none"
                    style={{ color: inkLight(i), wordBreak: "keep-all" }}
                  >
                    {s.label}
                  </span>
                </div>
              </div>

              {/* Stage description (desktop only, kept inside cell) */}
              <div className="hidden sm:flex items-start gap-2" style={{ wordBreak: "keep-all" }}>
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: golds[i] }}
                />
                <p className="text-[10px] leading-snug text-slate-500">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust factors strip */}
      <div className="mt-7 rounded-2xl bg-slate-50/70 border border-slate-100 px-4 py-4">
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path
              d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z"
              fill="none"
              stroke="#d4af37"
              strokeWidth={1.6}
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4"
              fill="none"
              stroke="#10b981"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-mono uppercase tracking-[0.14em] text-[9px] text-slate-400">
            {L.trustLabel}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {L.trust.map((t: string) => (
            <span
              key={t}
              className="rounded-full border border-[#d4af37]/30 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700"
              style={{ wordBreak: "keep-all" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Neutral caption */}
      <p className="mt-5 text-[10px] text-slate-400 font-mono">{L.caption}</p>
    </div>
  );
}

export function MultiChannelDiffusion({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "ONE CORE, MANY CHANNELS",
          title: "콘텐츠 1개, 채널 전방위 확산",
          desc: "잘 만든 핵심 콘텐츠 1개를 각 채널 문법에 맞게 변형해 동시에 노출합니다.",
          coreLabel: "핵심 콘텐츠",
          coreNum: "1",
          coreUnit: "개 원본",
          fanLabel: "다채널 확산",
          fanNum: "6",
          fanUnit: "개 채널",
          channels: [
            { id: "ig", name: "Instagram", tag: "릴스·피드" },
            { id: "fb", name: "Facebook", tag: "페이지" },
            { id: "th", name: "Threads", tag: "텍스트" },
            { id: "x", name: "X", tag: "포스트" },
            { id: "bl", name: "블로그", tag: "SEO 본문" },
            { id: "cc", name: "카드뉴스", tag: "캐러셀" },
          ],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "ONE CORE, MANY CHANNELS",
          title: "One Core, Diffused Everywhere",
          desc: "One strong core asset, reshaped to each channel's grammar and published in parallel.",
          coreLabel: "Core Content",
          coreNum: "1",
          coreUnit: "source",
          fanLabel: "Multi-Channel",
          fanNum: "6",
          fanUnit: "channels",
          channels: [
            { id: "ig", name: "Instagram", tag: "Reels·Feed" },
            { id: "fb", name: "Facebook", tag: "Page" },
            { id: "th", name: "Threads", tag: "Text" },
            { id: "x", name: "X", tag: "Posts" },
            { id: "bl", name: "Blog", tag: "SEO body" },
            { id: "cc", name: "Card News", tag: "Carousel" },
          ],
          caption: "Concept · TRUSTA",
        };

  const Glyph = ({ id }: { id: string }) => {
    const p = {
      fill: "none",
      stroke: "#0f172a",
      strokeWidth: 1.5,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };
    if (id === "ig")
      return (
        <g {...p}>
          <rect x="-6" y="-6" width="12" height="12" rx="3.5" />
          <circle cx="0" cy="0" r="3" />
          <circle cx="3.7" cy="-3.7" r="0.5" fill="#0f172a" stroke="none" />
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
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3 className="font-black text-lg sm:text-xl text-slate-950 leading-tight" style={{ wordBreak: "keep-all" }}>
          {L.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-md" style={{ wordBreak: "keep-all" }}>
          {L.desc}
        </p>
      </div>

      {/* hub + chips */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-6 sm:gap-8 items-center">
        {/* HUB: core node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto sm:mx-0 w-[150px]"
        >
          <svg viewBox="0 0 150 150" className="w-full h-auto" aria-hidden="true">
            <defs>
              <radialGradient id="mcd-core" cx="50%" cy="42%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fbf5e3" />
              </radialGradient>
            </defs>
            {[52, 64].map((r, i) => (
              <motion.circle
                key={`pulse-${i}`}
                cx={75}
                cy={75}
                r={r}
                fill="none"
                stroke="#d4af37"
                strokeWidth={1}
                initial={{ opacity: 0.16 }}
                whileInView={{ opacity: [0.16, 0.04, 0.16] }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
              />
            ))}
            <circle cx={75} cy={75} r={40} fill="url(#mcd-core)" stroke="#d4af37" strokeWidth={1.6} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2" style={{ wordBreak: "keep-all" }}>
            <span className="font-mono text-[8px] tracking-[0.14em] uppercase text-slate-400">{L.coreLabel}</span>
            <span className="leading-none mt-1">
              <span className="font-black text-2xl sm:text-3xl text-slate-950">{L.coreNum}</span>
              <span className="text-xs text-slate-400 ml-0.5">{L.coreUnit}</span>
            </span>
          </div>
        </motion.div>

        {/* CHIPS */}
        <div className="grid grid-cols-2 gap-2.5 min-w-0">
          {L.channels.map((ch: { id: string; name: string; tag: string }, i: number) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.07 }}
              className="flex items-center gap-2.5 rounded-2xl bg-slate-50/70 border border-slate-100 px-3 py-2.5 min-w-0"
            >
              <span className="grid place-items-center h-8 w-8 shrink-0 rounded-xl bg-white border border-slate-100">
                <svg viewBox="-9 -9 18 18" className="h-4 w-4" aria-hidden="true">
                  <Glyph id={ch.id} />
                </svg>
              </span>
              <span className="flex flex-col leading-tight min-w-0" style={{ wordBreak: "keep-all" }}>
                <span className="font-black text-slate-950 text-[11px] truncate">{ch.name}</span>
                <span className="font-mono uppercase tracking-wide text-[8px] text-slate-400 truncate">{ch.tag}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* flow summary row */}
      <div className="mt-7 grid grid-cols-[1fr,auto,1fr] items-center gap-3 rounded-2xl bg-slate-50/70 border border-slate-100 px-4 py-3">
        <div className="flex flex-col items-start" style={{ wordBreak: "keep-all" }}>
          <span className="font-mono text-[8px] tracking-[0.14em] uppercase text-slate-400">{L.coreLabel}</span>
          <span className="leading-none mt-1">
            <span className="font-black text-xl sm:text-2xl text-slate-950">{L.coreNum}</span>
            <span className="text-[10px] text-slate-400 ml-0.5">{L.coreUnit}</span>
          </span>
        </div>
        <svg viewBox="0 0 48 10" className="h-2.5 w-14 shrink-0" aria-hidden="true">
          <line x1="2" y1="5" x2="40" y2="5" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="2.5 2.5" />
          <path d="M40 1.5 L45 5 L40 8.5" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col items-end text-right" style={{ wordBreak: "keep-all" }}>
          <span className="font-mono text-[8px] tracking-[0.14em] uppercase text-[#10b981]">{L.fanLabel}</span>
          <span className="leading-none mt-1">
            <span className="font-black text-xl sm:text-2xl text-slate-950">{L.fanNum}</span>
            <span className="text-[10px] text-slate-400 ml-0.5">{L.fanUnit}</span>
          </span>
        </div>
      </div>

      {/* caption */}
      <div className="mt-5">
        <span className="text-[10px] text-slate-400 font-mono">{L.caption}</span>
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
          desc: "타겟 검색 키워드가 블로그와 랜딩페이지를 거쳐 실제 문의로 전환되는 흐름입니다.",
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
          ai: "AI 검색",
          aiSub: "ChatGPT · Perplexity",
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "SEARCH TO INQUIRY",
          title: "The path from search to inquiry",
          desc: "Targeted search keywords flow through blogs and landing pages into real inquiries.",
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
          ai: "AI Search",
          aiSub: "ChatGPT · Perplexity",
          caption: "Concept · TRUSTA",
        };

  const renderIcon = (tag: string) => {
    if (tag === "01")
      return (
        <g>
          <circle cx="11" cy="11" r="6" />
          <line x1="16" y1="16" x2="21" y2="21" />
        </g>
      );
    if (tag === "02")
      return (
        <g>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="12.5" x2="16" y2="12.5" />
          <line x1="8" y1="16" x2="12.5" y2="16" />
        </g>
      );
    if (tag === "03")
      return (
        <g>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <line x1="4" y1="9" x2="20" y2="9" />
          <circle cx="6.6" cy="7" r="0.5" />
          <rect x="7.5" y="12" width="9" height="4.5" rx="1" />
        </g>
      );
    return (
      <g>
        <path d="M5 7h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
        <path d="M4.5 8.5l7.5 5 7.5-5" />
      </g>
    );
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2.5">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Badge row: SEO / AEO / GEO + AI Search */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {L.badges.map(({ k, d }, i: number) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5"
          >
            <span className="font-mono text-[10px] font-black tracking-[0.12em] text-[#d4af37]">
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
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.4 }}
          className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/[0.07] px-3 py-1.5"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-3 w-3"
            fill="none"
            stroke="#d4af37"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
          </svg>
          <span className="font-mono text-[9px] font-black uppercase tracking-[0.14em] text-[#b8932f]">
            {L.ai}
          </span>
          <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">
            {L.aiSub}
          </span>
        </motion.div>
      </div>

      {/* Horizontal 4-step path */}
      <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-2">
        {L.steps.map((s, i: number) => {
          const last = i === L.steps.length - 1;
          return (
            <div
              key={s.tag}
              className="flex flex-1 flex-col sm:flex-row sm:items-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className={
                  "relative flex w-full flex-1 flex-col gap-3 rounded-2xl border p-4 " +
                  (last
                    ? "border-emerald-200 bg-emerald-50/50"
                    : "border-slate-100 bg-slate-50/70")
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className={
                      "flex h-9 w-9 items-center justify-center rounded-xl " +
                      (last
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-white text-slate-700 border border-slate-100")
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {renderIcon(s.tag)}
                    </svg>
                  </span>
                  <span
                    className={
                      "font-mono text-[11px] font-black tracking-[0.1em] " +
                      (last ? "text-emerald-500" : "text-slate-400")
                    }
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="font-black text-[13px] leading-tight text-slate-950"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {s.name}
                  </span>
                  <span
                    className="text-[10px] leading-snug text-slate-500"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {s.desc}
                  </span>
                </div>
                {last && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
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
                  className="flex shrink-0 items-center justify-center self-center py-1 sm:px-1 sm:py-0"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 rotate-90 text-[#d4af37] sm:rotate-0"
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

      {/* Bottom caption */}
      <div className="mt-6 flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
        <span className="text-[10px] text-slate-400 font-mono">
          {L.caption}
        </span>
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
          frameLabel: "상세페이지 흐름",
          blocks: [
            { tag: "HERO", label: "히어로 · 한 줄 약속" },
            { tag: "EVIDENCE", label: "근거 · 데이터·인증·전후" },
            { tag: "REVIEWS", label: "후기 · 실사용 신뢰" },
            { tag: "CTA", label: "문의 · 행동 유도" },
          ],
          pins: [
            { n: "01", q: "어떤 고객인가", a: "타깃을 히어로 첫 줄에서 즉시 호명" },
            { n: "02", q: "어떤 의심 먼저", a: "가장 큰 불안을 상단에서 먼저 해소" },
            { n: "03", q: "어떤 증거 어디에", a: "의심 바로 아래 증거 블록 배치" },
            { n: "04", q: "문의 버튼 언제", a: "확신이 차오른 순간에 CTA 노출" },
          ],
          flow: "스크롤 흐름 = 의사결정 흐름",
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "LANDING REBUILT BY FLOW",
          title: "A Landing Rebuilt by Flow",
          desc: "We reorganize the page by the customer's decision order — not just by prettiness.",
          frameLabel: "Detail-page flow",
          blocks: [
            { tag: "HERO", label: "Hero · one-line promise" },
            { tag: "EVIDENCE", label: "Evidence · data, certs, before/after" },
            { tag: "REVIEWS", label: "Reviews · real-use trust" },
            { tag: "CTA", label: "Inquiry · call to action" },
          ],
          pins: [
            { n: "01", q: "Which customer", a: "Name the target in the hero's first line" },
            { n: "02", q: "Which doubt first", a: "Resolve the biggest fear up top" },
            { n: "03", q: "Which proof where", a: "Place evidence right under each doubt" },
            { n: "04", q: "When to inquire", a: "Reveal CTA at peak conviction" },
          ],
          flow: "Scroll flow = decision flow",
          caption: "Concept · TRUSTA",
        };

  const accent = (i: number) =>
    i === 1 ? "#d4af37" : i === 2 ? "#10b981" : "#0f172a";

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <div className="mb-6 sm:mb-7">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="mt-2 font-black text-lg sm:text-xl text-slate-950 leading-tight"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Body: wireframe + pins */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-6 sm:gap-8 items-stretch">
        {/* Left: phone/browser wireframe sub-card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5 flex flex-col"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] tracking-[0.14em] text-slate-400 uppercase">
              {L.frameLabel}
            </span>
            <span className="flex gap-1" aria-hidden="true">
              <span className="block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="block w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span className="block w-1.5 h-1.5 rounded-full bg-slate-200" />
            </span>
          </div>

          {/* viewBox padded so nothing clips; landscape-ish frame */}
          <svg
            viewBox="0 0 320 256"
            className="w-full h-auto"
            role="img"
            aria-label={L.frameLabel}
          >
            <defs>
              <linearGradient id="lrFrame" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fbfcfe" />
              </linearGradient>
            </defs>

            {/* browser shell */}
            <rect x="6" y="6" width="308" height="244" rx="16" fill="url(#lrFrame)" stroke="#e2e8f0" strokeWidth="1.5" />
            {/* chrome bar */}
            <rect x="6" y="6" width="308" height="26" rx="16" fill="#f1f5f9" />
            <rect x="6" y="22" width="308" height="10" fill="#f1f5f9" />
            <circle cx="22" cy="19" r="3" fill="#cbd5e1" />
            <circle cx="33" cy="19" r="3" fill="#e2e8f0" />
            <circle cx="44" cy="19" r="3" fill="#e2e8f0" />
            <rect x="60" y="13" width="244" height="12" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

            {/* 4 stacked decision blocks */}
            {[
              { y: 44, h: 46, i: 0 },
              { y: 96, h: 48, i: 1 },
              { y: 150, h: 44, i: 2 },
              { y: 200, h: 44, i: 3 },
            ].map((b) => (
              <g key={b.i}>
                <rect x="18" y={b.y} width="284" height={b.h} rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.4" />
                <rect x="18" y={b.y} width="4.5" height={b.h} rx="2.25" fill={accent(b.i)} opacity="0.9" />
                {/* tag chip */}
                <rect x="34" y={b.y + 8} width={b.i === 1 ? 70 : 54} height="13" rx="6.5" fill={accent(b.i)} opacity="0.1" />
                <rect x="40" y={b.y + 12} width={b.i === 1 ? 58 : 42} height="5" rx="2.5" fill={accent(b.i)} opacity="0.7" />
                {/* body skeleton line (not on CTA row) */}
                {b.i !== 3 && (
                  <rect x="34" y={b.y + 28} width={b.i === 0 ? 210 : 168} height="6" rx="3" fill="#e2e8f0" />
                )}

                {/* evidence chips on EVIDENCE row */}
                {b.i === 1 && (
                  <g>
                    {[0, 1, 2].map((c) => (
                      <rect key={c} x={228 + c * 22} y={b.y + 10} width="18" height="14" rx="7" fill="#fbf5e3" stroke="#d4af37" strokeWidth="1" />
                    ))}
                  </g>
                )}
                {/* review dots on REVIEWS row */}
                {b.i === 2 && (
                  <g fill="#d4af37">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <circle key={s} cx={236 + s * 12} cy={b.y + 16} r="3.2" />
                    ))}
                  </g>
                )}
                {/* CTA button on last row */}
                {b.i === 3 && (
                  <g>
                    <rect x="196" y={b.y + 11} width="92" height="22" rx="11" fill="#0f172a" />
                    <rect x="226" y={b.y + 20} width="32" height="5" rx="2.5" fill="#ffffff" opacity="0.85" />
                  </g>
                )}
              </g>
            ))}
          </svg>

          <span className="mt-3 block text-center font-mono uppercase tracking-[0.14em] text-[10px] text-slate-400">
            {L.flow}
          </span>
        </motion.div>

        {/* Right: numbered callout pins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {L.pins.map((p, i: number) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 hover:border-slate-200 transition-colors"
            >
              <div className="shrink-0 flex flex-col items-center">
                <svg viewBox="0 0 34 42" className="w-6 h-auto" aria-hidden="true">
                  <path
                    d="M17 2C9.3 2 3 8.2 3 15.7c0 8.5 11.2 20.8 13.2 23a1.05 1.05 0 0 0 1.6 0C19.8 36.5 31 24.2 31 15.7 31 8.2 24.7 2 17 2Z"
                    fill="#ffffff"
                    stroke="#d4af37"
                    strokeWidth="1.8"
                  />
                  <circle cx="17" cy="15.5" r="6" fill="#d4af37" opacity="0.14" />
                </svg>
                <span className="-mt-[30px] font-mono text-[11px] font-black text-slate-950">
                  {p.n}
                </span>
              </div>
              <div className="min-w-0 pt-0.5">
                <p
                  className="text-[13px] sm:text-sm font-black text-slate-950 leading-snug"
                  style={{ wordBreak: "keep-all" }}
                >
                  {p.q}
                </p>
                <p
                  className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed"
                  style={{ wordBreak: "keep-all" }}
                >
                  {p.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom caption */}
      <div className="mt-6 sm:mt-7 pt-4 border-t border-slate-100">
        <span className="text-[10px] text-slate-400 font-mono">{L.caption}</span>
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
          desc: "AI 초안은 자동 검증을 거치고, 마지막엔 반드시 사람이 검수합니다. 게이트를 통과한 결과만 발행됩니다.",
          steps: [
            { no: "01", name: "AI 초안", sub: "자동 생성" },
            { no: "02", name: "Graphify 검증", sub: "자동 체크" },
            { no: "03", name: "사람 검수 게이트", sub: "최종 판단", gate: true },
            { no: "04", name: "발행", sub: "라이브" },
          ],
          checkTitle: "검증 체크리스트",
          checks: ["근거 일치", "출처 추적", "광고법 리스크", "현지화 기준", "전환 흐름"],
          gateLabel: "GATE",
          gateTitle: "사람 검수 게이트",
          outcomes: [
            { k: "approve", label: "승인", sub: "그대로 발행" },
            { k: "hold", label: "보류", sub: "추가 검토" },
            { k: "edit", label: "수정", sub: "초안 반려" },
          ],
          note: "게이트는 우회할 수 없습니다. 사람 승인 없이는 발행되지 않습니다.",
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "VERIFY + HUMAN GATE",
          title: "AI drafts. Humans decide what ships.",
          desc: "Every AI draft passes automated verification, then a human reviews it. Only what clears the gate goes live.",
          steps: [
            { no: "01", name: "AI Draft", sub: "auto-generated" },
            { no: "02", name: "Graphify Verify", sub: "auto checks" },
            { no: "03", name: "Human Review Gate", sub: "final call", gate: true },
            { no: "04", name: "Publish", sub: "live" },
          ],
          checkTitle: "Verification checklist",
          checks: ["Evidence match", "Source trace", "Ad-law risk", "Localization", "Conversion flow"],
          gateLabel: "GATE",
          gateTitle: "Human review gate",
          outcomes: [
            { k: "approve", label: "Approve", sub: "ship as-is" },
            { k: "hold", label: "Hold", sub: "review more" },
            { k: "edit", label: "Revise", sub: "send back" },
          ],
          note: "The gate can't be bypassed. Nothing ships without human approval.",
          caption: "Concept · TRUSTA",
        };

  const outcomeStyle: Record<string, { dot: string; text: string; bg: string; border: string }> = {
    approve: { dot: "#10b981", text: "text-emerald-600", bg: "bg-emerald-50/70", border: "border-emerald-100" },
    hold: { dot: "#d4af37", text: "text-[#b8932f]", bg: "bg-amber-50/70", border: "border-amber-100" },
    edit: { dot: "#94a3b8", text: "text-slate-500", bg: "bg-slate-50/70", border: "border-slate-100" },
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
        {L.eyebrow}
      </span>
      <h3
        className="mt-2 font-black text-lg sm:text-xl text-slate-950 leading-snug"
        style={{ wordBreak: "keep-all" }}
      >
        {L.title}
      </h3>
      <p
        className="mt-2 max-w-2xl text-xs sm:text-[13px] text-slate-500 leading-relaxed"
        style={{ wordBreak: "keep-all" }}
      >
        {L.desc}
      </p>

      {/* Pipeline of white step cards */}
      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
        {L.steps.map((s, i: number) => {
          const isGate = !!s.gate;
          return (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={
                "relative rounded-2xl border p-3.5 sm:p-4 " +
                (isGate
                  ? "border-[#e7cf86] bg-gradient-to-b from-[#fdf7e8] to-white shadow-[0_8px_28px_-14px_rgba(212,175,55,0.5)]"
                  : "border-slate-100 bg-slate-50/70")
              }
            >
              {isGate && (
                <span className="absolute -top-2.5 left-3.5 rounded-full bg-[#d4af37] px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.16em] text-white font-mono">
                  {L.gateLabel}
                </span>
              )}
              <div className="flex items-center gap-1.5">
                <span
                  className={
                    "font-mono text-[11px] " + (isGate ? "text-[#b8932f]" : "text-slate-400")
                  }
                >
                  {s.no}
                </span>
                {isGate ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0">
                    <path
                      d="M12 3.2l7 3v4.4c0 4.4-3 7.7-7 9.2-4-1.5-7-4.8-7-9.2V6.2l7-3z"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </div>
              <div
                className={
                  "mt-1.5 text-sm font-black leading-tight " +
                  (isGate ? "text-slate-950" : "text-slate-800")
                }
                style={{ wordBreak: "keep-all" }}
              >
                {s.name}
              </div>
              <div className="mt-0.5 text-[10px] text-slate-400" style={{ wordBreak: "keep-all" }}>
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
      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        {/* Verification checklist */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5"
        >
          <span className="font-mono text-[11px] text-slate-400">{L.checkTitle}</span>
          <ul className="mt-3 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2">
            {L.checks.map((c: string) => (
              <li key={c} className="flex items-center gap-2">
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
                <span
                  className="text-xs sm:text-[13px] text-slate-600"
                  style={{ wordBreak: "keep-all" }}
                >
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Human review gate outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-[#e7cf86] bg-gradient-to-b from-[#fdf7e8] to-white p-4 sm:p-5"
        >
          <div className="flex items-center gap-2">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
              <path
                d="M12 3.2l7 3v4.4c0 4.4-3 7.7-7 9.2-4-1.5-7-4.8-7-9.2V6.2l7-3z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-[11px] text-[#b8932f]">{L.gateTitle}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {L.outcomes.map((o: { k: string; label: string; sub: string }) => {
              const st = outcomeStyle[o.k];
              return (
                <div
                  key={o.k}
                  className={"rounded-xl border px-2 py-2.5 text-center " + st.border + " " + st.bg}
                >
                  <span
                    className="mx-auto block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: st.dot }}
                    aria-hidden="true"
                  />
                  <div
                    className={"mt-1.5 text-xs font-black " + st.text}
                    style={{ wordBreak: "keep-all" }}
                  >
                    {o.label}
                  </div>
                  <div
                    className="mt-0.5 text-[10px] leading-tight text-slate-400"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {o.sub}
                  </div>
                </div>
              );
            })}
          </div>
          <p
            className="mt-3 text-[11px] leading-relaxed text-slate-500"
            style={{ wordBreak: "keep-all" }}
          >
            {L.note}
          </p>
        </motion.div>
      </div>

      {/* Caption */}
      <div className="mt-5 text-[10px] text-slate-400 font-mono">{L.caption}</div>
    </div>
  );
}

export function OneSystemHub({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "ONE CONNECTED SYSTEM",
          title: "하나로 연결된 시스템",
          desc:
            "여러 업체를 따로 관리하지 마세요. 모든 모듈이 하나의 시스템으로 연결됩니다. 당신은 한 곳만 보면 됩니다.",
          hub: "하나의 시스템",
          hubSub: "TRUSTA",
          countLabel: "연결된 모듈",
          countUnit: "개",
          watch: "당신이 보는 화면",
          watchUnit: "곳",
          note: "개념 시각화 · TRUSTA",
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
          desc:
            "Stop juggling vendors. Every module wires into a single system, so you only ever watch one place.",
          hub: "ONE SYSTEM",
          hubSub: "TRUSTA",
          countLabel: "Connected modules",
          countUnit: "",
          watch: "Screen you watch",
          watchUnit: "",
          note: "Concept · TRUSTA",
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

  const moduleCount = L.modules.length;

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950 leading-snug"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* body: hub diagram + stat rail */}
      <div className="mt-7 flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
        {/* hub diagram */}
        <motion.div
          className="flex-1 min-w-0 rounded-2xl bg-slate-50/70 border border-slate-100 p-4 sm:p-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 600 330" className="w-full h-auto">
            <defs>
              <linearGradient id="osh-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#e9d8a6" />
              </linearGradient>
              <radialGradient id="osh-core" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fbf7ea" />
              </radialGradient>
            </defs>

            {(() => {
              const cx = 300;
              const cy = 165;
              const rx = 168;
              const ry = 116;
              const n = L.modules.length;
              const nodes = L.modules.map((label: string, i: number) => {
                const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
                const x = cx + rx * Math.cos(a);
                const y = cy + ry * Math.sin(a);
                const right = Math.cos(a) > 0.001;
                return { label, i, x, y, right };
              });
              return (
                <>
                  {/* spokes */}
                  {nodes.map((nd: { i: number; x: number; y: number }) => (
                    <motion.line
                      key={`l-${nd.i}`}
                      aria-hidden="true"
                      x1={cx}
                      y1={cy}
                      x2={nd.x}
                      y2={nd.y}
                      stroke="#d4af37"
                      strokeWidth={1.25}
                      strokeOpacity={0.3}
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.15 + nd.i * 0.04 }}
                    />
                  ))}

                  {/* outer module pills */}
                  {nodes.map(
                    (nd: {
                      i: number;
                      x: number;
                      y: number;
                      right: boolean;
                      label: string;
                    }) => {
                      const w = Math.min(
                        146,
                        Math.max(46, nd.label.length * 7.1 + 22)
                      );
                      const h = 21;
                      const px = nd.right ? nd.x : nd.x - w;
                      const py = nd.y - h / 2;
                      const tx = nd.right ? nd.x + 11 : nd.x - 11;
                      return (
                        <motion.g
                          key={`p-${nd.i}`}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: 0.35 + nd.i * 0.04,
                          }}
                          style={{ transformOrigin: `${nd.x}px ${nd.y}px` }}
                        >
                          <rect
                            x={px}
                            y={py}
                            width={w}
                            height={h}
                            rx={10.5}
                            fill="#ffffff"
                            stroke="#e2e8f0"
                            strokeWidth={1}
                          />
                          <circle
                            cx={nd.x}
                            cy={nd.y}
                            r={3}
                            fill="#ffffff"
                            stroke="url(#osh-ring)"
                            strokeWidth={1.75}
                          />
                          <text
                            x={tx}
                            y={nd.y + 3.6}
                            textAnchor={nd.right ? "start" : "end"}
                            className="font-sans"
                            fontSize="10.5"
                            fontWeight={600}
                            fill="#475569"
                          >
                            {nd.label}
                          </text>
                        </motion.g>
                      );
                    }
                  )}

                  {/* orbit hairline */}
                  <motion.ellipse
                    aria-hidden="true"
                    cx={cx}
                    cy={cy}
                    rx={62}
                    ry={58}
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth={1}
                    strokeOpacity={0.2}
                    strokeDasharray="3 6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  />

                  {/* central hub */}
                  <motion.g
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                      ease: "backOut",
                    }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={50}
                      fill="url(#osh-core)"
                      stroke="url(#osh-ring)"
                      strokeWidth={2.25}
                    />
                    <circle
                      cx={cx}
                      cy={cy}
                      r={41}
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth={1}
                      strokeOpacity={0.05}
                    />
                    <g
                      aria-hidden="true"
                      transform={`translate(${cx} ${cy - 21})`}
                    >
                      <path
                        d="M0 -9 L8 -4 L8 5 C8 10 4 13 0 14 C-4 13 -8 10 -8 5 L-8 -4 Z"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth={1.6}
                        strokeLinejoin="round"
                      />
                      <path
                        d="M-3.5 1.5 L-1 4 L4 -2"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <text
                      x={cx}
                      y={cy + 7}
                      textAnchor="middle"
                      className="font-sans"
                      fontSize="14"
                      fontWeight={900}
                      fill="#0f172a"
                    >
                      {L.hub}
                    </text>
                    <text
                      x={cx}
                      y={cy + 23}
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="8"
                      fontWeight={800}
                      letterSpacing="2.5"
                      fill="#d4af37"
                    >
                      {L.hubSub}
                    </text>
                  </motion.g>
                </>
              );
            })()}
          </svg>
        </motion.div>

        {/* stat rail */}
        <div className="flex flex-row lg:flex-col gap-3 lg:w-44 shrink-0">
          <motion.div
            className="flex-1 rounded-2xl bg-white border border-slate-100 p-4 flex flex-col justify-center"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <span className="font-mono text-[11px] text-slate-400">01</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-black text-2xl sm:text-3xl text-slate-950 tabular-nums">
                {moduleCount}
              </span>
              <span className="text-xs text-slate-400">{L.countUnit}</span>
            </div>
            <span
              className="mt-0.5 text-[11px] text-slate-500 leading-snug"
              style={{ wordBreak: "keep-all" }}
            >
              {L.countLabel}
            </span>
          </motion.div>

          <motion.div
            className="flex-1 rounded-2xl bg-white border border-slate-100 p-4 flex flex-col justify-center"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.32 }}
          >
            <span className="font-mono text-[11px] text-slate-400">02</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-black text-2xl sm:text-3xl text-[#10b981] tabular-nums">
                1
              </span>
              <span className="text-xs text-slate-400">{L.watchUnit}</span>
            </div>
            <span
              className="mt-0.5 text-[11px] text-slate-500 leading-snug"
              style={{ wordBreak: "keep-all" }}
            >
              {L.watch}
            </span>
          </motion.div>
        </div>
      </div>

      {/* caption */}
      <div className="mt-6 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-1 w-1 rounded-full bg-[#10b981]"
        />
        <span className="text-[10px] text-slate-400 font-mono tracking-wide">
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
          eyebrow: "ONE STEP AT A TIME",
          title: "큰 회사만의 것이 아닙니다",
          desc: "작은 병원·브랜드도 한 칸씩 올라갑니다. 보여주는 것에서 시작해, 흐름까지 바꾸는 구조입니다.",
          base: "작은 병원 · 브랜드",
          steps: [
            { n: "01", t: "콘텐츠 바꾸기", d: "보여주는 것부터" },
            { n: "02", t: "문구 바꾸기", d: "전하는 말투까지" },
            { n: "03", t: "랜딩 흐름 바꾸기", d: "움직이는 동선까지" },
          ],
          flagKicker: "도착하는 곳",
          flag: "이해·신뢰·문의하는 구조",
          caption: "번역이 아니라 흐름 · TRUSTA",
        }
      : {
          eyebrow: "ONE STEP AT A TIME",
          title: "Not just for the big players",
          desc: "Small clinics and brands climb one step at a time — from what you show to how it all flows.",
          base: "Small clinic · brand",
          steps: [
            { n: "01", t: "Change the content", d: "What you show" },
            { n: "02", t: "Change the copy", d: "How you say it" },
            { n: "03", t: "Change the landing flow", d: "How they move" },
          ],
          flagKicker: "Where it leads",
          flag: "A structure that earns trust & inquiries",
          caption: "Not translation — flow · TRUSTA",
        };

  const ease = [0.16, 1, 0.3, 1] as const;

  // ascending stair: viewBox 600 x 330, generous padding so flag tip (x<=560),
  // base label (x>=44) and step tops (y>=44) never clip inside overflow-hidden card.
  const stair = [
    { x: 96, y: 226, h: 66, i: 0 },
    { x: 252, y: 168, h: 124, i: 1 },
    { x: 408, y: 110, h: 182, i: 2 },
  ];

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950 leading-snug"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* ascending stair visual */}
      <div className="mt-7">
        <svg viewBox="0 0 600 330" className="w-full h-auto" aria-hidden="true">
          <defs>
            <linearGradient id="glc-riser" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="glc-flag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e7c66a" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>

          {/* ground hairline */}
          <line
            x1={44}
            y1={300}
            x2={556}
            y2={300}
            stroke="#e2e8f0"
            strokeWidth={1.5}
          />

          {/* ascending dashed guide tracing the stair tops up to the flag pole */}
          <motion.path
            d="M44 286 L96 286 L96 226 L252 226 L252 168 L408 168 L408 110 L478 110 L478 70"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={1.5}
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease }}
          />

          {/* base block — starting point */}
          <motion.g
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <rect
              x={44}
              y={262}
              width={132}
              height={38}
              rx={12}
              fill="url(#glc-riser)"
              stroke="#e2e8f0"
              strokeWidth={1.5}
            />
            <circle cx={66} cy={281} r={4.5} fill="#94a3b8" />
            <text
              x={80}
              y={285}
              fontSize={12}
              fontWeight={700}
              fill="#64748b"
            >
              {L.base}
            </text>
          </motion.g>

          {/* three rising steps */}
          {stair.map(({ x, y, h, i }: { x: number; y: number; h: number; i: number }) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.18, ease }}
            >
              <rect
                x={x}
                y={y}
                width={138}
                height={h}
                rx={16}
                fill="url(#glc-riser)"
                stroke="#e2e8f0"
                strokeWidth={1.5}
              />
              {/* tread cap tint */}
              <rect
                x={x}
                y={y}
                width={138}
                height={40}
                rx={16}
                fill="#0f172a"
                opacity={0.025}
              />
              <text
                x={x + 16}
                y={y + 26}
                className="font-mono"
                fontSize={12}
                fontWeight={800}
                fill="#d4af37"
                letterSpacing="2"
              >
                {L.steps[i].n}
              </text>
              {/* up-arrow emerald chip */}
              <circle cx={x + 110} cy={y + 20} r={12} fill="#10b981" opacity={0.12} />
              <path
                d={`M${x + 110} ${y + 14} L${x + 104} ${y + 23} L${x + 116} ${y + 23} Z`}
                fill="#10b981"
              />
            </motion.g>
          ))}

          {/* gold flag at the summit — tip pulled inward (x<=560) to avoid clipping */}
          <motion.g
            initial={{ opacity: 0, scale: 0.84 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 1, ease }}
            style={{ transformOrigin: "478px 84px" }}
          >
            <line
              x1={478}
              y1={44}
              x2={478}
              y2={110}
              stroke="#0f172a"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M478 44 L536 54 L478 72 Z"
              fill="url(#glc-flag)"
              stroke="#d4af37"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
            <circle cx={478} cy={110} r={4.5} fill="#d4af37" />
          </motion.g>
        </svg>

        {/* step sub-cards — numbered sequence */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {L.steps.map((s: { n: string; t: string; d: string }, i: number) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: 0.35 + i * 0.12, ease }}
              className="rounded-2xl bg-slate-50/70 border border-slate-100 px-4 py-3.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-slate-400">{s.n}</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                    <path
                      d="M8 12V4M8 4L4.5 7.5M8 4l3.5 3.5"
                      stroke="#10b981"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p
                className="mt-1.5 font-black text-[13px] sm:text-sm text-slate-950 leading-tight"
                style={{ wordBreak: "keep-all" }}
              >
                {s.t}
              </p>
              <p
                className="mt-0.5 text-[11px] text-slate-500 leading-snug"
                style={{ wordBreak: "keep-all" }}
              >
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* summit flag callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.05, ease }}
        className="mt-5 flex items-center gap-3 rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/[0.05] px-4 py-3.5"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="#d4af37"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="min-w-0">
          <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#d4af37]">
            {L.flagKicker}
          </span>
          <p
            className="font-black text-[13px] sm:text-sm text-slate-950 leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            {L.flag}
          </p>
        </div>
      </motion.div>

      {/* neutral caption */}
      <div className="mt-5 border-t border-slate-100 pt-3">
        <span className="text-[10px] text-slate-400 font-mono">{L.caption}</span>
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
          desc: "단순 발행이 아니라 데이터로 방향을 잡는 운영 루프. 노출부터 예약까지 흐름을 함께 봅니다.",
          metrics: [
            { k: "조회", d: "노출·도달", level: "넓게" },
            { k: "저장", d: "재방문 의향", level: "쌓임" },
            { k: "클릭", d: "관심 행동", level: "좁힘" },
            { k: "문의", d: "리드 발생", level: "진입" },
            { k: "상담", d: "전환 진입", level: "집중" },
            { k: "예약", d: "최종 전환", level: "도달" },
          ],
          loopTitle: "개선 루프",
          loop: ["데이터 수집", "패턴 해석", "다음 방향", "콘텐츠 발행"],
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "IMPROVE, NOT JUST POST",
          title: "We read performance, then design the next content",
          desc: "Not just posting — an operating loop steered by data. We watch the flow from reach to booking.",
          metrics: [
            { k: "Views", d: "Reach", level: "Wide" },
            { k: "Saves", d: "Intent", level: "Build" },
            { k: "Clicks", d: "Interest", level: "Focus" },
            { k: "Inquiry", d: "Leads", level: "Enter" },
            { k: "Consult", d: "Funnel", level: "Deep" },
            { k: "Booking", d: "Convert", level: "Reach" },
          ],
          loopTitle: "Improvement Loop",
          loop: ["Collect data", "Read patterns", "Next direction", "Publish"],
          caption: "Concept · TRUSTA",
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
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2.5" style={{ wordBreak: "keep-all" }}>
          <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
            {L.eyebrow}
          </span>
          <h3 className="font-black text-lg sm:text-xl text-slate-950 leading-snug">
            {L.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl">
            {L.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {L.metrics.map(
            (m: { k: string; d: string; level: string }, i: number) => {
              const series = bars[i];
              const max = Math.max(...series);
              return (
                <motion.div
                  key={m.k}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl bg-slate-50/70 border border-slate-100 p-3.5 sm:p-4 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-1.5">
                    <span className="font-mono text-[11px] text-slate-400 leading-none">
                      {`0${i + 1}`}
                    </span>
                    <span
                      className="font-mono uppercase tracking-wide text-[8px] text-slate-400 leading-none text-right"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {m.d}
                    </span>
                  </div>

                  <div
                    className="flex items-baseline gap-1.5"
                    style={{ wordBreak: "keep-all" }}
                  >
                    <span className="font-black text-2xl sm:text-3xl text-slate-950 leading-none">
                      {m.k}
                    </span>
                    <span className="text-xs text-slate-400 leading-none">
                      {m.level}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 124 32"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line
                      x1="1"
                      y1="30"
                      x2="123"
                      y2="30"
                      stroke="#e2e8f0"
                      strokeWidth="1.5"
                    />
                    {series.map((v: number, j: number) => {
                      const h = (v / max) * 25 + 2;
                      const x = j * 20 + 3;
                      const last = j === series.length - 1;
                      return (
                        <rect
                          key={j}
                          x={x}
                          y={29 - h}
                          width="13"
                          height={h}
                          rx="3"
                          fill={last ? "#d4af37" : "#e2e8f0"}
                          opacity={last ? 1 : 0.9}
                        />
                      );
                    })}
                  </svg>
                </motion.div>
              );
            }
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
        >
          <div className="shrink-0 self-start sm:self-auto">
            <svg viewBox="0 0 96 96" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
              <defs>
                <marker
                  id="loopArrowPD"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M1 1 L7 4 L1 7 Z" fill="#d4af37" />
                </marker>
              </defs>
              <circle cx="48" cy="48" r="34" fill="none" stroke="#f1f5f9" strokeWidth="9" />
              <path
                d="M48 14 A34 34 0 1 1 19.5 65"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                markerEnd="url(#loopArrowPD)"
              />
              {[0, 1, 2, 3].map((p: number) => {
                const ang = (p / 4) * Math.PI * 2 - Math.PI / 2;
                const cx = 48 + Math.cos(ang) * 34;
                const cy = 48 + Math.sin(ang) * 34;
                return (
                  <circle
                    key={p}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#fff"
                    stroke="#0f172a"
                    strokeWidth="1.5"
                  />
                );
              })}
              <circle cx="48" cy="48" r="11" fill="#10b981" />
              <path
                d="M43.5 48 L46.5 51 L52.5 44.5"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex-1 w-full min-w-0">
            <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-[#d4af37]">
              {L.loopTitle}
            </span>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {L.loop.map((step: string, i: number) => (
                <div key={step} className="flex items-center gap-1.5">
                  <div
                    className="flex items-center gap-1.5 rounded-full bg-slate-50/70 border border-slate-100 px-2.5 py-1"
                    style={{ wordBreak: "keep-all" }}
                  >
                    <span className="font-mono text-[10px] font-bold text-slate-400 leading-none">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-[11px] font-bold text-slate-700 leading-none">
                      {step}
                    </span>
                  </div>
                  {i < L.loop.length - 1 && (
                    <svg viewBox="0 0 16 12" className="w-3.5 shrink-0 h-auto" aria-hidden="true">
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
          </div>
        </motion.div>

        <p className="text-[10px] text-slate-400 font-mono leading-none">
          {L.caption}
        </p>
      </div>
    </div>
  );
}

export function MonthlyCalendar({ lang }: { lang: "ko" | "en" }) {
  const L =
    lang === "ko"
      ? {
          eyebrow: "MONTHLY CONTENT CALENDAR",
          title: "월간 콘텐츠 캘린더",
          desc: "주제와 채널을 한 달 단위로 배분해 일관된 발행 리듬을 만듭니다. 빈 칸은 여유, 채워진 칸은 발행일입니다.",
          weekdays: ["월", "화", "수", "목", "금", "토", "일"],
          countLabel: "월 발행 슬롯",
          countUnit: "건",
          weekLabel: "주",
          caption: "개념 시각화 · TRUSTA",
        }
      : {
          eyebrow: "MONTHLY CONTENT CALENDAR",
          title: "Monthly Content Calendar",
          desc: "Distribute topics and channels across the month for a steady publishing rhythm. Empty cells breathe, filled cells ship.",
          weekdays: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          countLabel: "publishing slots / month",
          countUnit: "",
          weekLabel: "weeks",
          caption: "Concept · TRUSTA",
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
    (acc: Record<string, Tag>, t: Tag) => ({ ...acc, [t.id]: t }),
    {} as Record<string, Tag>
  );

  // 5 weeks x 7 days. Each cell may hold up to 2 tag ids. Generic, no real dates.
  const grid: string[][][] = [
    [["sns"], [], ["reels"], [], ["card"], ["blog"], []],
    [["sns", "card"], [], ["ad"], ["reels"], [], ["blog"], []],
    [["sns"], ["card"], [], ["reels"], ["ad"], [], ["blog"]],
    [[], ["sns"], ["card"], [], ["reels"], ["blog"], []],
    [["ad"], [], ["sns"], ["card"], [], ["reels"], []],
  ];

  const slotCount = grid.reduce(
    (sum: number, week: string[][]) =>
      sum + week.reduce((s: number, cell: string[]) => s + cell.length, 0),
    0
  );

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-9 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase font-mono">
          {L.eyebrow}
        </span>
        <h3
          className="font-black text-lg sm:text-xl text-slate-950"
          style={{ wordBreak: "keep-all" }}
        >
          {L.title}
        </h3>
        <p
          className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl"
          style={{ wordBreak: "keep-all" }}
        >
          {L.desc}
        </p>
      </div>

      {/* Top metric strip */}
      <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-2xl sm:text-3xl text-slate-950 tabular-nums">
              {slotCount}
            </span>
            {L.countUnit ? (
              <span className="text-xs text-slate-400">{L.countUnit}</span>
            ) : null}
          </div>
          <span
            className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-400"
            style={{ wordBreak: "keep-all" }}
          >
            {L.countLabel}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-2xl sm:text-3xl text-slate-950 tabular-nums">
              {grid.length}
            </span>
            <span className="text-xs text-slate-400">{L.weekLabel}</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-slate-400">
            {tags.length} channels
          </span>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 sm:ml-auto">
          {tags.map((t: Tag) => (
            <div key={t.id} className="flex items-center gap-1.5 min-w-0">
              <span
                className="inline-block h-2.5 w-2.5 rounded-[3px] shrink-0"
                style={{ backgroundColor: t.color }}
                aria-hidden="true"
              />
              <span
                className="text-[10px] font-bold text-slate-500"
                style={{ wordBreak: "keep-all" }}
              >
                {lang === "ko" ? t.ko : t.en}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar inner card */}
      <div className="mt-6 rounded-2xl bg-slate-50/70 border border-slate-100 p-3 sm:p-4">
        {/* Weekday header */}
        <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-1.5">
          {L.weekdays.map((w: string, i: number) => (
            <div
              key={w}
              className={`text-center font-mono uppercase tracking-[0.12em] text-[9px] sm:text-[10px] pb-0.5 ${
                i >= 5 ? "text-[#d4af37]" : "text-slate-400"
              }`}
            >
              {w}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
          {grid.map((week: string[][], wi: number) =>
            week.map((cell: string[], di: number) => {
              const idx = wi * 7 + di;
              const isWeekend = di >= 5;
              const filled = cell.length > 0;
              return (
                <motion.div
                  key={`c-${wi}-${di}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.012 * idx }}
                  className={`relative min-h-[3rem] sm:min-h-[3.5rem] rounded-lg border p-1 sm:p-1.5 flex flex-col ${
                    filled
                      ? "border-slate-200/80 bg-white"
                      : isWeekend
                      ? "border-slate-100 bg-slate-50/50"
                      : "border-slate-100 bg-white/50"
                  }`}
                >
                  <span className="font-mono text-[8px] sm:text-[9px] text-slate-300 leading-none self-end tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-0.5 mt-auto">
                    {cell.map((tid: string, ti: number) => {
                      const tag = tagMap[tid];
                      if (!tag) return null;
                      return (
                        <div
                          key={`${tid}-${ti}`}
                          className="flex items-start gap-1 rounded-[5px] px-1 py-[2px]"
                          style={{ backgroundColor: tag.color + "14" }}
                        >
                          <span
                            className="inline-block h-1.5 w-1.5 rounded-full shrink-0 mt-[3px]"
                            style={{ backgroundColor: tag.color }}
                            aria-hidden="true"
                          />
                          <span
                            className="font-sans text-[7px] sm:text-[9px] font-bold leading-tight"
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
      </div>

      {/* Bottom caption */}
      <div className="mt-5 flex items-center gap-1.5">
        <svg
          viewBox="-2 -2 28 28"
          className="w-3 h-3 text-slate-300 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
        </svg>
        <span
          className="text-[10px] text-slate-400 font-mono"
          style={{ wordBreak: "keep-all" }}
        >
          {L.caption}
        </span>
      </div>
    </div>
  );
}

