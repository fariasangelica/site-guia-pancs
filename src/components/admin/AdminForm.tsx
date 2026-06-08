"use client";

import {
  ImagePlus,
  Pencil,
  Send,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageFrame } from "@/components/common/ImageFrame";
import { SPECIES_CLASSES } from "@/data/constants";
import { SpeciesFormData } from "@/types/species";

interface AdminFormProps {
  form: SpeciesFormData;
  editingId: number | null;
  onFieldChange: (field: keyof SpeciesFormData, value: string) => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleFeatured: () => void;
  onSendForAnalysis: () => void;
}

export function AdminForm({
  form,
  editingId,
  onFieldChange,
  onImageUpload,
  onEdit,
  onDelete,
  onToggleFeatured,
  onSendForAnalysis,
}: AdminFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome-popular" className="text-sm font-medium text-green-950">
            Nome popular
          </label>
          <Input
            id="nome-popular"
            value={form.nome}
            onChange={(e) => onFieldChange("nome", e.target.value)}
            className="mt-1 rounded-xl bg-white"
            placeholder="Ex.: Ora-pro-nóbis"
          />
        </div>
        <div>
          <label htmlFor="nome-cientifico" className="text-sm font-medium text-green-950">
            Nome científico
          </label>
          <Input
            id="nome-cientifico"
            value={form.nomeCientifico}
            onChange={(e) => onFieldChange("nomeCientifico", e.target.value)}
            className="mt-1 rounded-xl bg-white"
            placeholder="Ex.: Pereskia aculeata"
          />
        </div>
        <div>
          <label htmlFor="familia-botanica" className="text-sm font-medium text-green-950">
            Família botânica
          </label>
          <Input
            id="familia-botanica"
            value={form.familia}
            onChange={(e) => onFieldChange("familia", e.target.value)}
            className="mt-1 rounded-xl bg-white"
            placeholder="Ex.: Cactaceae"
          />
        </div>
        <div>
          <label htmlFor="classe-especie" className="text-sm font-medium text-green-950">
            Classe
          </label>
          <Select
            value={form.classe}
            onValueChange={(value) => onFieldChange("classe", value)}
          >
            <SelectTrigger id="classe-especie" className="mt-1 rounded-xl bg-white">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {SPECIES_CLASSES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="partes-comestiveis" className="text-sm font-medium text-green-950">
          Partes comestíveis
        </label>
        <Input
          id="partes-comestiveis"
          value={form.partes}
          onChange={(e) => onFieldChange("partes", e.target.value)}
          className="mt-1 rounded-xl bg-white"
          placeholder="Ex.: folhas, flores, rizomas"
        />
      </div>

      <div>
        <label htmlFor="uso-culinario" className="text-sm font-medium text-green-950">
          Uso culinário
        </label>
        <Textarea
          id="uso-culinario"
          value={form.uso}
          onChange={(e) => onFieldChange("uso", e.target.value)}
          className="mt-1 rounded-xl bg-white min-h-[90px]"
          placeholder="Descreva o uso culinário da espécie"
        />
      </div>

      <div>
        <label htmlFor="cuidados-seguranca" className="text-sm font-medium text-green-950">
          Cuidados e segurança
        </label>
        <Textarea
          id="cuidados-seguranca"
          value={form.cuidado}
          onChange={(e) => onFieldChange("cuidado", e.target.value)}
          className="mt-1 rounded-xl bg-white min-h-[90px]"
          placeholder="Informe os cuidados necessários"
        />
      </div>

      <div>
        <label htmlFor="relevancia-especie" className="text-sm font-medium text-green-950">
          Justificativa / relevância
        </label>
        <Textarea
          id="relevancia-especie"
          value={form.relevancia}
          onChange={(e) => onFieldChange("relevancia", e.target.value)}
          className="mt-1 rounded-xl bg-white min-h-[90px]"
          placeholder="Explique por que a espécie deve entrar no portal"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fonte-texto" className="text-sm font-medium text-green-950">
            Fonte do texto
          </label>
          <Input
            id="fonte-texto"
            value={form.fonte}
            onChange={(e) => onFieldChange("fonte", e.target.value)}
            className="mt-1 rounded-xl bg-white"
            placeholder="Ex.: publicação técnica, artigo, instituição responsável"
          />
        </div>
        <div>
          <label htmlFor="fonte-imagem" className="text-sm font-medium text-green-950">
            Fonte da imagem
          </label>
          <Input
            id="fonte-imagem"
            value={form.fonteImagem}
            onChange={(e) => onFieldChange("fonteImagem", e.target.value)}
            className="mt-1 rounded-xl bg-white"
            placeholder="Ex.: Wikimedia Commons, foto própria, site X"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="imagem-url" className="text-sm font-medium text-green-950">
            Imagem por URL
          </label>
          <Input
            id="imagem-url"
            value={form.imageUrl}
            onChange={(e) => onFieldChange("imageUrl", e.target.value)}
            className="mt-1 rounded-xl bg-white"
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>
        <div>
          <label htmlFor="upload-imagem" className="text-sm font-medium text-green-950">
            Upload de imagem
          </label>
          <div className="mt-1 flex items-center gap-3 rounded-xl border border-dashed border-green-200 bg-white px-3 py-2">
            <ImagePlus className="h-4 w-4 text-green-700" />
            <input
              id="upload-imagem"
              type="file"
              accept="image/*"
              onChange={onImageUpload}
              className="w-full text-sm text-slate-700"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-green-950">
          Pré-visualização da imagem
        </p>
        <div className="overflow-hidden rounded-xl border border-green-100 bg-green-50">
          <ImageFrame
            src={form.imageUrl}
            nome={form.nome || "Nova espécie"}
            className="h-56 w-full object-cover"
          />
        </div>
      </div>

      {/* ações secundárias — só disponíveis ao editar um item */}
      {editingId && (
        <div className="flex flex-wrap gap-2 rounded-xl border border-stone-200 bg-stone-50 p-3">
          <p className="w-full text-xs text-stone-400 font-medium mb-1">
            Editando item selecionado
          </p>
          <Button
            type="button"
            onClick={onEdit}
            variant="outline"
            className="rounded-xl bg-white text-green-950 border-stone-200 hover:bg-green-50 hover:border-green-200"
          >
            <Pencil className="h-4 w-4 mr-2" /> Salvar edição
          </Button>
          <Button
            type="button"
            onClick={onToggleFeatured}
            variant="outline"
            className="rounded-xl bg-white text-amber-700 border-amber-200 hover:bg-amber-50"
          >
            <Star className="h-4 w-4 mr-2" /> Marcar destaque
          </Button>
          <Button
            type="button"
            onClick={onDelete}
            variant="outline"
            className="rounded-xl bg-white text-red-600 border-red-200 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 mr-2" /> Excluir
          </Button>
        </div>
      )}

      {/* ação principal */}
      <Button
        type="button"
        onClick={onSendForAnalysis}
        className="w-full rounded-xl bg-green-700 hover:bg-green-800 h-11 text-sm font-semibold"
      >
        <Send className="h-4 w-4 mr-2" /> Enviar para análise
      </Button>
    </div>
  );
}
