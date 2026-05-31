import { SpeciesFormData } from "@/types/species";

export const SPECIES_CLASSES = [
  "Folhosas",
  "Flores comestíveis",
  "Raízes e rizomas",
  "Frutos",
] as const;

export const CURADORIA_EMAILS = [
  "angelicafarioliveira@gmail.com",
  "panc.limpandotrilha@gmail.com",
];

export const PENDING_STATUSES = [
  "rascunho",
  "enviado",
  "em_analise",
  "aprovado",
  "rejeitado",
] as const;

export const EMPTY_FORM: SpeciesFormData = {
  nome: "",
  nomeCientifico: "",
  familia: "",
  classe: "",
  partes: "",
  uso: "",
  cuidado: "",
  relevancia: "",
  fonte: "",
  imageUrl: "",
};
