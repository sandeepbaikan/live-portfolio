import { projects } from "../data/portfolio";
export const projectBySlug = (slug: string) => projects.find(project => project.slug === slug);
export const clampCounter = (value:number) => Math.min(99, Math.max(0, Math.trunc(value)));
export function debounce<T extends (...args: never[]) => void>(fn:T, delay:number) {
  let timer:ReturnType<typeof setTimeout> | undefined;
  return (...args:Parameters<T>) => { if(timer) clearTimeout(timer);timer=setTimeout(()=>fn(...args),delay); };
}
