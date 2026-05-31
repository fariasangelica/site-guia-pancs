import { Badge } from "@/components/ui/badge";
import { SpeciesStatus } from "@/types/species";

const STATUS_MAP: Record<
  SpeciesStatus,
  { label: string; className: string }
> = {
  rascunho: { label: "Rascunho", className: "bg-slate-200 text-slate-700" },
  enviado: {
    label: "Enviado para análise",
    className: "bg-amber-100 text-amber-800",
  },
  em_analise: {
    label: "Em análise",
    className: "bg-blue-100 text-blue-800",
  },
  aprovado: {
    label: "Aprovado",
    className: "bg-emerald-100 text-emerald-800",
  },
  publicado: { label: "Publicado", className: "bg-green-700 text-white" },
  rejeitado: { label: "Rejeitado", className: "bg-red-100 text-red-800" },
};

interface StatusBadgeProps {
  status: SpeciesStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_MAP[status];

  return (
    <Badge className={config?.className ?? "bg-slate-200 text-slate-700"}>
      {config?.label ?? status}
    </Badge>
  );
}
