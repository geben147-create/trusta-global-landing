// AUTO-GENERATED — TRUSTA v5 premium dark sections + EvidenceImage helper.
import { useState } from "react";
import type { ReactElement } from "react";
import { motion } from "motion/react";

export function EvidenceImage({
  file,
  ratio = "16 / 10",
  label,
  caption,
  alt = "",
}: {
  file: string;
  ratio?: string;
  label?: string;
  caption?: string;
  alt?: string;
}): ReactElement {
  const [err, setErr] = useState(false);
  const src = `${import.meta.env.BASE_URL}evidence/${file}`;
  return (
    <figure className="w-full rounded-[26px] border border-white/[0.14] bg-white/[0.04] p-3 sm:p-3.5 shadow-[0_0_60px_rgba(96,165,250,0.10)]">
      {label && (
        <div className="px-2 pt-1 pb-2">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#60A5FA]">
            {label}
          </span>
        </div>
      )}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0b1424]"
        style={{ aspectRatio: ratio }}
      >
        {!err && (
          <div
            aria-hidden="true"
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-25 blur-2xl"
            style={{ backgroundImage: `url("${src}")` }}
          />
        )}
        {!err ? (
          <img
            src={src}
            alt={alt}
            onError={() => setErr(true)}
            className="relative z-10 h-full w-full object-contain p-3 sm:p-4"
          />
        ) : (
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
              Evidence
            </span>
            <span className="text-sm text-[#B8C4D6]">증거 이미지 자리</span>
            <span className="font-mono text-[11px] text-[#B8C4D6]/60">
              public/evidence/{file}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="px-2 pt-2.5 text-[11px] leading-relaxed text-[#B8C4D6]/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function HeroV5() {
  const evidence: { title: string; desc: string; icon: "shield" | "search" }[] = [
    {
      title: "검증형 콘텐츠 운영",
      desc: "해외 고객에게 노출되기 전, 콘텐츠를 한 번 더 검토하는 운영 흐름을 만듭니다.",
      icon: "shield",
    },
    {
      title: "출처 기반 1차 리스크 점검",
      desc: "문구의 위험도를 출처 기반으로 1차 점검하고, 위험 문구는 완화 방향으로 정리합니다.",
      icon: "search",
    },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24 min-h-[70vh] flex items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 25%, rgba(96,165,250,0.14), rgba(96,165,250,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "rgba(246,217,139,0.10)" }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
              TRUSTA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-3xl"
            style={{ wordBreak: "keep-all" }}
          >
            TRUSTA는 해외 진출 콘텐츠를{" "}
            <span className="text-[#F6D98B]">더 많이 만드는</span> 서비스가
            아닙니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            해외 고객에게 보이기 전에, 문구의 위험도와 현지 고객 반응을 먼저
            검토하는{" "}
            <span className="font-semibold text-white">
              K-뷰티·의료 브랜드용 글로벌 콘텐츠 운영 시스템
            </span>
            입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 max-w-3xl"
          >
            {evidence.map((item: { title: string; desc: string; icon: "shield" | "search" }, i: number) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.14] bg-white/[0.06] p-6 sm:p-8 text-left shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-colors duration-300 hover:border-[rgba(96,165,250,0.55)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.14] bg-white/[0.06] text-[#60A5FA]">
                    {item.icon === "shield" ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
                        <path d="M9.5 12l1.8 1.8L15 10" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <circle cx="11" cy="11" r="6.5" />
                        <path d="M16 16l4 4" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
                    Evidence
                  </span>
                </div>

                <h3
                  className="mt-5 font-black text-lg sm:text-xl text-white leading-tight"
                  style={{ wordBreak: "keep-all" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-3 text-[#B8C4D6] text-sm leading-relaxed"
                  style={{ wordBreak: "keep-all" }}
                >
                  {item.desc}
                </p>

                <p className="mt-5 text-[11px] text-[#B8C4D6]/70">출처 표기</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MarketNumbers() {
  const stats: { value: string; unit: string; label: string }[] = [
    { value: "117만", unit: "명", label: "2024 외국인 의료관광객" },
    { value: "200만", unit: "명", label: "2025 돌파" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            GLOBAL MARKET
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            해외 시장은 이미 움직이고 있습니다
          </h2>
          <div className="mt-5 space-y-3">
            <p
              className="text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
              style={{ wordBreak: "keep-all" }}
            >
              2024년 한국을 찾은 외국인 의료관광객은 117만 명을 넘었고, 2025년에는 200만 명을 돌파했습니다.
            </p>
            <p
              className="text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
              style={{ wordBreak: "keep-all" }}
            >
              K-뷰티 브랜드 역시 해외 고객의 피드백을 빠르게 반영하며 수천억 원대 글로벌 매출을 만들고 있습니다.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {stats.map((stat, i: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 transition-all duration-300 hover:border-[rgba(96,165,250,0.55)] shadow-[0_0_40px_rgba(96,165,250,0.10)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(96,165,250,0.10)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
              <div className="relative">
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-3xl sm:text-5xl text-[#F6D98B] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#B8C4D6]">{stat.unit}</span>
                </div>
                <p
                  className="mt-4 text-sm text-[#B8C4D6] leading-relaxed"
                  style={{ wordBreak: "keep-all" }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 sm:mt-10 rounded-3xl bg-white/[0.06] border border-[rgba(96,165,250,0.55)] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <div className="flex items-start gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="mt-0.5 h-5 w-5 shrink-0 text-[#60A5FA]"
            >
              <path
                d="M12 8v5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16.5" r="1" fill="currentColor" />
              <path
                d="M12 3.5 21 19.5H3L12 3.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <p
              className="text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
              style={{ wordBreak: "keep-all" }}
            >
              문제는, 해외 고객에게 보이는 순간 언어·규정·플랫폼 정책까지 함께 맞춰야 한다는 것입니다.
            </p>
          </div>
        </motion.div>

        <p className="mt-5 text-[11px] text-[#B8C4D6]/70">출처: 공개 통계 기준</p>
      </div>
    </section>
  );
}

export function TirtirCase() {
  const stats: { from: string; to: string; label: string; sub?: string; gold?: boolean }[] = [
    { from: "122억", to: "1,719억", label: "매출 2018 → 2023", sub: "연 매출 규모" },
    { from: "", to: "4,500%+", label: "미주 매출 증가", sub: "전년 동기比", gold: true },
    { from: "3색", to: "40색", label: "쿠션 색상 확장", sub: "해외 피부 톤 반영" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#60A5FA]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#F6D98B]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            Localization, Not Translation
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            성공한 K-뷰티 브랜드는 번역만 하지 않았습니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            해외 고객의 피부 톤, 구매 맥락, 피드백을 제품과 콘텐츠에 반영했습니다.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((s, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-colors duration-300 hover:border-[rgba(96,165,250,0.55)]"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]">
                TIRTIR · 티르티르
              </span>

              <div className="mt-5 flex items-baseline gap-2 flex-wrap">
                {s.from ? (
                  <>
                    <span className="font-black text-xl sm:text-2xl text-[#B8C4D6]/80">
                      {s.from}
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0 text-[#60A5FA]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </>
                ) : null}
                <span
                  className={
                    "font-black text-3xl sm:text-5xl leading-none " +
                    (s.gold ? "text-[#F6D98B]" : "text-white")
                  }
                >
                  {s.to}
                </span>
              </div>

              <div
                className="mt-4 text-sm text-[#B8C4D6]"
                style={{ wordBreak: "keep-all" }}
              >
                {s.label}
              </div>
              {s.sub ? (
                <div
                  className="mt-1 text-[13px] text-[#B8C4D6]/70"
                  style={{ wordBreak: "keep-all" }}
                >
                  {s.sub}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 sm:mt-10 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-[rgba(96,165,250,0.55)] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#60A5FA]/15 border border-[rgba(96,165,250,0.55)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#60A5FA]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
            </span>
            <div>
              <p
                className="font-black text-lg sm:text-xl text-white leading-snug"
                style={{ wordBreak: "keep-all" }}
              >
                핵심은 단순 번역이 아니라, 해외 고객 피드백을 반영한 현지화
                속도였습니다.
              </p>
              <p
                className="mt-3 inline-flex items-center gap-2 text-sm text-[#F6D98B]"
                style={{ wordBreak: "keep-all" }}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#F6D98B]"
                />
                수출 1억 달러 근접 (2024 상반기)
              </p>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-[11px] text-[#B8C4D6]/70">
          출처: 공개 보도 기준(티르티르)
        </p>
      </div>
    </section>
  );
}

export function FbAdEvidence() {
  const callouts: { id: string; label: string; hint: string }[] = [
    { id: "c1", label: "핵심 수치 (이미지 기준 입력)", hint: "예: 도달 / 노출 지표" },
    { id: "c2", label: "핵심 수치 (이미지 기준 입력)", hint: "예: 클릭 / 반응 지표" },
    { id: "c3", label: "핵심 수치 (이미지 기준 입력)", hint: "예: 전환 / 효율 지표" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#60A5FA]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-[#F6D98B]/[0.06] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            PERFORMANCE EVIDENCE
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            성과는 화면으로 확인합니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            광고·검색 노출 지표를 실제 화면 그대로 보존해 확인합니다.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-4 sm:p-6 shadow-[0_0_40px_rgba(96,165,250,0.10)]">
              <EvidenceImage
                file="fb-ad.png"
                ratio="16 / 10"
                label="Ad Result"
                caption="실제 광고/지표 화면 · 민감정보 블러"
                alt="광고 성과 화면"
              />
              <div className="mt-4 flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"
                    stroke="#60A5FA"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="#60A5FA"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[11px] text-[#B8C4D6]/70 leading-relaxed"
                  style={{ wordBreak: "keep-all" }}
                >
                  출처 표기 · 화면 원본 보존, 1차 리스크 점검 후 게시
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]"
              >
                KEY METRICS
              </p>
              {callouts.map((c) => (
                <div
                  key={c.id}
                  className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-colors hover:border-[rgba(96,165,250,0.55)]"
                >
                  <span
                    className="text-sm font-semibold text-[#60A5FA]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {c.label}
                  </span>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-black text-3xl sm:text-5xl text-[#F6D98B] tracking-tight">
                      —
                    </span>
                    <span className="text-sm text-[#B8C4D6]">단위 입력</span>
                  </div>
                  <p
                    className="mt-3 text-[11px] text-[#B8C4D6]/70 leading-relaxed"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {c.hint}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function RegulationRisk() {
  const stats: { value: string; sub?: string; label: string; accent?: boolean }[] = [
    { value: "427", sub: "건", label: "최근 1년 화장품 행정처분" },
    { value: "324", sub: "건 (76%)", label: "표시·광고 위반", accent: true },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-12 -left-16 h-72 w-72 rounded-full bg-[#60A5FA]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F6D98B]/[0.06] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            REGULATION RISK
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            해외 시장은 크지만, 나라마다 금지되는 표현은 다릅니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            화장품 광고 리스크는 이미 숫자로 확인됩니다.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={[
                "group relative rounded-3xl bg-white/[0.06] p-6 sm:p-8 transition-colors duration-300",
                "border",
                stat.accent
                  ? "border-[rgba(96,165,250,0.55)] shadow-[0_0_40px_rgba(96,165,250,0.10)]"
                  : "border-white/[0.14] hover:border-[rgba(96,165,250,0.45)]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
                  STAT {i + 1}
                </span>
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={stat.accent ? "text-[#F6D98B]" : "text-[#60A5FA]"}
                >
                  <path
                    d="M12 3v6m0 4.5h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={[
                    "font-black text-3xl sm:text-5xl leading-none",
                    stat.accent ? "text-[#F6D98B]" : "text-white",
                  ].join(" ")}
                >
                  {stat.value}
                </span>
                {stat.sub ? (
                  <span className="text-sm text-[#B8C4D6]">{stat.sub}</span>
                ) : null}
              </div>

              <p
                className="mt-3 text-sm text-[#B8C4D6] leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(96,165,250,0.55)] bg-[#60A5FA]/10">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#60A5FA]"
              >
                <path
                  d="M3 17.5 9.5 11l4 4L21 7m0 0h-5m5 0v5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p
              className="text-sm sm:text-base text-white leading-relaxed"
              style={{ wordBreak: "keep-all" }}
            >
              문구 리스크는 추상적인 문제가 아닙니다.{" "}
              <span className="text-[#F6D98B] font-semibold">
                광고비, 문의 수, 상담 전환, 예약 매출
              </span>
              에 직접 영향을 줍니다.
            </p>
          </div>

          <p className="mt-6 text-[11px] text-[#B8C4D6]/70">
            출처: 공개 행정처분 통계 기준
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function TimeBombRisk() {
  const days: { day: string; channel: string; copy: string }[] = [
    { day: "월", channel: "카드뉴스", copy: "카드뉴스 문구" },
    { day: "화", channel: "릴스", copy: "릴스 자막" },
    { day: "수", channel: "광고", copy: "광고 카피" },
    { day: "목", channel: "블로그", copy: "블로그 제목" },
    { day: "금", channel: "상담", copy: "상담 스크립트" },
  ];

  const risks: { title: string; desc: string; icon: ReactElement }[] = [
    {
      title: "계정 제한",
      desc: "반복 위반 시 노출·도달 축소",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="12" r="9" stroke="#60A5FA" strokeWidth="1.6" />
          <path d="M5.6 5.6l12.8 12.8" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "광고 반려",
      desc: "심사 단계에서 집행 중단",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M4 6h16M4 12h16M4 18h10" stroke="#F6D98B" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 15l4 4M20 15l-4 4" stroke="#F6D98B" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "영업 손실",
      desc: "재작성·재심사로 일정 지연",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M4 17l5-5 4 3 7-8" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 11V7h-4" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 18 9)" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            EVERYDAY RISK
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            문제는 규정을 아는 것이 아닙니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
            style={{ wordBreak: "keep-all" }}
          >
            매일 올라가는 문구를 매번 검토할 수 있느냐입니다.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]">
              한 주의 문구
            </span>
            <span className="text-[11px] text-[#B8C4D6]/70">월 → 금 누적</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4">
            {days.map((item, i: number) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl bg-white/[0.04] border border-white/[0.14] p-5 hover:border-[rgba(96,165,250,0.55)] transition-colors duration-300"
                style={{ opacity: 0.55 + i * 0.09 }}
              >
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(96,165,250,0.14)] text-[#60A5FA] text-xs font-black">
                    {item.day}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#60A5FA]">
                    {item.channel}
                  </span>
                </div>
                <p
                  className="mt-4 text-white font-bold text-sm sm:text-base leading-snug"
                  style={{ wordBreak: "keep-all" }}
                >
                  {item.copy}
                </p>
                <div className="mt-4 flex items-center gap-1.5">
                  {days.slice(0, i + 1).map((_, dot: number) => (
                    <span
                      key={dot}
                      className="h-1 flex-1 rounded-full bg-[rgba(246,217,139,0.5)]"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-[#B8C4D6]/70 leading-relaxed">
            검토되지 않은 문구가 채널마다 쌓이면 출처 기반 검토가 어려워집니다. (예시 흐름 · 출처 표기)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 sm:mt-8"
        >
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]">
              결과로 이어지는 위험
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {risks.map((risk, i: number) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 hover:border-[rgba(96,165,250,0.55)] hover:shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.14]">
                  {risk.icon}
                </div>
                <h3
                  className="mt-5 font-black text-xl sm:text-2xl text-white leading-tight"
                  style={{ wordBreak: "keep-all" }}
                >
                  {risk.title}
                </h3>
                <p
                  className="mt-2 text-[#B8C4D6] text-sm leading-relaxed"
                  style={{ wordBreak: "keep-all" }}
                >
                  {risk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-14 rounded-3xl bg-gradient-to-br from-[rgba(96,165,250,0.08)] to-transparent border border-[rgba(96,165,250,0.55)] p-6 sm:p-8 text-center shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <p
            className="text-white font-black text-lg sm:text-2xl leading-snug"
            style={{ wordBreak: "keep-all" }}
          >
            검수 없이 올리면 <span className="text-[#F6D98B]">위험하고,</span>
          </p>
          <p
            className="mt-2 text-white font-black text-lg sm:text-2xl leading-snug"
            style={{ wordBreak: "keep-all" }}
          >
            매번 전문가에게 맡기면 <span className="text-[#60A5FA]">속도와 비용이 막힙니다.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function AiVsTrusta() {
  const rows: { label: string; ai: string; trusta: string }[] = [
    { label: "목적", ai: "빠른 생성", trusta: "검증형 운영" },
    { label: "검수", ai: "없음", trusta: "주장·근거·위험표현 연결 검토" },
    { label: "근거", ai: "불명확", trusta: "출처 기반" },
    { label: "위험 표현", ai: "그대로", trusta: "위험 문구 완화 제안" },
    { label: "현지화", ai: "번역 위주", trusta: "국가·채널·전환 목적별" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Decorative blue glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-3xl rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.10), transparent 70%)" }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            GENERAL AI vs TRUSTA
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            일반 AI는 문장을 만듭니다. TRUSTA는 먼저 걸러냅니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            그럴듯한 문장과 검토 가능한 문장은 다릅니다.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 sm:mt-14"
        >
          {/* Column headers */}
          <div className="grid grid-cols-1 sm:grid-cols-[0.8fr_1fr_1.1fr] gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="hidden sm:block" aria-hidden="true" />
            <div className="rounded-2xl bg-white/[0.06] border border-white/[0.14] px-5 py-4 text-center">
              <span className="text-sm font-bold text-[#B8C4D6]" style={{ wordBreak: "keep-all" }}>
                일반 AI
              </span>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-[rgba(96,165,250,0.55)] px-5 py-4 text-center shadow-[0_0_40px_rgba(96,165,250,0.10)]">
              <span
                className="text-sm font-black text-white tracking-wide"
                style={{ wordBreak: "keep-all" }}
              >
                TRUSTA
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {rows.map((row, i: number) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-1 sm:grid-cols-[0.8fr_1fr_1.1fr] gap-3 sm:gap-4 items-stretch"
              >
                {/* Row label */}
                <div className="flex items-center sm:justify-end">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {row.label}
                  </span>
                </div>

                {/* General AI cell */}
                <div className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.08]">
                  <div className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <circle cx="12" cy="12" r="9" stroke="#B8C4D6" strokeOpacity="0.5" strokeWidth="1.5" />
                      <path d="M9 9l6 6M15 9l-6 6" stroke="#B8C4D6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <p
                      className="text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {row.ai}
                    </p>
                  </div>
                </div>

                {/* TRUSTA cell (emphasized) */}
                <div className="rounded-3xl bg-white/[0.06] border border-[rgba(96,165,250,0.55)] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-colors duration-300 hover:bg-white/[0.09]">
                  <div className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <circle cx="12" cy="12" r="9" stroke="#60A5FA" strokeWidth="1.5" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p
                      className="text-white text-sm sm:text-base font-semibold leading-relaxed"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {row.trusta}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Source line */}
          <p className="mt-6 text-[11px] text-[#B8C4D6]/70" style={{ wordBreak: "keep-all" }}>
            출처 표기
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const pairs: { before: string; after: string }[] = [
    { before: "여드름을 치료합니다", after: "피부 고민 완화에 도움을 줄 수 있습니다" },
    { before: "100% 효과 보장", after: "개인차가 있을 수 있습니다" },
    { before: "즉시 개선", after: "사용감 만족도 중심으로 안내합니다" },
    { before: "피부 재생", after: "피부 컨디션 관리" },
    { before: "주름 제거", after: "탄력 관리에 도움" },
    { before: "최고 제품", after: "많은 고객이 선택한 제품" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#60A5FA]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            RISK REWRITE · BEFORE / AFTER
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            표현을 약하게 만드는 것이 아니라, 살아남는 문장으로 바꿉니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            TRUSTA는 문장을 감으로 고치지 않습니다. 주장, 근거, 위험 표현을 연결해
            검토합니다.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* BEFORE column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.14]">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-[#B8C4D6]"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8C4D6]">
                  BEFORE
                </span>
                <p className="text-white/90 text-sm font-bold">위험 표현</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {pairs.map((pair: { before: string; after: string }, i: number) => (
                <li
                  key={`before-${i}`}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.10] px-4 py-3"
                >
                  <span
                    className="text-[#B8C4D6]/70 text-sm sm:text-base line-through decoration-[#B8C4D6]/40"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {pair.before}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white/[0.06] border border-[rgba(96,165,250,0.55)] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#60A5FA]/15 border border-[rgba(96,165,250,0.55)]">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-[#F6D98B]"
                >
                  <path
                    d="M5 12.5l4 4 10-10"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]">
                  AFTER
                </span>
                <p className="text-white text-sm font-bold">검토된 문장</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {pairs.map((pair: { before: string; after: string }, i: number) => (
                <li
                  key={`after-${i}`}
                  className="flex items-start gap-3 rounded-2xl bg-[#60A5FA]/[0.06] border border-[rgba(96,165,250,0.30)] px-4 py-3"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F6D98B]"
                  >
                    <path
                      d="M5 12.5l4 4 10-10"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-white text-sm sm:text-base leading-relaxed"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {pair.after}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="mt-6 text-[11px] text-[#B8C4D6]/70">
          1차 리스크 점검 / 위험 문구 완화 / 출처 기반 검토 (최종 판단은 사람)
        </p>
      </div>
    </section>
  );
}

export function TripleVerify() {
  const pillars: {
    id: string;
    step: string;
    name: string;
    desc: string;
    accent: "blue" | "gold";
    icon: ReactElement;
  }[] = [
    {
      id: "graphify",
      step: "01",
      name: "Graphify",
      desc: "주장과 근거를 구조화합니다.",
      accent: "blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
          <circle cx="12" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="5" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="19" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10.4 6.8 6.4 15.9M13.6 6.8l4 9.1M7.4 18h9.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "kg",
      step: "02",
      name: "지식그래프",
      desc: "브랜드 정보, 법령, 플랫폼 정책, 고객 니즈를 연결합니다.",
      accent: "gold",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
          <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="4.5" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="19.5" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="4.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="19.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 10.3 6 7.2M14 10.3l4-3.1M10 13.7 6 16.8M14 13.7l4 3.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "ontology",
      step: "03",
      name: "온톨로지",
      desc: "표현의 의미, 관계, 위험도를 점검합니다.",
      accent: "blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
          <path d="M12 3 4 6.6v6.4c0 4.2 3.2 6.6 8 8 4.8-1.4 8-3.8 8-8V6.6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="m8.6 12 2.3 2.3 4.5-4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(96,165,250,0.12) 0%, rgba(96,165,250,0) 100%)",
          }}
        />

        <div className="relative text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            TRIPLE VERIFICATION
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            감이 아니라 <span className="text-[#F6D98B]">구조로</span> 검증합니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            세 개의 검증 축이 하나의 문장으로 모입니다. 주장과 근거를 구조화하고, 연결하고,
            의미와 위험도까지 점검합니다.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[88px] left-[16%] right-[16%] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(96,165,250,0) 0%, rgba(96,165,250,0.45) 20%, rgba(246,217,139,0.45) 50%, rgba(96,165,250,0.45) 80%, rgba(96,165,250,0) 100%)",
            }}
          />

          {pillars.map((p, i) => {
            const isGold = p.accent === "gold";
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-colors hover:border-[rgba(96,165,250,0.55)]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={
                      "relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl border " +
                      (isGold
                        ? "text-[#F6D98B] border-[rgba(246,217,139,0.45)] bg-[rgba(246,217,139,0.10)]"
                        : "text-[#60A5FA] border-[rgba(96,165,250,0.45)] bg-[rgba(96,165,250,0.10)]")
                    }
                  >
                    {p.icon}
                  </div>
                  <span
                    className={
                      "font-black text-3xl sm:text-5xl leading-none " +
                      (isGold ? "text-[#F6D98B]" : "text-white")
                    }
                  >
                    {p.step}
                  </span>
                </div>

                <h3
                  className="mt-6 font-black text-lg sm:text-xl text-white leading-tight"
                  style={{ wordBreak: "keep-all" }}
                >
                  {p.name}
                </h3>
                <p
                  className="mt-3 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
                  style={{ wordBreak: "keep-all" }}
                >
                  {p.desc}
                </p>

                <div
                  aria-hidden="true"
                  className="md:hidden mt-6 mx-auto h-6 w-px"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(96,165,250,0.5) 0%, rgba(96,165,250,0) 100%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="flex justify-center my-2 sm:my-6"
        >
          <svg viewBox="0 0 24 40" className="w-5 h-9" fill="none">
            <path
              d="M12 2v28"
              stroke="rgba(96,165,250,0.55)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="m6 24 6 7 6-7"
              stroke="rgba(246,217,139,0.7)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto max-w-2xl rounded-3xl border border-[rgba(96,165,250,0.55)] bg-white/[0.06] p-6 sm:p-8 text-center shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]">
            OUTPUT
          </span>
          <h3
            className="mt-3 font-black text-xl sm:text-2xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            검토 가능한 문장
          </h3>
          <p
            className="mt-3 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            세 단계 검증을 통과한 표현만 남깁니다. 1차 리스크 점검과 위험 문구 완화를 거쳐
            출처 기반으로 다시 살펴볼 수 있는 문장으로 정리합니다.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["1차 리스크 점검", "위험 문구 완화", "출처 기반 검토"].map((tag: string) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.14] bg-white/[0.04] px-3 py-1 text-xs text-[#B8C4D6]"
                style={{ wordBreak: "keep-all" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-[#B8C4D6]/70">
            출처 표기 · 본 검증은 법률 자문이 아닙니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function MonthlyCalendarV5() {
  const bullets: { label: string; desc: string; icon: "globe" | "channel" | "shield" | "target" }[] = [
    { label: "국가별", desc: "타깃 시장 기준으로 분리 운영", icon: "globe" },
    { label: "채널별", desc: "채널 특성에 맞춰 포맷 배분", icon: "channel" },
    { label: "위험도 점검", desc: "1차 리스크 점검 · 위험 문구 완화", icon: "shield" },
    { label: "전환 목적", desc: "노출이 아닌 전환 기준 설계", icon: "target" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#60A5FA]/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            MONTHLY OPERATION
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            많이 만드는 것이 아니라, 맞춰 운영합니다
          </h2>
          <p
            className="mt-4 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            국가·채널·위험도·전환 목적에 맞춰 월간으로 운영합니다.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            {bullets.map((b: { label: string; desc: string; icon: "globe" | "channel" | "shield" | "target" }) => (
              <li
                key={b.label}
                className="group flex items-start gap-4 rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-6 transition-colors duration-300 hover:border-[rgba(96,165,250,0.55)] hover:shadow-[0_0_40px_rgba(96,165,250,0.10)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#60A5FA]/12 border border-[rgba(96,165,250,0.55)] text-[#60A5FA]">
                  {b.icon === "globe" && (
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
                    </svg>
                  )}
                  {b.icon === "channel" && (
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M7 9h6" />
                      <path d="M7 13h10" />
                    </svg>
                  )}
                  {b.icon === "shield" && (
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                  {b.icon === "target" && (
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-base text-white">{b.label}</span>
                  <span
                    className="mt-1 block text-sm text-[#B8C4D6] leading-relaxed"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {b.desc}
                  </span>
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-3 sm:p-4 shadow-[0_0_40px_rgba(96,165,250,0.10)]">
              <div className="flex items-center gap-3 px-3 py-2.5">
                <span className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#F6D98B]" />
                  <span className="h-3 w-3 rounded-full bg-[#60A5FA]" />
                </span>
                <span className="ml-2 flex-1 truncate rounded-lg bg-black/30 border border-white/10 px-3 py-1 text-[11px] text-[#B8C4D6]/80">
                  trusta.app / monthly-calendar
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B] whitespace-nowrap">
                  Calendar System
                </span>
              </div>

              <div className="mt-2 overflow-hidden rounded-2xl">
                <EvidenceImage
                  file="calendar.png"
                  ratio="16 / 9"
                  label="Calendar System"
                  caption="실제 운영 캘린더 화면"
                  alt="월간 운영 캘린더"
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-[#B8C4D6]/70" style={{ wordBreak: "keep-all" }}>
              출처 표기 · 실제 운영 캘린더 화면 캡처
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ChatbotFlow() {
  const steps: { n: string; title: string; desc: string }[] = [
    { n: "01", title: "문의 발생", desc: "해외 고객이 댓글·DM·홈페이지에서 첫 질문을 남깁니다." },
    { n: "02", title: "국가·관심 분야 분류", desc: "어느 시장에서 온 고객인지, 어떤 카테고리에 관심 있는지 분류합니다." },
    { n: "03", title: "고객 질문 의도 파악", desc: "가격·효능·배송 등 진짜 궁금한 핵심 의도를 읽어냅니다." },
    { n: "04", title: "브랜드 장점 연결", desc: "그 의도에 맞는 브랜드 강점과 차별점을 자연스럽게 연결합니다." },
    { n: "05", title: "상담 신청 유도", desc: "부담 없이 다음 단계로 넘어가도록 상담 신청을 제안합니다." },
    { n: "06", title: "예약 연결", desc: "상담 일정·문의 채널로 안전하게 예약을 이어줍니다." },
  ];

  const chat: { from: "user" | "brand"; text: string }[] = [
    { from: "user", text: "Hi, do you ship to Singapore?" },
    { from: "brand", text: "네, 싱가포르 배송 가능합니다. 어떤 제품에 관심 있으신가요?" },
    { from: "user", text: "민감 피부용 라인을 찾고 있어요." },
    { from: "brand", text: "민감 피부 라인은 1차 리스크 점검을 거친 출처 기반 안내를 드려요. 상담 예약 도와드릴까요?" },
    { from: "user", text: "좋아요, 예약하고 싶어요." },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 sm:mb-16 max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            CONSULT FLOW
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            외국어보다 중요한 건, 믿고 문의하게 만드는 말의 구조입니다
          </h2>
          <p
            className="mt-5 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            TRUSTA 챗봇은 단순 자동응답이 아니라 상담 시나리오입니다. 브랜드 장점, 고객 질문,
            상담 전환 흐름을 반영합니다.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Chat thread */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-8 shadow-[0_0_40px_rgba(96,165,250,0.10)] lg:sticky lg:top-8"
          >
            <div className="flex items-center gap-3 pb-5 border-b border-white/[0.1]">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#60A5FA]/15 border border-[rgba(96,165,250,0.55)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4.5 w-4.5"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-white">TRUSTA Chatbot</p>
                <p className="text-[11px] text-[#B8C4D6]/70">상담 시나리오 기반 응답</p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-[#F6D98B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F6D98B]" />
                LIVE
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {chat.map((m, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={
                    m.from === "brand"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      m.from === "brand"
                        ? "max-w-[82%] rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed text-white bg-[#60A5FA]/[0.18] border border-[rgba(96,165,250,0.45)] shadow-[0_0_24px_rgba(96,165,250,0.12)]"
                        : "max-w-[82%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed text-[#B8C4D6] bg-white/[0.05] border border-white/[0.12]"
                    }
                    style={{ wordBreak: "keep-all" }}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.12] px-4 py-2.5">
              <span className="text-[13px] text-[#B8C4D6]/60">메시지를 입력하세요...</span>
              <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#60A5FA]/20">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4z" />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* 6-step flow */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[1.35rem] sm:left-[1.6rem] top-4 bottom-4 w-px bg-gradient-to-b from-[rgba(96,165,250,0.5)] via-white/[0.12] to-transparent"
            />
            <ol className="space-y-4 sm:space-y-5">
              {steps.map((s, i: number) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative flex gap-4 sm:gap-5"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <span className="flex h-11 w-11 sm:h-[3.2rem] sm:w-[3.2rem] items-center justify-center rounded-2xl bg-white/[0.06] border border-[rgba(96,165,250,0.45)] shadow-[0_0_24px_rgba(96,165,250,0.10)]">
                      <span className="font-black text-base sm:text-lg text-[#F6D98B]">
                        {s.n}
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 rounded-3xl bg-white/[0.06] border border-white/[0.14] p-5 sm:p-6 transition-colors duration-300 hover:border-[rgba(96,165,250,0.55)]">
                    <h3
                      className="font-bold text-base sm:text-lg text-white leading-snug"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-2 text-[#B8C4D6] text-sm leading-relaxed"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
            <p className="mt-6 text-[11px] text-[#B8C4D6]/70" style={{ wordBreak: "keep-all" }}>
              상담 흐름은 브랜드별 시나리오에 맞춰 조정됩니다. 의료·화장품 문의는 1차 리스크 점검 후
              출처 기반으로 안내합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MbaEvidence() {
  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#60A5FA]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
              WHO PLANS IT
            </span>

            <h2
              className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
              style={{ wordBreak: "keep-all" }}
            >
              MBA 마케팅 전공자가
              <br className="hidden sm:block" /> 직접 기획합니다
            </h2>

            <p
              className="mt-5 text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
              style={{ wordBreak: "keep-all" }}
            >
              브랜드 전략과 해외 진출 콘텐츠 방향을 기획합니다. 기준 없는
              감수정이 아니라, 출처 기반으로 위험도를 낮추는 검수입니다.
            </p>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {[
                "브랜드 전략 기획",
                "해외 진출 방향",
                "출처 기반 검수",
              ].map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] px-3.5 py-1.5 text-xs text-[#B8C4D6]"
                  style={{ wordBreak: "keep-all" }}
                >
                  <svg
                    aria-hidden
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#F6D98B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              <div
                aria-hidden
                className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#0B1220] border border-[rgba(96,165,250,0.55)] px-4 py-1.5 shadow-[0_0_40px_rgba(96,165,250,0.10)]"
              >
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#F6D98B]">
                  Verified
                </span>
              </div>

              <div className="rotate-[-1.5deg] rounded-3xl bg-white/[0.06] border border-white/[0.14] p-4 sm:p-5 shadow-[0_0_40px_rgba(96,165,250,0.10)]">
                <EvidenceImage
                  file="mba.png"
                  ratio="4 / 5"
                  label="MBA Verified"
                  caption="MBA 학위 증빙 · 개인정보 블러 처리"
                  alt="MBA 학위 증빙"
                />
              </div>

              <p className="mt-4 text-center text-[11px] text-[#B8C4D6]/70">
                출처 기반 검토 · 표기된 증빙은 실제 문서 기준
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function UiBeforeAfterEvidence() {
  const badges: { label: string; tone: "wait" | "done" | "booked" }[] = [
    { label: "검수대기", tone: "wait" },
    { label: "승인완료", tone: "done" },
    { label: "예약됨", tone: "booked" },
  ];

  const toneStyle: Record<string, string> = {
    wait: "text-[#F6D98B] border-[#F6D98B]/35 bg-[#F6D98B]/10",
    done: "text-[#60A5FA] border-[rgba(96,165,250,0.45)] bg-[rgba(96,165,250,0.10)]",
    booked: "text-[#B8C4D6] border-white/20 bg-white/[0.06]",
  };

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            REAL SCREENS
          </span>
          <h2
            className="font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight max-w-3xl"
            style={{ wordBreak: "keep-all" }}
          >
            디자인이 아니라, 전환을 위한 콘텐츠 제작입니다
          </h2>
          <p
            className="text-[#B8C4D6] text-sm sm:text-base leading-relaxed max-w-2xl"
            style={{ wordBreak: "keep-all" }}
          >
            실제 상세·랜딩 화면의 Before / After를 그대로 보존해 보여줍니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="rounded-3xl bg-white/[0.06] border border-white/[0.14] shadow-[0_0_40px_rgba(96,165,250,0.10)] overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 sm:px-6 py-3.5 border-b border-white/[0.10] bg-white/[0.03]">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 mx-2 hidden sm:flex items-center gap-2 h-7 rounded-full border border-white/[0.12] bg-white/[0.04] px-4">
              <svg
                aria-hidden="true"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-[#60A5FA]"
              >
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M8 11V8a4 4 0 0 1 8 0v3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[11px] text-[#B8C4D6]/80 tracking-wide">
                trusta.app / before-after
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#F6D98B] shrink-0">
              LIVE
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <EvidenceImage
              file="ui.png"
              ratio="16 / 9"
              label="Before / After"
              caption="실제 UI 화면"
              alt="Before After UI"
            />

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {badges.map((badge: { label: string; tone: "wait" | "done" | "booked" }) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold ${toneStyle[badge.tone]}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                  {badge.label}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-[#B8C4D6]/70" style={{ wordBreak: "keep-all" }}>
              출처 표기
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FaqCtaProcess() {
  const steps: { num: string; title: string; desc: string }[] = [
    { num: "01", title: "자료 전달", desc: "현재 콘텐츠·브랜드 자료를 그대로 전달" },
    { num: "02", title: "국가·고객 지정", desc: "진출할 국가와 핵심 고객을 함께 지정" },
    { num: "03", title: "검증형 콘텐츠 재구성", desc: "현지 고객이 신뢰하는 말의 구조로 재구성" },
    { num: "04", title: "검수·납품", desc: "1차 리스크 점검 후 검수·납품" },
  ];

  const faqs: { q: string; a: string }[] = [
    {
      q: "외국어를 잘 몰라도 가능한가요?",
      a: "외국어보다 중요한 건 현지 고객이 믿고 문의하게 만드는 말의 구조입니다.",
    },
    {
      q: "성과를 보장하나요?",
      a: "보장이 아니라, 출처 기반 1차 리스크 점검과 위험 문구 완화로 안전하게 운영합니다. 필요 시 해외 마케팅 파트너와 연계해 퍼포먼스 확장을 지원합니다.",
    },
  ];

  const ctas: { label: string; variant: "primary" | "gold" | "outline" }[] = [
    { label: "우리 브랜드 해외 콘텐츠 진단받기", variant: "primary" },
    { label: "위험 문구 무료 점검 신청", variant: "gold" },
    { label: "해외 진출 콘텐츠 상담하기", variant: "outline" },
    { label: "TRUSTA 운영 구조 상담받기", variant: "outline" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60A5FA]">
            START
          </span>
          <h2
            className="mt-4 font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            자료 전달부터 검수·납품까지,
            <br className="hidden sm:block" /> 정해진 흐름으로 진행됩니다
          </h2>
          <p
            className="mt-4 max-w-2xl text-[#B8C4D6] text-sm sm:text-base leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            복잡한 준비 없이, 지금 가진 자료만 전달하면 됩니다.
          </p>
        </motion.div>

        {/* Process row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, i: number) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl bg-white/[0.06] border border-white/[0.14] p-6 sm:p-7 shadow-[0_0_40px_rgba(96,165,250,0.10)] transition-colors hover:border-[rgba(96,165,250,0.55)]"
            >
              <span className="font-black text-3xl sm:text-4xl text-[#F6D98B]">
                {step.num}
              </span>
              <h3
                className="mt-3 font-bold text-base sm:text-lg text-white leading-snug"
                style={{ wordBreak: "keep-all" }}
              >
                {step.title}
              </h3>
              <p
                className="mt-2 text-sm text-[#B8C4D6] leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                {step.desc}
              </p>
              {/* Arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hidden lg:block absolute top-1/2 -right-4 w-6 h-6 -translate-y-1/2 text-[#60A5FA]"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto">
          <span className="block text-center text-[11px] font-bold tracking-[0.2em] uppercase text-[#F6D98B]">
            FAQ
          </span>
          <h3
            className="mt-3 text-center font-black text-xl sm:text-2xl md:text-3xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            자주 묻는 질문
          </h3>

          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq, i: number) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-3xl bg-white/[0.06] border p-6 sm:p-7 transition-colors ${
                    isOpen
                      ? "border-[rgba(96,165,250,0.55)] shadow-[0_0_40px_rgba(96,165,250,0.10)]"
                      : "border-white/[0.14]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span
                      className="font-bold text-base sm:text-lg text-white leading-snug"
                      style={{ wordBreak: "keep-all" }}
                    >
                      <span className="text-[#60A5FA] mr-2">Q.</span>
                      {faq.q}
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`shrink-0 w-5 h-5 text-[#60A5FA] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm sm:text-base text-[#B8C4D6] leading-relaxed overflow-hidden"
                      style={{ wordBreak: "keep-all" }}
                    >
                      <span className="text-[#F6D98B] mr-2 font-bold">A.</span>
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Big CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 relative overflow-hidden rounded-3xl border border-[rgba(96,165,250,0.55)] bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(96,165,250,0.10)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-[#60A5FA]/20 blur-3xl"
          />
          <h3
            className="relative font-black text-xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            해외 진출을 준비 중이라면, 먼저 콘텐츠 문구와
            <br className="hidden sm:block" /> 상담 흐름부터 점검해보세요.
          </h3>

          <div className="relative mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {ctas.map((cta, i: number) => {
              const base =
                "flex items-center justify-center rounded-2xl px-5 py-4 text-sm sm:text-base font-bold transition-colors text-center";
              const styleByVariant: Record<
                "primary" | "gold" | "outline",
                string
              > = {
                primary:
                  "bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-[0_0_40px_rgba(96,165,250,0.25)]",
                gold:
                  "bg-[#F6D98B] text-[#0B1220] hover:bg-[#f3cf6c]",
                outline:
                  "border border-white/[0.14] bg-white/[0.06] text-white hover:border-[rgba(96,165,250,0.55)]",
              };
              return (
                <a
                  key={i}
                  href="#contact"
                  className={`${base} ${styleByVariant[cta.variant]}`}
                  style={{ wordBreak: "keep-all" }}
                >
                  {cta.label}
                </a>
              );
            })}
          </div>

          <p className="relative mt-6 text-[11px] text-[#B8C4D6]/70">
            출처 기반 1차 리스크 점검 · 위험 문구 완화로 안전하게 운영합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

