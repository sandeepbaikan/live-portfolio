"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Certificates", href: "/#certificates" },
    { label: "AI Lab", href: "/#ai" },
  ];
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="wordmark" href="/" aria-label="Sandeep Baikan home">
          <span className="mark">
            SB<span>.</span>
          </span>
          <span className="wordmark-desc">
            ENGINEERING
            <br />
            PORTFOLIO
          </span>
        </Link>
        <nav
          className={`nav-links ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-contact" href="/#contact">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <button
          className="mobile-menu"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
