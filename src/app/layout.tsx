import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { profile } from "@/data/portfolio";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: `${profile.name} — UI Engineering Lead`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — Engineering digital experiences`,
    description: profile.summary,
    type: "website",
    url: base,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#0b1017",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
            >{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}', { send_page_view: true });`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
