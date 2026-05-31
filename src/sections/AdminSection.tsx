"use client";

import { CheckCircle2, Settings } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdminForm } from "@/components/admin/AdminForm";
import { AdminRulesCard, CuratoriaCard } from "@/components/admin/AdminSidebar";
import { PendingList } from "@/components/admin/PendingList";
import { Species, SpeciesFormData } from "@/types/species";

interface AdminSectionProps {
  form: SpeciesFormData;
  editingId: number | null;
  mensagem: string;
  pendentes: Species[];
  onFieldChange: (field: keyof SpeciesFormData, value: string) => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleFeatured: () => void;
  onSendForAnalysis: () => void;
  onSelectPending: (item: Species) => void;
}

export function AdminSection({
  form,
  editingId,
  mensagem,
  pendentes,
  onFieldChange,
  onImageUpload,
  onEdit,
  onDelete,
  onToggleFeatured,
  onSendForAnalysis,
  onSelectPending,
}: AdminSectionProps) {
  return (
    <div className="space-y-8">
      {mensagem && (
        <Alert className="border-green-200 bg-green-50 rounded-xl">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Ação executada</AlertTitle>
          <AlertDescription>{mensagem}</AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <Card className="rounded-xl border border-green-100 bg-white/90 shadow-none backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-950">
              <Settings className="h-5 w-5 text-green-700" /> Painel administrativo
            </CardTitle>
            <CardDescription>
              Área para pessoas contribuírem com novas espécies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AdminForm
              form={form}
              editingId={editingId}
              onFieldChange={onFieldChange}
              onImageUpload={onImageUpload}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleFeatured={onToggleFeatured}
              onSendForAnalysis={onSendForAnalysis}
            />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <AdminRulesCard />
          <CuratoriaCard />
          <PendingList pendentes={pendentes} onSelect={onSelectPending} />
        </div>
      </div>
    </div>
  );
}
