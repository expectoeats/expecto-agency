import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Expecto Digital Agency",
  description: "The page you are looking for does not exist. Return to Expecto Digital Agency homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] px-6 text-center relative overflow-hidden">
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-sm bg-[var(--text)] border border-[var(--border)] flex items-center justify-center mx-auto mb-8">
          <span className="font-montserrat font-semibold text-white text-2xl">404</span>
        </div>
        <h1 className="font-montserrat font-semibold text-4xl sm:text-6xl text-[var(--text)] mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="font-montserrat text-[var(--text-3)] text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-black text-base px-8 py-4">
          Back to Homepage →
        </Link>
      </div>
    </main>
  );
}
