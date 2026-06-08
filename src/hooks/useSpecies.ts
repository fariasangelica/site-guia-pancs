"use client";

import { useEffect, useMemo, useState } from "react";
import { initialEspecies } from "@/data/species";
import { EMPTY_FORM, PENDING_STATUSES } from "@/data/constants";
import { Species, SpeciesFormData, SpeciesStatus } from "@/types/species";

const STORAGE_KEY = "portal-plantas-que-nutrem-species-v1";

export function useSpecies() {
  const [especies, setEspecies] = useState<Species[]>(initialEspecies);
  const [storageLoaded, setStorageLoaded] = useState(false);
  const [busca, setBusca] = useState("");
  const [classeSelecionada, setClasseSelecionada] = useState("Todas");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<SpeciesFormData>(EMPTY_FORM);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const rawSpecies = window.localStorage.getItem(STORAGE_KEY);
      if (rawSpecies) {
        const parsed = JSON.parse(rawSpecies) as Species[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEspecies(parsed);
        }
      }
    } catch {
      // Se o storage estiver corrompido, mantemos a base inicial sem bloquear o app.
    } finally {
      setStorageLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!storageLoaded || typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(especies));
  }, [especies, storageLoaded]);

  const classesFiltro = useMemo(
    () => ["Todas", ...Array.from(new Set(especies.map((e) => e.classe)))],
    [especies]
  );

  const filtradas = useMemo(() => {
    return especies.filter((e) => {
      const termo = [e.nome, e.nomeCientifico, e.classe, e.uso, e.familia, e.relevancia]
        .join(" ")
        .toLowerCase();
      const okBusca = termo.includes(busca.toLowerCase());
      const okClasse =
        classeSelecionada === "Todas" || e.classe === classeSelecionada;
      return okBusca && okClasse && e.status === "publicado";
    });
  }, [especies, busca, classeSelecionada]);

  const pendentes = useMemo(
    () =>
      especies.filter((e) =>
        (PENDING_STATUSES as readonly string[]).includes(e.status)
      ),
    [especies]
  );

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  const handleField = (field: keyof SpeciesFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setForm((prev) => ({ ...prev, imageUrl: reader.result as string }));
        setMensagem("Imagem carregada no formulário com sucesso.");
      }
    };
    reader.readAsDataURL(file);
  };

  const buildSpeciesObject = (status: SpeciesStatus): Species => {
    const partesArray = form.partes
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    return {
      id: editingId ?? Date.now(),
      nome: form.nome.trim(),
      nomeCientifico: form.nomeCientifico.trim(),
      familia: form.familia.trim(),
      classe: form.classe.trim(),
      partes: partesArray,
      uso: form.uso.trim(),
      cuidado: form.cuidado.trim(),
      relevancia: form.relevancia.trim(),
      destaque: false,
      status,
      fonte: form.fonte.trim(),
      fonteImagem: form.fonteImagem.trim() || undefined,
      imageUrl: form.imageUrl.trim(),
    };
  };

  const validateForm = () => {
    const required = [
      form.nome,
      form.nomeCientifico,
      form.familia,
      form.classe,
      form.partes,
      form.uso,
      form.cuidado,
      form.relevancia,
      form.fonte,
    ];
    return required.every((item) => String(item).trim().length > 0);
  };

  const upsertSpecies = (speciesObject: Species) => {
    setEspecies((prev) => {
      const exists = prev.some((item) => item.id === speciesObject.id);
      if (exists) {
        return prev.map((item) => {
          if (item.id !== speciesObject.id) return item;
          return {
            ...item,
            ...speciesObject,
            destaque: speciesObject.destaque ?? item.destaque,
          };
        });
      }
      return [speciesObject, ...prev];
    });
  };

  const handleSaveDraft = () => {
    if (!validateForm()) {
      setMensagem("Preencha todos os campos obrigatórios antes de salvar o rascunho.");
      return;
    }
    const payload = buildSpeciesObject("rascunho");
    upsertSpecies(payload);
    setMensagem(
      editingId ? "Rascunho atualizado com sucesso." : "Rascunho salvo com sucesso."
    );
    resetForm();
  };

  const handleEdit = () => {
    if (!editingId) {
      setMensagem("Selecione um item da lista de pendentes para editar.");
      return;
    }
    if (!validateForm()) {
      setMensagem("Preencha todos os campos obrigatórios antes de editar a espécie.");
      return;
    }
    const original = especies.find((item) => item.id === editingId);
    const payload: Species = {
      ...buildSpeciesObject(original?.status ?? "rascunho"),
      destaque: original?.destaque ?? false,
      imageUrl: form.imageUrl.trim() || original?.imageUrl || "",
    };
    upsertSpecies(payload);
    setMensagem("Espécie editada com sucesso.");
    resetForm();
  };

  const startEditing = (item: Species) => {
    setEditingId(item.id);
    setForm({
      nome: item.nome,
      nomeCientifico: item.nomeCientifico,
      familia: item.familia,
      classe: item.classe,
      partes: item.partes.join(", "),
      uso: item.uso,
      cuidado: item.cuidado,
      relevancia: item.relevancia,
      fonte: item.fonte ?? "",
      fonteImagem: item.fonteImagem ?? "",
      imageUrl: item.imageUrl ?? "",
    });
    setMensagem(`Editando: ${item.nome}`);
  };

  const handleDelete = () => {
    if (!editingId) {
      setMensagem("Selecione um item da lista de pendentes para excluir.");
      return;
    }
    setEspecies((prev) => prev.filter((item) => item.id !== editingId));
    setMensagem("Espécie excluída com sucesso.");
    resetForm();
  };

  const handleToggleFeatured = () => {
    if (!editingId) {
      setMensagem("Selecione um item da lista para marcar ou remover destaque.");
      return;
    }
    setEspecies((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, destaque: !item.destaque } : item
      )
    );
    setMensagem("Destaque atualizado com sucesso.");
  };

  const handleSendForAnalysis = async () => {
    if (!validateForm()) {
      setMensagem("Preencha todos os campos obrigatórios antes de enviar para análise.");
      return;
    }

    const payload = buildSpeciesObject("enviado");
    upsertSpecies(payload);

    setMensagem("Enviando espécie para análise...");

    try {
      const response = await fetch("/api/species/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: payload.nome,
          nomeCientifico: payload.nomeCientifico,
          familia: payload.familia,
          classe: payload.classe,
          partes: payload.partes,
          uso: payload.uso,
          cuidado: payload.cuidado,
          relevancia: payload.relevancia,
          fonte: payload.fonte,
          fonteImagem: payload.fonteImagem,
          imageUrl: payload.imageUrl,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        setMensagem(
          `Não foi possível enviar o e-mail para a curadoria: ${
            data.error || "erro desconhecido"
          }. A espécie foi salva como pendente.`
        );
        return;
      }

      setMensagem(
        "Espécie enviada para análise. A curadoria de conteúdo foi notificada por e-mail."
      );
      resetForm();
    } catch {
      setMensagem(
        "Falha de conexão ao enviar o e-mail para a curadoria. A espécie foi salva como pendente; tente novamente."
      );
    }
  };

  return {
    especies,
    busca,
    setBusca,
    classeSelecionada,
    setClasseSelecionada,
    classesFiltro,
    filtradas,
    pendentes,
    editingId,
    form,
    mensagem,
    setMensagem,
    handleField,
    handleImageUpload,
    startEditing,
    handleSaveDraft,
    handleEdit,
    handleDelete,
    handleToggleFeatured,
    handleSendForAnalysis,
    resetForm,
  };
}
