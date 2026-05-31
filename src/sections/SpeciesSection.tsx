"use client";

import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SpeciesCard } from "@/components/species/SpeciesCard";
import { Species } from "@/types/species";

interface SpeciesSectionProps {
  filtradas: Species[];
  busca: string;
  onBuscaChange: (value: string) => void;
  classesFiltro: string[];
  classeSelecionada: string;
  onClasseChange: (value: string) => void;
}

export function SpeciesSection({
  filtradas,
  busca,
  onBuscaChange,
  classesFiltro,
  classeSelecionada,
  onClasseChange,
}: SpeciesSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="rounded-xl border border-green-100 bg-white/90 shadow-none backdrop-blur-sm">
        <CardContent className="p-5 space-y-4">
          <div className="grid lg:grid-cols-[1fr_auto] gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                value={busca}
                onChange={(e) => onBuscaChange(e.target.value)}
                placeholder="Pesquisar por nome, classe, família ou uso culinário..."
                className="pl-9 rounded-xl bg-white"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-end">
              <span className="text-sm text-slate-600 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Classe:
              </span>
              {classesFiltro.map((c) => (
                <Button
                  key={c}
                  variant={classeSelecionada === c ? "default" : "outline"}
                  className={`rounded-xl ${
                    classeSelecionada === c
                      ? "bg-green-700 hover:bg-green-800"
                      : "bg-white"
                  }`}
                  onClick={() => onClasseChange(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>

      {filtradas.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtradas.map((item) => (
            <SpeciesCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-green-200 bg-white/70 py-20 px-6 text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h3 className="text-lg font-semibold text-green-950">Nenhuma espécie encontrada</h3>
          <p className="mt-2 text-sm text-slate-500 max-w-sm leading-6">
            Tente buscar por outro nome, família ou uso culinário — ou remova o filtro de classe.
          </p>
          <button
            type="button"
            onClick={() => { onBuscaChange(""); onClasseChange("Todas"); }}
            className="mt-6 rounded-xl bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-800 transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
