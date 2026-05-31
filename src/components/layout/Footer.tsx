import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Espécies", href: "/especies" },
  { label: "Segurança", href: "/seguranca" },
  { label: "Sobre o projeto", href: "/projeto" },
  { label: "Fluxo de aprovação", href: "/fluxo-de-aprovacao" },
  { label: "Painel adm", href: "/painel" },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Marca */}
          <div className="space-y-3">
            <SectionLabel>Sobre</SectionLabel>
            <p className="text-sm leading-6 text-slate-500">
              Catálogo educativo de PANCs com curadoria técnica e responsabilidade editorial.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do site">
            <SectionLabel>Navegação</SectionLabel>
            <ul className="space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-1 text-left text-sm text-slate-600 transition-colors hover:text-green-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Curadoria */}
          <div className="sm:col-span-2 lg:col-span-1">
            <SectionLabel>Curadoria</SectionLabel>
            <div className="space-y-4">
              <p className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                Nenhuma espécie é publicada sem revisão técnica prévia.
              </p>
              <p className="flex items-start gap-2.5 text-sm leading-6">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <a
                  href="mailto:panc.limpandotrilha@gmail.com"
                  className="text-slate-600 transition-colors hover:text-green-700 break-all"
                >
                  panc.limpandotrilha@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-stone-100 pt-6 text-center text-xs text-slate-400 sm:text-left">
          © {new Date().getFullYear()} Portal das Plantas que Nutrem — Conteúdo educativo.
        </p>
      </div>
    </footer>
  );
}
