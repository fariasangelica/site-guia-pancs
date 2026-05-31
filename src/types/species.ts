export type SpeciesStatus =
  | "rascunho"
  | "enviado"
  | "em_analise"
  | "aprovado"
  | "publicado"
  | "rejeitado";

export interface Species {
  id: number;
  nome: string;
  nomeCientifico: string;
  familia: string;
  classe: string;
  partes: string[];
  uso: string;
  cuidado: string;
  relevancia: string;
  destaque: boolean;
  status: SpeciesStatus;
  fonte: string;
  imageUrl: string;
}

export interface SpeciesFormData {
  nome: string;
  nomeCientifico: string;
  familia: string;
  classe: string;
  partes: string;
  uso: string;
  cuidado: string;
  relevancia: string;
  fonte: string;
  imageUrl: string;
}
