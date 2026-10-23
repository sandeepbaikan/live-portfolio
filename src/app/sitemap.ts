import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
export default function sitemap():MetadataRoute.Sitemap {
 const base=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
 return [{url:base,changeFrequency:"monthly",priority:1},...projects.map(p=>({url:`${base}/projects/${p.slug}`,changeFrequency:"yearly" as const,priority:0.7}))];
}
