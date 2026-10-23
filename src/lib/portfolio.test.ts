import { describe, expect, it } from "vitest";
import { clampCounter, projectBySlug } from "./portfolio";
describe("portfolio data",()=>{
 it("looks up a known project",()=>expect(projectBySlug("enterprise-excel-addin")?.name).toBe("Enterprise Excel Add-in"));
 it("does not resolve unknown project",()=>expect(projectBySlug("missing")).toBeUndefined());
 it("keeps counters in the expected range",()=>{expect(clampCounter(-1)).toBe(0);expect(clampCounter(120)).toBe(99);expect(clampCounter(12.9)).toBe(12)});
});
