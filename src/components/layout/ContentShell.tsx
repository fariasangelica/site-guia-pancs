import { ReactNode } from "react";

interface ContentShellProps {
  children: ReactNode;
}

export function ContentShell({ children }: ContentShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-amber-50/40 to-stone-50 text-green-950">
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">{children}</section>
    </div>
  );
}
