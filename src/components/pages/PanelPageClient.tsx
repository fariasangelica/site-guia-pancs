"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { AdminSection } from "@/sections/AdminSection";
import { useSpecies } from "@/hooks/useSpecies";

export function PanelPageClient() {
  const router = useRouter();
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

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-stone-50"
        >
          <LogOut className="h-4 w-4" />
          Sair do painel
        </button>
      </div>

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
