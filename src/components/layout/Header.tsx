"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Espécies", href: "/especies" },
  { label: "Segurança", href: "/seguranca" },
  { label: "Sobre o projeto", href: "/projeto" },
  { label: "Fluxo de aprovação", href: "/fluxo-de-aprovacao" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white p-2 text-slate-600"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {/* Links com estado ativo */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActivePath(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                  active
                    ? "bg-green-700 text-white"
                    : "text-slate-600 hover:text-green-800 hover:bg-green-50",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Ações direita */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/painel"
            title="Abrir painel administrativo"
            className={[
              "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm transition-colors",
              isActivePath(pathname, "/painel")
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-stone-200 bg-white text-slate-600 hover:bg-stone-50",
            ].join(" ")}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Painel adm</span>
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50/95 px-6 py-4">
          <nav className="flex flex-col gap-2" aria-label="Navegação principal">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActivePath(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-green-700 text-white"
                      : "text-slate-700 hover:bg-green-50 hover:text-green-800",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/painel"
              onClick={() => setMobileOpen(false)}
              className={[
                "mt-1 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors",
                isActivePath(pathname, "/painel")
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-stone-200 bg-white text-slate-700",
              ].join(" ")}
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              Painel adm
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
