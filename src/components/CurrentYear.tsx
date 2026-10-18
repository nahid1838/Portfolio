"use client";

import { useEffect, useState } from "react";

/**
 * Renders the current year, resolved on the client after hydration.
 * Computing `new Date()` during render is rejected by Next.js 16's
 * cacheComponents prerender (the value is unstable), and a synchronous
 * setState in an effect is disallowed — so we defer the read.
 */
export default function CurrentYear() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      setYear(String(new Date().getFullYear()))
    );
    return () => cancelAnimationFrame(id);
  }, []);

  // Reserve a stable width so the footer doesn't shift when the year fills in.
  return <span className="inline-block min-w-[3.5ch] text-center">{year}</span>;
}
