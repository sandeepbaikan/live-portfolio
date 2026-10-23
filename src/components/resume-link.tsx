"use client";
import { Download } from "lucide-react";
export function ResumeLink({
  className,
  placement,
}: {
  className: string;
  placement: "hero" | "contact";
}) {
  function onDownload() {
    // GA4 custom event works on the free GA4 tier when NEXT_PUBLIC_GA_MEASUREMENT_ID is configured.
    // Click tracking counts attempts; it does not prove a successful file save.
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "resume_download", {
      location: placement,
      file_name: "Sandeep_Baikan_Resume.pdf",
    });
  }
  return (
    <a
      className={className}
      href="/Sandeep_Baikan_Resume.pdf"
      download="Sandeep_Baikan_Resume.pdf"
      onClick={onDownload}
    >
      Download resume <Download size={18} aria-hidden="true" />
    </a>
  );
}
