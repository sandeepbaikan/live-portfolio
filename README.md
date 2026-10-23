# Sandeep Baikan — Engineering Lead Portfolio

Original dark editorial portfolio inspired by the *structure* of nataliaturska.com (career narrative, selected projects, contact), not its code or imagery. Next.js App Router + TypeScript, an interactive React component playground, and an optional grounded AI assistant.

## Start locally

Requirements: **Node.js 20.9+** and npm (Node.js 22 LTS recommended).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. No API key is required to see the complete UI or try the demo FAQ assistant.

## Before publishing: replace placeholders

1. Edit `src/data/portfolio.ts`: verify professional claims, personal location, and any client-approved descriptions.
2. Add your *verified* contact `email`, `github`, `linkedin` values. Blank values intentionally hide public links.
3. Add your actual resume at `public/resume.pdf` if desired, then add an appropriate download link in `src/app/page.tsx`.
4. Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` for production canonicals, sitemap, and sharing metadata.
5. Replace design-only artwork with approved screenshots if you have permission to publish them.
6. Do not disclose client internal code, confidential metrics, proprietary materials, or private customer information.

## Optional AI assistant

Without `OPENAI_API_KEY`, `/api/assistant` serves a limited local FAQ demo. To enable AI:

```dotenv
OPENAI_API_KEY=your_secret_api_key
OPENAI_MODEL=gpt-4.1-mini
```

The API key lives **server-side only**, never use a `NEXT_PUBLIC_` prefix for it. The request is schema-validated, length-limited, checked for same-origin browser requests, and constrained to published portfolio information. This starter intentionally does **not** claim complete adversarial protection. **Before exposing a paid API endpoint publicly, configure a durable per-IP/user rate limit and spend caps, ideally using Vercel WAF or an edge/gateway service.** In-memory rate limiting is unsuitable for serverless production. Be aware that same-origin checks are not authentication. Consider bot protection and monitoring. No chat history is stored in the application, but prompts sent through the AI provider follow its policies.

## Tests and build

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

CI runs these checks automatically on pushes and pull requests. Add browser-level Playwright checks, accessibility audits (axe/Lighthouse), and visual regression checks before relying on the site for a critical launch.

## Deploy to Vercel

1. Create a private or public GitHub repository and push these files (`.env.local` must never be committed).
2. On Vercel choose **Add New → Project → Import Git Repository**.
3. Framework preset: **Next.js**; root: `./`; leave default build command (`next build`).
4. Under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to the final URL; add `OPENAI_API_KEY` and `OPENAI_MODEL` only if you want AI mode.
5. Deploy. Add a custom domain under **Settings → Domains** and update the site URL variable, then redeploy.
6. Check the homepage, `/projects/...` case studies, mobile navigation, keyboard access, `/sitemap.xml`, and the AI endpoint. Add provider-level rate limiting before enabling the paid AI feature.

## Directory map

- `src/app` — Next.js layouts, pages, metadata, sitemap, API endpoint
- `src/components` — navigation, scroll reveal, playground, assistant
- `src/data/portfolio.ts` — single source of truth for profile and project content
- `src/lib` — pure utilities and tests
- `.github/workflows/ci.yml` — CI pipeline

## Design & accessibility

- Semantic landmarks and heading order
- Keyboard-accessible mobile navigation and tab controls
- Skip link, input labels, focus indicators, live regions, reduced-motion support
- Server-rendered portfolio sections; Client Components only for dynamic features
- No fabricated employers, testimonials, certifications or performance figures

## Notes

The AI integration is a portfolio demonstration. The projects represent real categories of experience but descriptions should be reviewed by the owner prior to public release. No employer association or endorsement is implied.


## October 2026 portfolio enhancements

- Replaced the React playground section with **Licenses & Certifications** including two official Udemy certificate links and dates. The AI assistant remains. No recommendations section is included.
- Added full project technology chips on the home page as well as detail pages, including Node.js and Java. E-commerce themes also list Module Federation, AEM, and Headless Commerce. **Review these entries for accuracy of production use vs exposure before publishing**.
- Added a working PDF resume download in hero and contact. The included `public/Sandeep_Baikan_Resume.pdf` is a **starter draft based on known experience**, not a verified final CV. Replace it with your approved ATS resume before deploying.

### Traffic & resume download tracking

**Page traffic (Vercel):** `@vercel/analytics` is included and `<Analytics/>` runs in the root layout. After deploy go to Vercel > Project > Analytics > Enable. This records page views and referrers where supported. Local development visits are not counted.

**Resume download clicks (GA4 free):** Create a Google Analytics 4 web data stream and add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` in `.env.local` and in Vercel Project > Settings > Environment Variables. Redeploy. Clicks on either resume button generate `resume_download` events, with `location` of `hero` or `contact`. In GA4, check Reports > Engagement > Events or Realtime / DebugView. Events represent **clicks**, not proven completed downloads; ad blockers or consent settings may affect counts. No analytics key means clicks still download the file, just without GA4 counting. Consider an appropriate privacy notice/consent setup before enabling GA4 for your audience.

Vercel's own **custom events** are restricted to paid Pro/Enterprise plans (as of October 2026); that is why GA4 is offered for free resume-click tracking. No server-side persistent database is required.
