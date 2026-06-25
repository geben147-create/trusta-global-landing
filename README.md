# TRUSTA — Global Content & Flow OS (Landing)

해외 진출 검증형 콘텐츠 운영 랜딩 페이지. React 19 + Vite + Tailwind v4 + motion.

검증형 카피(한국어 원문 줄바꿈 보존) + [사진] 자리에 맞춤 SVG 인포그래픽 14종 + 한/영 토글.

## 두 가지 레이아웃 (Two layouts)

| 버전 | URL |
|------|-----|
| 기본 (중앙 정렬, Boxed) | `/` |
| 풀폭 (좌우 여백 없음, Full-width) | `/?full=1` |

헤더 우측의 **기본 / 풀폭** 토글로 즉시 전환할 수 있습니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000/
npm run build    # → dist/
npm run preview  # 빌드본 미리보기
```

## 구조

- `src/copy.ts` — 한/영 카피(24블록, 한국어 원문 그대로) + 내비/위젯 라벨
- `src/Infographics.tsx` — 인포그래픽 14종 (inline SVG)
- `src/App.tsx` — 렌더(배경영상·헤더/푸터·위젯·레이아웃 토글)
- `src/index.css` — 유동 타입 스케일 + 한글 타이포(keep-all, text-wrap) + glass 유틸
