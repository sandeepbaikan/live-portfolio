import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { projects, profile } from "@/data/portfolio";
import { projectBySlug } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  return p ? { title: p.name, description: p.overview } : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  return (
    <>
      <SiteHeader />
      <main className="project-page shell">
        <Link href="/#work" className="back-link">
          <ArrowLeft size={17} /> All projects
        </Link>
        <p className="eyebrow">CASE STUDY / {project.number}</p>
        <h1>
          {project.name}
          <span style={{ color: project.accent }}> .</span>
        </h1>
        <p className="project-intro">{project.overview}</p>
        <div
          className="case-visual"
          style={{ "--case-accent": project.accent } as React.CSSProperties}
        >
          <span>DESIGN / DEVELOP / DELIVER</span>
          <strong>{project.name}</strong>
          <span>{project.category}</span>
        </div>
        <div className="case-grid">
          <div>
            <h2>Challenge</h2>
            <p>{project.problem}</p>
          </div>
          <div>
            <h2>Approach</h2>
            <ul>
              {project.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Impact</h2>
            <p>{project.outcome}</p>
          </div>
          <div>
            <h2>Technology</h2>
            <div className="tag-list">
              {project.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        {project.note && <p className="case-note">{project.note}</p>}
        <Link href="/#contact" className="button-primary">
          Discuss a project <ArrowUpRight size={18} />
        </Link>
      </main>
      <footer className="footer shell">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
