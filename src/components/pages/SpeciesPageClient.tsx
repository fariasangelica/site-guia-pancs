"use client";

import { SpeciesSection } from "@/sections/SpeciesSection";
import { useSpecies } from "@/hooks/useSpecies";

export function SpeciesPageClient() {
  const {
    filtradas,
    busca,
    setBusca,
    classesFiltro,
    classeSelecionada,
    setClasseSelecionada,
  } = useSpecies();

  return (
    <SpeciesSection
      filtradas={filtradas}
      busca={busca}
      onBuscaChange={setBusca}
      classesFiltro={classesFiltro}
      classeSelecionada={classeSelecionada}
      onClasseChange={setClasseSelecionada}
    />
  );
}
