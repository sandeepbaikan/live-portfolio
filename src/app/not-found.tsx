import Link from "next/link";
export default function NotFound() {
  return (
    <main className="shell not-found">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>This route doesn&apos;t exist.</h1>
      <Link className="button-primary" href="/">
        Return home →
      </Link>
    </main>
  );
}
