import { ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ImageFrame } from "@/components/common/ImageFrame";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Species } from "@/types/species";

interface SpeciesCardProps {
  item: Species;
}

export function SpeciesCard({ item }: SpeciesCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200">

      {/* imagem */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-green-50">
        <ImageFrame
          src={item.imageUrl}
          nome={item.nome}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>

      {/* cabeçalho do card */}
      <div className="px-5 pt-5 pb-3 border-b border-green-50">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="text-[10px] text-green-700 border-green-200 bg-green-50">
              {item.classe}
            </Badge>
            <Badge variant="outline" className="text-[10px] text-slate-500 border-slate-200">
              {item.familia}
            </Badge>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            {item.destaque && (
              <Badge className="text-[10px] bg-amber-500 hover:bg-amber-500">✦ Destaque</Badge>
            )}
            <StatusBadge status={item.status} />
          </div>
        </div>

        {/* nome principal — maior destaque */}
        <h3 className="font-display text-xl font-bold text-green-950 leading-tight mt-2">
          {item.nome}
        </h3>
        <p className="text-sm italic text-slate-400 mt-0.5">{item.nomeCientifico}</p>
      </div>

      {/* corpo */}
      <div className="px-5 py-4 flex-1 flex flex-col gap-4">

        {/* partes + uso */}
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
              Partes comestíveis
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.partes.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-green-50 border border-green-100 px-2.5 py-0.5 text-xs text-green-800"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
              Uso culinário
            </p>
            <p className="text-sm text-slate-600 leading-6">{item.uso}</p>
          </div>
        </div>

        {/* relevância em destaque sutil */}
        <div className="rounded-xl bg-green-50/70 border border-green-100 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-green-700 mb-1">
            Por que incluímos
          </p>
          <p className="text-sm text-green-900 leading-6">{item.relevancia}</p>
        </div>

        {/* segurança — separado visualmente no rodapé do card */}
        <div className="mt-auto rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 flex gap-3">
          <ShieldAlert className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-700 mb-0.5">
              Segurança
            </p>
            <p className="text-xs text-amber-900 leading-5">{item.cuidado}</p>
          </div>
        </div>

      </div>
    </article>
  );
}
