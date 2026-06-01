"use client";

import { AdminSection } from "@/sections/AdminSection";
import { useSpecies } from "@/hooks/useSpecies";

export function PanelPageClient() {
  const {
    pendentes,
    editingId,
    form,
    mensagem,
    handleField,
    handleImageUpload,
    startEditing,
    handleEdit,
    handleDelete,
    handleToggleFeatured,
    handleSendForAnalysis,
  } = useSpecies();

  return (
    <div className="space-y-4">
      <AdminSection
        form={form}
        editingId={editingId}
        mensagem={mensagem}
        pendentes={pendentes}
        onFieldChange={handleField}
        onImageUpload={handleImageUpload}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleFeatured={handleToggleFeatured}
        onSendForAnalysis={handleSendForAnalysis}
        onSelectPending={startEditing}
      />
    </div>
  );
}
