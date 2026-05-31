import { StatusBadge } from "@/components/common/StatusBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Species } from "@/types/species";

interface PendingListProps {
  pendentes: Species[];
  onSelect: (item: Species) => void;
}

export function PendingList({ pendentes, onSelect }: PendingListProps) {
  return (
    <Card className="rounded-xl border border-green-100 bg-white/90 shadow-none backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-950">Itens pendentes</CardTitle>
        <CardDescription>Clique em um item para carregar no formulário</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {pendentes.length === 0 && (
          <p className="text-sm text-slate-700">
            Não há itens pendentes no momento.
          </p>
        )}
        {pendentes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className="w-full rounded-xl border border-green-100 p-3 bg-white text-left hover:bg-green-50 transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-green-950">{item.nome}</p>
                <p className="text-sm text-slate-600 italic">
                  {item.nomeCientifico}
                </p>
              </div>
              <StatusBadge status={item.status} />
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
